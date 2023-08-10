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
/**
 *
 * @export
 * @interface SendRawMessage200Response
 */
export interface SendRawMessage200Response {
    /**
     *
     * @type {number}
     * @memberof SendRawMessage200Response
     */
    code: number;
}
/**
 * Check if a given object implements the SendRawMessage200Response interface.
 */
export declare function instanceOfSendRawMessage200Response(value: object): boolean;
export declare function SendRawMessage200ResponseFromJSON(json: any): SendRawMessage200Response;
export declare function SendRawMessage200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendRawMessage200Response;
export declare function SendRawMessage200ResponseToJSON(value?: SendRawMessage200Response | null): any;
