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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendBlockchainMessageRequestToJSON = exports.SendBlockchainMessageRequestFromJSONTyped = exports.SendBlockchainMessageRequestFromJSON = exports.instanceOfSendBlockchainMessageRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SendBlockchainMessageRequest interface.
 */
function instanceOfSendBlockchainMessageRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSendBlockchainMessageRequest = instanceOfSendBlockchainMessageRequest;
function SendBlockchainMessageRequestFromJSON(json) {
    return SendBlockchainMessageRequestFromJSONTyped(json, false);
}
exports.SendBlockchainMessageRequestFromJSON = SendBlockchainMessageRequestFromJSON;
function SendBlockchainMessageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'boc': !(0, runtime_1.exists)(json, 'boc') ? undefined : json['boc'],
        'batch': !(0, runtime_1.exists)(json, 'batch') ? undefined : json['batch'],
    };
}
exports.SendBlockchainMessageRequestFromJSONTyped = SendBlockchainMessageRequestFromJSONTyped;
function SendBlockchainMessageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'boc': value.boc,
        'batch': value.batch,
    };
}
exports.SendBlockchainMessageRequestToJSON = SendBlockchainMessageRequestToJSON;
