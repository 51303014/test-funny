import { IApiConfig } from '@realworld/shared/api/config';
const packageJson = require('../../../../package.json')

export const environment: IApiConfig = {
  production: false,
  applicationName: 'API',
  host: 'https://remi-funny-api.herokuapp.com',
  port: 3333,
  version: packageJson.version,
  debug: true,
  jwtSecret: 'jwtSecret',
  jwtExpiresIn: '1y'
};
