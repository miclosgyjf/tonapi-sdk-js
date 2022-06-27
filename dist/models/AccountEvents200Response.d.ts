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
import type { AccountEvent } from './AccountEvent';
/**
 *
 * @export
 * @interface AccountEvents200Response
 */
export interface AccountEvents200Response {
    /**
     *
     * @type {Array<AccountEvent>}
     * @memberof AccountEvents200Response
     */
    events: Array<AccountEvent>;
}
/**
 * Check if a given object implements the AccountEvents200Response interface.
 */
export declare function instanceOfAccountEvents200Response(value: object): boolean;
export declare function AccountEvents200ResponseFromJSON(json: any): AccountEvents200Response;
export declare function AccountEvents200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountEvents200Response;
export declare function AccountEvents200ResponseToJSON(value?: AccountEvents200Response | null): any;