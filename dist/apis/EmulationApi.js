"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
exports.EmulationApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class EmulationApi extends runtime.BaseAPI {
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToAccountEventRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling emulateMessageToAccountEvent.');
            }
            if (requestParameters.emulateMessageToEventRequest === null || requestParameters.emulateMessageToEventRequest === undefined) {
                throw new runtime.RequiredError('emulateMessageToEventRequest', 'Required parameter requestParameters.emulateMessageToEventRequest was null or undefined when calling emulateMessageToAccountEvent.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/events/emulate`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.EmulateMessageToEventRequestToJSON)(requestParameters.emulateMessageToEventRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountEventFromJSON)(jsonValue));
        });
    }
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToAccountEvent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.emulateMessageToAccountEventRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToEventRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.emulateMessageToEventRequest === null || requestParameters.emulateMessageToEventRequest === undefined) {
                throw new runtime.RequiredError('emulateMessageToEventRequest', 'Required parameter requestParameters.emulateMessageToEventRequest was null or undefined when calling emulateMessageToEvent.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/events/emulate`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.EmulateMessageToEventRequestToJSON)(requestParameters.emulateMessageToEventRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.EventFromJSON)(jsonValue));
        });
    }
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToEvent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.emulateMessageToEventRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToTraceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.emulateMessageToEventRequest === null || requestParameters.emulateMessageToEventRequest === undefined) {
                throw new runtime.RequiredError('emulateMessageToEventRequest', 'Required parameter requestParameters.emulateMessageToEventRequest was null or undefined when calling emulateMessageToTrace.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/v2/traces/emulate`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.EmulateMessageToEventRequestToJSON)(requestParameters.emulateMessageToEventRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TraceFromJSON)(jsonValue));
        });
    }
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToTrace(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.emulateMessageToTraceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToWalletRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.emulateMessageToEventRequest === null || requestParameters.emulateMessageToEventRequest === undefined) {
                throw new runtime.RequiredError('emulateMessageToEventRequest', 'Required parameter requestParameters.emulateMessageToEventRequest was null or undefined when calling emulateMessageToWallet.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/wallet/emulate`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.EmulateMessageToEventRequestToJSON)(requestParameters.emulateMessageToEventRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.MessageConsequencesFromJSON)(jsonValue));
        });
    }
    /**
     * Emulate sending message to blockchain
     */
    emulateMessageToWallet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.emulateMessageToWalletRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.EmulationApi = EmulationApi;
