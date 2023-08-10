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
 * @interface GetRawListBlockTransactions200ResponseIdsInner
 */
export interface GetRawListBlockTransactions200ResponseIdsInner {
    /**
     *
     * @type {number}
     * @memberof GetRawListBlockTransactions200ResponseIdsInner
     */
    mode: number;
    /**
     *
     * @type {string}
     * @memberof GetRawListBlockTransactions200ResponseIdsInner
     */
    account?: string;
    /**
     *
     * @type {number}
     * @memberof GetRawListBlockTransactions200ResponseIdsInner
     */
    lt?: number;
    /**
     *
     * @type {string}
     * @memberof GetRawListBlockTransactions200ResponseIdsInner
     */
    hash?: string;
}
/**
 * Check if a given object implements the GetRawListBlockTransactions200ResponseIdsInner interface.
 */
export declare function instanceOfGetRawListBlockTransactions200ResponseIdsInner(value: object): boolean;
export declare function GetRawListBlockTransactions200ResponseIdsInnerFromJSON(json: any): GetRawListBlockTransactions200ResponseIdsInner;
export declare function GetRawListBlockTransactions200ResponseIdsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawListBlockTransactions200ResponseIdsInner;
export declare function GetRawListBlockTransactions200ResponseIdsInnerToJSON(value?: GetRawListBlockTransactions200ResponseIdsInner | null): any;
