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
import type { AccountAddress } from './AccountAddress';
import type { JettonPreview } from './JettonPreview';
/**
 *
 * @export
 * @interface JettonQuantity
 */
export interface JettonQuantity {
    /**
     *
     * @type {string}
     * @memberof JettonQuantity
     */
    quantity: string;
    /**
     *
     * @type {AccountAddress}
     * @memberof JettonQuantity
     */
    walletAddress: AccountAddress;
    /**
     *
     * @type {JettonPreview}
     * @memberof JettonQuantity
     */
    jetton: JettonPreview;
}
/**
 * Check if a given object implements the JettonQuantity interface.
 */
export declare function instanceOfJettonQuantity(value: object): boolean;
export declare function JettonQuantityFromJSON(json: any): JettonQuantity;
export declare function JettonQuantityFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonQuantity;
export declare function JettonQuantityToJSON(value?: JettonQuantity | null): any;