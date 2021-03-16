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
exports.IssueRemoteLinks = void 0;
class IssueRemoteLinks {
    constructor(client) {
        this.client = client;
    }
    getRemoteIssueLinks(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/remotelink`,
                method: 'GET',
                params: {
                    globalId: parameters.globalId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getRemoteIssueLinks' });
        });
    }
    createOrUpdateRemoteIssueLink(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/remotelink`,
                method: 'POST',
                data: {
                    globalId: parameters.globalId,
                    application: parameters.application,
                    relationship: parameters.relationship,
                    object: parameters.object,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'createOrUpdateRemoteIssueLink' });
        });
    }
    deleteRemoteIssueLinkByGlobalId(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/remotelink`,
                method: 'DELETE',
                params: {
                    globalId: parameters.globalId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteRemoteIssueLinkByGlobalId' });
        });
    }
    getRemoteIssueLinkById(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/remotelink/${parameters.linkId}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getRemoteIssueLinkById' });
        });
    }
    updateRemoteIssueLink(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/remotelink/${parameters.linkId}`,
                method: 'PUT',
                data: {
                    globalId: parameters.globalId,
                    application: parameters.application,
                    relationship: parameters.relationship,
                    object: parameters.object,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateRemoteIssueLink' });
        });
    }
    deleteRemoteIssueLinkById(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issue/${parameters.issueIdOrKey}/remotelink/${parameters.linkId}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteRemoteIssueLinkById' });
        });
    }
}
exports.IssueRemoteLinks = IssueRemoteLinks;
//# sourceMappingURL=issueRemoteLinks.js.map