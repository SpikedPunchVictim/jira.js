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
exports.Workflows = void 0;
class Workflows {
    constructor(client) {
        this.client = client;
    }
    getAllWorkflows(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/workflow',
                method: 'GET',
                params: {
                    workflowName: parameters === null || parameters === void 0 ? void 0 : parameters.workflowName,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getAllWorkflows' });
        });
    }
    getWorkflowsPaginated(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/2/workflow/search',
                method: 'GET',
                params: {
                    startAt: parameters === null || parameters === void 0 ? void 0 : parameters.startAt,
                    maxResults: parameters === null || parameters === void 0 ? void 0 : parameters.maxResults,
                    workflowName: parameters === null || parameters === void 0 ? void 0 : parameters.workflowName,
                    expand: parameters === null || parameters === void 0 ? void 0 : parameters.expand,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getWorkflowsPaginated' });
        });
    }
}
exports.Workflows = Workflows;
//# sourceMappingURL=workflows.js.map