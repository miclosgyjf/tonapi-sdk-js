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
 * @interface GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
 */
export interface GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner {
    /**
     *
     * @type {string}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
     */
    nodeIdShort: string;
    /**
     *
     * @type {string}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner
     */
    signature: string;
}
/**
 * Check if a given object implements the GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner interface.
 */
export declare function instanceOfGetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner(value: object): boolean;
export declare function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSON(json: any): GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner;
export declare function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner;
export declare function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInnerToJSON(value?: GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesSignaturesInner | null): any;
