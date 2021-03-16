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
exports.DevelopmentInformation = void 0;
class DevelopmentInformation {
    constructor(client) {
        this.client = client;
    }
    storeDevelopmentInformation(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/devinfo/0.10/bulk',
                method: 'POST',
                headers: {
                    Authorization: parameters.Authorization,
                },
                data: {
                    repositories: parameters.repositories,
                    preventTransitions: parameters.preventTransitions,
                    properties: parameters.properties,
                    providerMetadata: parameters.providerMetadata,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'storeDevelopmentInformation' });
        });
    }
    getRepository(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/devinfo/0.10/repository/${parameters.repositoryId}`,
                method: 'GET',
                headers: {
                    Authorization: parameters.Authorization,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'getRepository' });
        });
    }
    deleteRepository(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/devinfo/0.10/repository/${parameters.repositoryId}`,
                method: 'DELETE',
                headers: {
                    Authorization: parameters.Authorization,
                },
                params: {
                    _updateSequenceId: parameters._updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteRepository' });
        });
    }
    deleteByProperties(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/devinfo/0.10/bulkByProperties',
                method: 'DELETE',
                headers: {
                    Authorization: parameters.Authorization,
                },
                params: {
                    _updateSequenceId: parameters._updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteByProperties' });
        });
    }
    existsByProperties(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: '/devinfo/0.10/existsByProperties',
                method: 'GET',
                headers: {
                    Authorization: parameters.Authorization,
                },
                params: {
                    _updateSequenceId: parameters._updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'existsByProperties' });
        });
    }
    deleteEntity(parameters, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: `/devinfo/0.10/repository/${parameters.repositoryId}/${parameters.entityType}/${parameters.entityId}`,
                method: 'DELETE',
                headers: {
                    Authorization: parameters.Authorization,
                },
                params: {
                    _updateSequenceId: parameters._updateSequenceId,
                },
            };
            return this.client.sendRequest(config, callback, { methodName: 'deleteEntity' });
        });
    }
}
exports.DevelopmentInformation = DevelopmentInformation;
//# sourceMappingURL=developmentInformation.js.map