import { IConfiguration } from '@realworld/shared/configuration';
const packageJson = require('../../../../package.json')

export const environment: Partial<IConfiguration> = {
  applicationName: 'funny',
  version: packageJson.version,
  production: true,
  debug: false,
  rest: {
    url: 'https://remi-funny-api.herokuapp.com/api'
  },
  logging: {
    sendToCentralizedServer: true,
    sendToConsole: false
  },
}
