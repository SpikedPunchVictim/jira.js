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
exports.IssueCommentProperties = void 0;
class IssueCommentProperties {
    constructor(client) {
        this.client = client;
    }
    getCommentPropertyKeys(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/comment/${parameters.commentId}/properties`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getCommentPropertyKeys' });
        });
    }
    getCommentProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/comment/${parameters.commentId}/properties/${parameters.propertyKey}`,
                method: 'GET',
            };
            return this.client.sendRequest(config, callback, { methodName: 'getCommentProperty' });
        });
    }
    setCommentProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/comment/${parameters.commentId}/properties/${parameters.propertyKey}`,
                method: 'PUT',
            };
            return this.client.sendRequest(config, callback, { methodName: 'setCommentProperty' });
        });
    }
    deleteCommentProperty(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/rest/api/3/comment/${parameters.commentId}/properties/${parameters.propertyKey}`,
                method: 'DELETE',
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteCommentProperty' });
        });
    }
}
exports.IssueCommentProperties = IssueCommentProperties;
//# sourceMappingURL=issueCommentProperties.js.map