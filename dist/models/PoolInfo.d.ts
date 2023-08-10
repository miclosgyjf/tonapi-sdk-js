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
 * @interface PoolInfo
 */
export interface PoolInfo {
    /**
     *
     * @type {string}
     * @memberof PoolInfo
     */
    address: string;
    /**
     *
     * @type {string}
     * @memberof PoolInfo
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof PoolInfo
     */
    totalAmount: number;
    /**
     *
     * @type {string}
     * @memberof PoolInfo
     */
    implementation: PoolInfoImplementationEnum;
    /**
     * APY in percent
     * @type {number}
     * @memberof PoolInfo
     */
    apy: number;
    /**
     *
     * @type {number}
     * @memberof PoolInfo
     */
    minStake: number;
    /**
     * current nomination cycle beginning timestamp
     * @type {number}
     * @memberof PoolInfo
     */
    cycleStart: number;
    /**
     * current nomination cycle ending timestamp
     * @type {number}
     * @memberof PoolInfo
     */
    cycleEnd: number;
    /**
     * this pool has verified source code or managed by trusted company
     * @type {boolean}
     * @memberof PoolInfo
     */
    verified: boolean;
    /**
     * current number of nominators
     * @type {number}
     * @memberof PoolInfo
     */
    currentNominators: number;
    /**
     * maximum number of nominators
     * @type {number}
     * @memberof PoolInfo
     */
    maxNominators: number;
    /**
     * for liquid staking master account of jetton
     * @type {string}
     * @memberof PoolInfo
     */
    liquidJettonMaster?: string;
    /**
     * total stake of all nominators
     * @type {number}
     * @memberof PoolInfo
     */
    nominatorsStake: number;
    /**
     * stake of validator
     * @type {number}
     * @memberof PoolInfo
     */
    validatorStake: number;
}
/**
 * @export
 */
export declare const PoolInfoImplementationEnum: {
    readonly Whales: "whales";
    readonly Tf: "tf";
    readonly LiquidTf: "liquidTF";
};
export declare type PoolInfoImplementationEnum = typeof PoolInfoImplementationEnum[keyof typeof PoolInfoImplementationEnum];
/**
 * Check if a given object implements the PoolInfo interface.
 */
export declare function instanceOfPoolInfo(value: object): boolean;
export declare function PoolInfoFromJSON(json: any): PoolInfo;
export declare function PoolInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolInfo;
export declare function PoolInfoToJSON(value?: PoolInfo | null): any;
