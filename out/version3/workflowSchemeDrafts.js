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
exports.WorkflowSchemeDrafts = void 0;
class WorkflowSchemeDrafts {
    constructor(client) {
        this.client = client;
    }
    createWorkflowSchemeDraftFromParent(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/createdraft`,
                method: 'POST',
            };
            return this.client.sendRequest(config, callback, { methodName: 'createWorkflowSchemeDraftFromParent' });
        });
    }
    getWorkflowSchemeDraft(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getWorkflowSchemeDraft' });
        });
    }
    updateWorkflowSchemeDraft(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft`,
                method: 'PUT',
                data: {
                    name: parameters.name,
                    description: parameters.description,
                    defaultWorkflow: parameters.defaultWorkflow,
                    issueTypeMappings: parameters.issueTypeMappings,
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateWorkflowSchemeDraft' });
        });
    }
    deleteWorkflowSchemeDraft(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteWorkflowSchemeDraft' });
        });
    }
    getDraftDefaultWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/default`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getDraftDefaultWorkflow' });
        });
    }
    updateDraftDefaultWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/default`,
                method: 'PUT',
                data: {
                    workflow: parameters.workflow,
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateDraftDefaultWorkflow' });
        });
    }
    deleteDraftDefaultWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/default`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteDraftDefaultWorkflow' });
        });
    }
    getWorkflowSchemeDraftIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/issuetype/${parameters.issueType}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getWorkflowSchemeDraftIssueType' });
        });
    }
    setWorkflowSchemeDraftIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/issuetype/${parameters.issueType}`,
                method: 'PUT',
                data: parameters.body,
            };
            return this.client.sendRequest(config, callback, { methodName: 'setWorkflowSchemeDraftIssueType' });
        });
    }
    deleteWorkflowSchemeDraftIssueType(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/issuetype/${parameters.issueType}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteWorkflowSchemeDraftIssueType' });
        });
    }
    getDraftWorkflow(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/workflow`,
                method: 'GET',
                params: {
                    workflowName: parameters.workflowName,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getDraftWorkflow' });
        });
    }
    updateDraftWorkflowMapping(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/workflow`,
                method: 'PUT',
                params: {
                    workflowName: parameters.workflowName,
                },
                data: {
                    workflow: parameters.workflow,
                    issueTypes: parameters.issueTypes,
                    defaultMapping: parameters.defaultMapping,
                    updateDraftIfNeeded: parameters.updateDraftIfNeeded,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateDraftWorkflowMapping' });
        });
    }
    deleteDraftWorkflowMapping(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/workflowscheme/${parameters.id}/draft/workflow`,
                method: 'DELETE',
                params: {
                    workflowName: parameters.workflowName,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteDraftWorkflowMapping' });
        });
    }
}
exports.WorkflowSchemeDrafts = WorkflowSchemeDrafts;
//# sourceMappingURL=workflowSchemeDrafts.js.map