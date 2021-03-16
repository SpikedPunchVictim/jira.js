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
exports.IssueTypes = void 0;
class IssueTypes {
    constructor(client) {
        this.client = client;
    }
    getIssueAllTypes(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetype',
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getIssueAllTypes' });
        });
    }
    createIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/issuetype',
                method: 'POST',
                data: {
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    type: parameters === null || parameters === void 0 ? void 0 : parameters.type,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'createIssueType' });
        });
    }
    getIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getIssueType' });
        });
    }
    updateIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                    avatarId: parameters.avatarId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateIssueType' });
        });
    }
    deleteIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}`,
                method: 'DELETE',
                params: {
                    alternativeIssueTypeId: parameters.alternativeIssueTypeId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteIssueType' });
        });
    }
    getAlternativeIssueTypes(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}/alternatives`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getAlternativeIssueTypes' });
        });
    }
    createIssueTypeAvatar(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/issuetype/${parameters.id}/avatar2`,
                method: 'POST',
                params: {
                    x: parameters.x,
                    y: parameters.y,
                    size: parameters.size,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'createIssueTypeAvatar' });
        });
    }
}
exports.IssueTypes = IssueTypes;
//# sourceMappingURL=issueTypes.js.map