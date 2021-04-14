"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
var packageJson = require('../../../../package.json');
exports.environment = {
    production: true,
    applicationName: 'Sen Viet API',
    host: 'http://localhost',
    port: 3333,
    version: packageJson.version,
    debug: true,
    jwtSecret: 'jwtSecret',
    jwtExpiresIn: '1y'
};
