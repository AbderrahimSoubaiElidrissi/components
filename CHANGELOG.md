# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.1.1](https://github.com/serverless/components/compare/v3.1.0...v3.1.1) (2020-08-31)

- Bug Fix: As long as any config file existed(`yml` or `yaml` extension name), cli will write the name back to the origin file or create a new `yml` file for users in China

## [3.1.0](https://github.com/serverless/components/compare/v3.0.0...v3.1.0) (2020-08-31)

- Feature: Users in China can search case-insensitive name of components onboarding

## [3.0.0](https://github.com/serverless/components/compare/v2.34.9...v3.0.0) (2020-08-28)

### ⚠ BREAKING CHANGES

- Node.js version below v10 are no longer supported

### Features

- Drop support for Node.js versions below v10 ([3afcc20](https://github.com/serverless/components/commit/3afcc209e043ae817511e0b5c462c79856f75490))

### [2.34.9](https://github.com/serverless/components/compare/v2.34.8...v2.34.9) (2020-08-28)

- Bug fix: Fix dev mode deployment outputs

### [2.34.8](https://github.com/serverless/components/compare/v2.34.7...v2.34.8) (2020-08-27)

- Feature: When users in China init or use cli onboarding to create a new serverless project, the cli will repopulate the name variable into the app field of the yaml file.

### [2.34.7](https://github.com/serverless/components/compare/v2.34.6...v2.34.7) (2020-08-21)

- Dev Mode Fix: Fixes a bug that did not remove the agent from user applications when they disable Dev Mode. Since the agent was still running in prod apps, it was causing slow performance due to log/error streaming.

### [2.34.6](https://github.com/serverless/components/compare/v2.34.5...v2.34.6) (2020-08-19)

### Bug Fixes

- Fix Node.js v8 support ([#770](https://github.com/serverless/components/issues/770)) ([517a105](https://github.com/serverless/components/commit/517a105b963c4910e4d7a42fb7c95732a972c43b)) ([mzong](https://github.com/zongUMR))

### [2.34.5](https://github.com/serverless/components/compare/v2.34.4...v2.34.5) (2020-08-05)

- Adds unpublish command
- Inherit app property from template root if exists

### [2.34.4](https://github.com/serverless/components/compare/v2.34.3...v2.34.4) (2020-08-05)

Fix bug in init where process.cwd() was being used instead of the new directory, causing issues with configuration files.

### [2.34.3](https://github.com/serverless/components/compare/v2.34.2...v2.34.3) (2020-08-05)

Fix dev mode

### [2.34.1](https://github.com/serverless/components/compare/v2.34.0...v2.34.1) (2020-08-05)

_Maintanance Update_

## [2.34.0](https://github.com/serverless/components/compare/v2.33.4...v2.34.0) (2020-08-05)

### Features

- Error handling improvements ([Austen](https://github.com/ac360))

### Bug Fixes

- Fix `sls publish` command, so it works again ([#739](https://github.com/serverless/components/pull/739)) ([e4a3a0f](https://github.com/serverless/components/commit/e4a3a0f8543e74ee4602e308cfa8c4ef5067a66b)) ([AJ Stuyvenberg](https://github.com/astuyve))
