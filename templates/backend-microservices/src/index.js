module.exports.createUser = async (e) => {
  return {
    statusCode: 200,
    body: 'Successfully Created User'
  }
}

module.exports.getUser = async (e) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ email: 'jeff@lebowski.com' })
  }
}

module.exports.auth = async (event, context) => {
  return {
    principalId: 'user',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: event.methodArn
        }
      ]
    }
  }
}
