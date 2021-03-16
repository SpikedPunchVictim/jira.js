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
exports.Groups = void 0;
class Groups {
    constructor(client) {
        this.client = client;
    }
    getGroup(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/group',
                method: 'GET',
                params: {
                    groupname: parameters.groupname,
                    expand: parameters.expand,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getGroup' });
        });
    }
    createGroup(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/group',
                method: 'POST',
                data: {
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'createGroup' });
        });
    }
    removeGroup(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/group',
                method: 'DELETE',
                params: {
                    groupname: parameters.groupname,
                    swapGroup: parameters.swapGroup,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'removeGroup' });
        });
    }
    bulkGetGroups(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/group/bulk',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    groupId: parameters === null || parameters === void 0 ? void 0 : parameters.groupId,
                    groupName: parameters === null || parameters === void 0 ? void 0 : parameters.groupName,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'bulkGetGroups' });
        });
    }
    getUsersFromGroup(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/group/member',
                method: 'GET',
                params: {
                    groupname: parameters.groupname,
                    includeInactiveUsers: parameters.includeInactiveUsers,
                    startAt: parameters.startAt,
                    maxResults: parameters.maxResults,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getUsersFromGroup' });
        });
    }
    addUserToGroup(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/group/user',
                method: 'POST',
                params: {
                    groupname: parameters.groupname,
                },
                data: {
                    name: parameters.name,
                    accountId: parameters.accountId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'addUserToGroup' });
        });
    }
    removeUserFromGroup(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/group/user',
                method: 'DELETE',
                params: {
                    groupname: parameters.groupname,
                    username: parameters.username,
                    accountId: parameters.accountId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'removeUserFromGroup' });
        });
    }
    findGroups(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/groups/picker',
                method: 'GET',
                params: {
                    accountId: parameters === null || parameters === void 0 ? void 0 : parameters.accountId,
                    query: parameters === null || parameters === void 0 ? void 0 : parameters.query,
                    exclude: parameters === null || parameters === void 0 ? void 0 : parameters.exclude,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    userName: parameters === null || parameters === void 0 ? void 0 : parameters.userName,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'findGroups' });
        });
    }
}
exports.Groups = Groups;
//# sourceMappingURL=groups.js.map