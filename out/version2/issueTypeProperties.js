"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueTypeProperties = void 0;
class IssueTypeProperties {
    constructor(client) {
        this.client = client;
    }
    getIssueTypePropertyKeys(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.issueTypeId}/properties`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getIssueTypePropertyKeys' });
        });
    }
    getIssueTypeProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.issueTypeId}/properties/${parameters.propertyKey}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getIssueTypeProperty' });
        });
    }
    setIssueTypeProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.issueTypeId}/properties/${parameters.propertyKey}`,
                method: 'PUT',
            };
            return this.client.sendRequest(config, callback, { methodName: 'setIssueTypeProperty' });
        });
    }
    deleteIssueTypeProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.issueTypeId}/properties/${parameters.propertyKey}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteIssueTypeProperty' });
        });
    }
}
exports.IssueTypeProperties = IssueTypeProperties;
//# sourceMappingURL=issueTypeProperties.js.map