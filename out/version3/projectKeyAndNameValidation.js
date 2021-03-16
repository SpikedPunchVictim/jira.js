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
exports.ProjectKeyAndNameValidation = void 0;
class ProjectKeyAndNameValidation {
    constructor(client) {
        this.client = client;
    }
    validateProjectKey(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/projectvalidate/key',
                method: 'GET',
                params: {
                    key: parameters === null || parameters === void 0 ? void 0 : parameters.key,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'validateProjectKey' });
        });
    }
    getValidProjectKey(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/projectvalidate/validProjectKey',
                method: 'GET',
                params: {
                    key: parameters === null || parameters === void 0 ? void 0 : parameters.key,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getValidProjectKey' });
        });
    }
    getValidProjectName(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/rest/api/3/projectvalidate/validProjectName',
                method: 'GET',
                params: {
                    name: parameters.name,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getValidProjectName' });
        });
    }
}
exports.ProjectKeyAndNameValidation = ProjectKeyAndNameValidation;
//# sourceMappingURL=projectKeyAndNameValidation.js.map