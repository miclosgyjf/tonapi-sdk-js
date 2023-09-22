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
 * @interface BlockchainBlock
 */
export interface BlockchainBlock {
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    workchainId: number;
    /**
     *
     * @type {string}
     * @memberof BlockchainBlock
     */
    shard: string;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    seqno: number;
    /**
     *
     * @type {string}
     * @memberof BlockchainBlock
     */
    rootHash: string;
    /**
     *
     * @type {string}
     * @memberof BlockchainBlock
     */
    fileHash: string;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    globalId: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    version: number;
    /**
     *
     * @type {boolean}
     * @memberof BlockchainBlock
     */
    afterMerge: boolean;
    /**
     *
     * @type {boolean}
     * @memberof BlockchainBlock
     */
    beforeSplit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof BlockchainBlock
     */
    afterSplit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof BlockchainBlock
     */
    wantSplit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof BlockchainBlock
     */
    wantMerge: boolean;
    /**
     *
     * @type {boolean}
     * @memberof BlockchainBlock
     */
    keyBlock: boolean;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    genUtime: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    startLt: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    endLt: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    vertSeqno: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    genCatchainSeqno: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    minRefMcSeqno: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    prevKeyBlockSeqno: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    genSoftwareVersion?: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    genSoftwareCapabilities?: number;
    /**
     *
     * @type {string}
     * @memberof BlockchainBlock
     */
    masterRef?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof BlockchainBlock
     */
    prevRefs: Array<string>;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    inMsgDescrLength: number;
    /**
     *
     * @type {number}
     * @memberof BlockchainBlock
     */
    outMsgDescrLength: number;
    /**
     *
     * @type {string}
     * @memberof BlockchainBlock
     */
    randSeed: string;
    /**
     *
     * @type {string}
     * @memberof BlockchainBlock
     */
    createdBy: string;
}
/**
 * Check if a given object implements the BlockchainBlock interface.
 */
export declare function instanceOfBlockchainBlock(value: object): boolean;
export declare function BlockchainBlockFromJSON(json: any): BlockchainBlock;
export declare function BlockchainBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainBlock;
export declare function BlockchainBlockToJSON(value?: BlockchainBlock | null): any;