/*
 * CLI: Command: Registry
 */

const { ServerlessSDK } = require('@serverless/platform-client')
const utils = require('../utils')

/**
 * Publish a Component to the Serverless Registry
 * @param {*} config 
 * @param {*} cli 
 */
const publish = async (config, cli) => {

  // Disable timer
  config.timer = false

  // Start CLI persistance status
  cli.start('Initializing')

  // Ensure the user is logged in, or advertise
  if (!utils.isLoggedIn()) { cli.advertise() }

  // Load YAML
  const componentYaml = await utils.loadComponentConfig(process.cwd())

  // Presentation
  cli.logRegistryLogo()
  cli.log(`Publishing "${componentYaml.name}@${config.dev ? 'dev' : componentYaml.version}"...`, 'grey')

  // Get access key
  const accessKey = await utils.getTokenId()

  // Check they are logged in
  if (!accessKey) {
    cli.error(`Run 'serverless login' first to publish your serverless component.`, true)
  }

  const sdk = new ServerlessSDK({ accessKey })

  // If "--dev" flag is used, set the version the API expects
  if (config.dev) {
    componentYaml.version = '0.0.0-dev'
  }

  // Publish
  cli.status('Publishing')

  let component
  try {
    component = await sdk.publishComponent(componentYaml)
  } catch(error) {
    if (error.message.includes('409')) {
      error.message = error.message.replace('409 - ', '')
      cli.error(error.message, true)
    } else {
      throw error
    }
  }

  if (component.component && component.component.version === '0.0.0-dev') {
    component.component.version = 'dev'
  }

  cli.close(
    'success',
    `Successfully published ${component.component.componentName}@${component.component.version}`
  )
}


/**
 * Get a Component from the Serverless Registry
 * @param {*} config 
 * @param {*} cli 
 */
const getComponent = async (config, cli) => {

  const componentName = config.params[0]

  // Start CLI persistance status
  cli.start(`Fetching versions for: ${componentName}`)

  const sdk = new ServerlessSDK()
  const data = await sdk.getComponent(componentName)

  if (!data.component) {
    cli.error(`Component "${componentName}" not found in the Serverless Registry.`, true)
  }

  const devVersion = data.versions.indexOf('0.0.0-dev')
  if (devVersion !== -1) data.versions.splice(devVersion, 1)

  cli.logRegistryLogo()
  cli.log()
  cli.log(`Component: ${componentName}`)
  cli.log(`Description: ${data.component.description}`)
  cli.log(`Latest Version: ${data.component.version}`)
  cli.log(`Author: ${data.component.author}`)
  cli.log(`Repo: ${data.component.repo}`)
  cli.log()
  cli.log(`Available Versions:`)
  cli.log(`${data.versions.join(', ')}`)

  cli.close('success', `Component information listed for "${componentName}"`)
}

/**
 * List Featured
 * @param {*} config 
 * @param {*} cli 
 */
const listFeatured = async (config, cli) => {

  cli.logRegistryLogo()
  cli.log()

  cli.log(`Featured Components:`)
  cli.log()
  cli.log(`  - express`)
  cli.log(`  - website`)
  cli.log(`  - aws-lambda`)
  cli.log(`  - aws-dynamodb`)
  cli.log(`  - aws-iam-role`)
  cli.log(`  - aws-lambda-layer`)
  cli.log()
  cli.log(`Find more here: https://github.com/serverless-components`)
  cli.log()
}

/**
 * Route Registry Command
 */
module.exports = async (config, cli) => {
  if (!config.params[0]) return await listFeatured(config, cli)
  if (config.params[0] === 'publish') return await publish(config, cli)
  else return await getComponent(config, cli)
}
