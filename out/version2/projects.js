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
exports.Projects = void 0;
class Projects {
    constructor(client) {
        this.client = client;
    }
    getAllProjects(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/project',
                method: 'GET',
                params: {
                    expand: parameters === null || parameters === void 0 ? void 0 : parameters.expand,
                    recent: parameters === null || parameters === void 0 ? void 0 : parameters.recent,
                    properties: parameters === null || parameters === void 0 ? void 0 : parameters.properties,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getAllProjects' });
        });
    }
    createProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/project',
                method: 'POST',
                data: {
                    key: parameters === null || parameters === void 0 ? void 0 : parameters.key,
                    name: parameters === null || parameters === void 0 ? void 0 : parameters.name,
                    projectTypeKey: parameters === null || parameters === void 0 ? void 0 : parameters.projectTypeKey,
                    projectTemplateKey: parameters === null || parameters === void 0 ? void 0 : parameters.projectTemplateKey,
                    description: parameters === null || parameters === void 0 ? void 0 : parameters.description,
                    lead: parameters === null || parameters === void 0 ? void 0 : parameters.lead,
                    leadAccountId: parameters === null || parameters === void 0 ? void 0 : parameters.leadAccountId,
                    url: parameters === null || parameters === void 0 ? void 0 : parameters.url,
                    assigneeType: parameters === null || parameters === void 0 ? void 0 : parameters.assigneeType,
                    avatarId: parameters === null || parameters === void 0 ? void 0 : parameters.avatarId,
                    issueSecurityScheme: parameters === null || parameters === void 0 ? void 0 : parameters.issueSecurityScheme,
                    permissionScheme: parameters === null || parameters === void 0 ? void 0 : parameters.permissionScheme,
                    notificationScheme: parameters === null || parameters === void 0 ? void 0 : parameters.notificationScheme,
                    categoryId: parameters === null || parameters === void 0 ? void 0 : parameters.categoryId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'createProject' });
        });
    }
    searchProjects(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/project/search',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    orderBy: parameters === null || parameters === void 0 ? void 0 : parameters.orderBy,
                    query: parameters === null || parameters === void 0 ? void 0 : parameters.query,
                    typeKey: parameters === null || parameters === void 0 ? void 0 : parameters.typeKey,
                    categoryId: parameters === null || parameters === void 0 ? void 0 : parameters.categoryId,
                    action: parameters === null || parameters === void 0 ? void 0 : parameters.action,
                    expand: parameters === null || parameters === void 0 ? void 0 : parameters.expand,
                    status: parameters === null || parameters === void 0 ? void 0 : parameters.status,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'searchProjects' });
        });
    }
    getProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}`,
                method: 'GET',
                params: {
                    expand: parameters.expand,
                    properties: parameters.properties,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getProject' });
        });
    }
    updateProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}`,
                method: 'PUT',
                params: {
                    expand: parameters.expand,
                },
                data: {
                    key: parameters.key,
                    name: parameters.name,
                    projectTypeKey: parameters.projectTypeKey,
                    projectTemplateKey: parameters.projectTemplateKey,
                    description: parameters.description,
                    lead: parameters.lead,
                    leadAccountId: parameters.leadAccountId,
                    url: parameters.url,
                    assigneeType: parameters.assigneeType,
                    avatarId: parameters.avatarId,
                    issueSecurityScheme: parameters.issueSecurityScheme,
                    permissionScheme: parameters.permissionScheme,
                    notificationScheme: parameters.notificationScheme,
                    categoryId: parameters.categoryId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateProject' });
        });
    }
    deleteProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}`,
                method: 'DELETE',
                params: {
                    enableUndo: parameters.enableUndo,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteProject' });
        });
    }
    archiveProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/archive`,
                method: 'POST',
            };
            return this.client.sendRequest(config, callback, { methodName: 'archiveProject' });
        });
    }
    deleteProjectAsynchronously(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/delete`,
                method: 'POST',
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteProjectAsynchronously' });
        });
    }
    restore(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/restore`,
                method: 'POST',
            };
            return this.client.sendRequest(config, callback, { methodName: 'restore' });
        });
    }
    getAllStatuses(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/statuses`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getAllStatuses' });
        });
    }
    updateProjectType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectIdOrKey}/type/${parameters.newProjectTypeKey}`,
                method: 'PUT',
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateProjectType' });
        });
    }
    getHierarchy(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectId}/hierarchy`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getHierarchy' });
        });
    }
    getNotificationSchemeForProject(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/2/project/${parameters.projectKeyOrId}/notificationscheme`,
                method: 'GET',
                params: {
                    expand: parameters.expand,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getNotificationSchemeForProject' });
        });
    }
}
exports.Projects = Projects;
//# sourceMappingURL=projects.js.map