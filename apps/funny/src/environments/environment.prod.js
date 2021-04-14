"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
var packageJson = require('../../../../package.json');
exports.environment = {
    applicationName: 'Conduit',
    version: packageJson.version,
    production: true,
    debug: false,
    rest: {
        url: 'http://localhost:3333/api'
    },
    logging: {
        sendToCentralizedServer: true,
        sendToConsole: false
    },
};
