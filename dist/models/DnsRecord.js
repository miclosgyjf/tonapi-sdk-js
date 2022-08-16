"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsRecordToJSON = exports.DnsRecordFromJSONTyped = exports.DnsRecordFromJSON = exports.instanceOfDnsRecord = void 0;
const runtime_1 = require("../runtime");
const WalletDNS_1 = require("./WalletDNS");
/**
 * Check if a given object implements the DnsRecord interface.
 */
function instanceOfDnsRecord(value) {
    let isInstance = true;
    isInstance = isInstance && "site" in value;
    return isInstance;
}
exports.instanceOfDnsRecord = instanceOfDnsRecord;
function DnsRecordFromJSON(json) {
    return DnsRecordFromJSONTyped(json, false);
}
exports.DnsRecordFromJSON = DnsRecordFromJSON;
function DnsRecordFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nextResolver': !(0, runtime_1.exists)(json, 'next_resolver') ? undefined : json['next_resolver'],
        'site': json['site'],
        'wallet': !(0, runtime_1.exists)(json, 'wallet') ? undefined : (0, WalletDNS_1.WalletDNSFromJSON)(json['wallet']),
    };
}
exports.DnsRecordFromJSONTyped = DnsRecordFromJSONTyped;
function DnsRecordToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'next_resolver': value.nextResolver,
        'site': value.site,
        'wallet': (0, WalletDNS_1.WalletDNSToJSON)(value.wallet),
    };
}
exports.DnsRecordToJSON = DnsRecordToJSON;