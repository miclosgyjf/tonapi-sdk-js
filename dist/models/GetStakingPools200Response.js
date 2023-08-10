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
exports.GetStakingPools200ResponseToJSON = exports.GetStakingPools200ResponseFromJSONTyped = exports.GetStakingPools200ResponseFromJSON = exports.instanceOfGetStakingPools200Response = void 0;
const runtime_1 = require("../runtime");
const PoolImplementation_1 = require("./PoolImplementation");
const PoolInfo_1 = require("./PoolInfo");
/**
 * Check if a given object implements the GetStakingPools200Response interface.
 */
function instanceOfGetStakingPools200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "pools" in value;
    isInstance = isInstance && "implementations" in value;
    return isInstance;
}
exports.instanceOfGetStakingPools200Response = instanceOfGetStakingPools200Response;
function GetStakingPools200ResponseFromJSON(json) {
    return GetStakingPools200ResponseFromJSONTyped(json, false);
}
exports.GetStakingPools200ResponseFromJSON = GetStakingPools200ResponseFromJSON;
function GetStakingPools200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pools': (json['pools'].map(PoolInfo_1.PoolInfoFromJSON)),
        'implementations': ((0, runtime_1.mapValues)(json['implementations'], PoolImplementation_1.PoolImplementationFromJSON)),
    };
}
exports.GetStakingPools200ResponseFromJSONTyped = GetStakingPools200ResponseFromJSONTyped;
function GetStakingPools200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pools': (value.pools.map(PoolInfo_1.PoolInfoToJSON)),
        'implementations': ((0, runtime_1.mapValues)(value.implementations, PoolImplementation_1.PoolImplementationToJSON)),
    };
}
exports.GetStakingPools200ResponseToJSON = GetStakingPools200ResponseToJSON;
