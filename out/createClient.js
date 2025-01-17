"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.ClientType = void 0;
const clients_1 = require("./clients");
const agile_1 = require("./agile");
const version2_1 = require("./version2");
const version3_1 = require("./version3");
var ClientType;
(function (ClientType) {
    ClientType["Agile"] = "agile";
    ClientType["Version2"] = "version2";
    ClientType["Version3"] = "version3";
})(ClientType = exports.ClientType || (exports.ClientType = {}));
function createClient(clientType, config) {
    switch (clientType) {
        case ClientType.Agile:
            return new agile_1.AgileClient(config);
        case ClientType.Version2:
            return new version2_1.Version2Client(config);
        case ClientType.Version3:
            return new version3_1.Version3Client(config);
        default:
            return new clients_1.BaseClient(config);
    }
}
exports.createClient = createClient;
//# sourceMappingURL=createClient.js.map