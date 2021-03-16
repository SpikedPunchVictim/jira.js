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
exports.ProjectEmail = void 0;
class ProjectEmail {
    constructor(client) {
        this.client = client;
    }
    getProjectEmail(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/project/${parameters.projectId}/email`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getProjectEmail' });
        });
    }
    updateProjectEmail(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/project/${parameters.projectId}/email`,
                method: 'PUT',
                data: {
                    emailAddress: parameters.emailAddress,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'updateProjectEmail' });
        });
    }
}
exports.ProjectEmail = ProjectEmail;
//# sourceMappingURL=projectEmail.js.map