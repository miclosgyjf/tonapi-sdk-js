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
import type { BlockRaw } from './BlockRaw';
import type { GetRawListBlockTransactions200ResponseIdsInner } from './GetRawListBlockTransactions200ResponseIdsInner';
/**
 *
 * @export
 * @interface GetRawListBlockTransactions200Response
 */
export interface GetRawListBlockTransactions200Response {
    /**
     *
     * @type {BlockRaw}
     * @memberof GetRawListBlockTransactions200Response
     */
    id: BlockRaw;
    /**
     *
     * @type {number}
     * @memberof GetRawListBlockTransactions200Response
     */
    reqCount: number;
    /**
     *
     * @type {boolean}
     * @memberof GetRawListBlockTransactions200Response
     */
    incomplete: boolean;
    /**
     *
     * @type {Array<GetRawListBlockTransactions200ResponseIdsInner>}
     * @memberof GetRawListBlockTransactions200Response
     */
    ids: Array<GetRawListBlockTransactions200ResponseIdsInner>;
    /**
     *
     * @type {string}
     * @memberof GetRawListBlockTransactions200Response
     */
    proof: string;
}
/**
 * Check if a given object implements the GetRawListBlockTransactions200Response interface.
 */
export declare function instanceOfGetRawListBlockTransactions200Response(value: object): boolean;
export declare function GetRawListBlockTransactions200ResponseFromJSON(json: any): GetRawListBlockTransactions200Response;
export declare function GetRawListBlockTransactions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawListBlockTransactions200Response;
export declare function GetRawListBlockTransactions200ResponseToJSON(value?: GetRawListBlockTransactions200Response | null): any;