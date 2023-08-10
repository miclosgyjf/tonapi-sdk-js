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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class AccountsApi extends runtime.BaseAPI {
    /**
     * Get account\'s domains
     */
    accountDnsBackResolveRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling accountDnsBackResolve.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/dns/backresolve`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.DomainNamesFromJSON)(jsonValue));
        });
    }
    /**
     * Get account\'s domains
     */
    accountDnsBackResolve(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.accountDnsBackResolveRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get human-friendly information about an account without low-level details.
     */
    getAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccount.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountFromJSON)(jsonValue));
        });
    }
    /**
     * Get human-friendly information about an account without low-level details.
     */
    getAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get expiring account .ton dns
     */
    getAccountDnsExpiringRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountDnsExpiring.');
            }
            const queryParameters = {};
            if (requestParameters.period !== undefined) {
                queryParameters['period'] = requestParameters.period;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/dns/expiring`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.DnsExpiringFromJSON)(jsonValue));
        });
    }
    /**
     * Get expiring account .ton dns
     */
    getAccountDnsExpiring(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountDnsExpiringRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get event for an account by event_id
     */
    getAccountEventRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountEvent.');
            }
            if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
                throw new runtime.RequiredError('eventId', 'Required parameter requestParameters.eventId was null or undefined when calling getAccountEvent.');
            }
            const queryParameters = {};
            if (requestParameters.subjectOnly !== undefined) {
                queryParameters['subject_only'] = requestParameters.subjectOnly;
            }
            const headerParameters = {};
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/events/{event_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"event_id"}}`, encodeURIComponent(String(requestParameters.eventId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountEventFromJSON)(jsonValue));
        });
    }
    /**
     * Get event for an account by event_id
     */
    getAccountEvent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountEventRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     */
    getAccountEventsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountEvents.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling getAccountEvents.');
            }
            const queryParameters = {};
            if (requestParameters.subjectOnly !== undefined) {
                queryParameters['subject_only'] = requestParameters.subjectOnly;
            }
            if (requestParameters.beforeLt !== undefined) {
                queryParameters['before_lt'] = requestParameters.beforeLt;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['start_date'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['end_date'] = requestParameters.endDate;
            }
            const headerParameters = {};
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/events`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountEventsFromJSON)(jsonValue));
        });
    }
    /**
     * Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
     */
    getAccountEvents(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountEventsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the transfer jetton history for account and jetton
     */
    getAccountJettonHistoryByIDRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountJettonHistoryByID.');
            }
            if (requestParameters.jettonId === null || requestParameters.jettonId === undefined) {
                throw new runtime.RequiredError('jettonId', 'Required parameter requestParameters.jettonId was null or undefined when calling getAccountJettonHistoryByID.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling getAccountJettonHistoryByID.');
            }
            const queryParameters = {};
            if (requestParameters.beforeLt !== undefined) {
                queryParameters['before_lt'] = requestParameters.beforeLt;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['start_date'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['end_date'] = requestParameters.endDate;
            }
            const headerParameters = {};
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/jettons/{jetton_id}/history`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"jetton_id"}}`, encodeURIComponent(String(requestParameters.jettonId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountEventsFromJSON)(jsonValue));
        });
    }
    /**
     * Get the transfer jetton history for account and jetton
     */
    getAccountJettonHistoryByID(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountJettonHistoryByIDRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all Jettons balances by owner address
     */
    getAccountJettonsBalancesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountJettonsBalances.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/jettons`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.JettonsBalancesFromJSON)(jsonValue));
        });
    }
    /**
     * Get all Jettons balances by owner address
     */
    getAccountJettonsBalances(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountJettonsBalancesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the transfer jettons history for account
     */
    getAccountJettonsHistoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountJettonsHistory.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling getAccountJettonsHistory.');
            }
            const queryParameters = {};
            if (requestParameters.beforeLt !== undefined) {
                queryParameters['before_lt'] = requestParameters.beforeLt;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['start_date'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['end_date'] = requestParameters.endDate;
            }
            const headerParameters = {};
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/jettons/history`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountEventsFromJSON)(jsonValue));
        });
    }
    /**
     * Get the transfer jettons history for account
     */
    getAccountJettonsHistory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountJettonsHistoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all NFT items by owner address
     */
    getAccountNftItemsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountNftItems.');
            }
            const queryParameters = {};
            if (requestParameters.collection !== undefined) {
                queryParameters['collection'] = requestParameters.collection;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
            }
            if (requestParameters.indirectOwnership !== undefined) {
                queryParameters['indirect_ownership'] = requestParameters.indirectOwnership;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/nfts`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.NftItemsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all NFT items by owner address
     */
    getAccountNftItems(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountNftItemsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get public key by account id
     */
    getAccountPublicKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountPublicKey.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/publickey`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GetAccountPublicKey200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get public key by account id
     */
    getAccountPublicKey(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountPublicKeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all subscriptions by wallet address
     */
    getAccountSubscriptionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountSubscriptions.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/subscriptions`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SubscriptionsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all subscriptions by wallet address
     */
    getAccountSubscriptions(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountSubscriptionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get traces for account
     */
    getAccountTracesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountTraces.');
            }
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/traces`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.TraceIDsFromJSON)(jsonValue));
        });
    }
    /**
     * Get traces for account
     */
    getAccountTraces(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountTracesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get human-friendly information about several accounts without low-level details.
     */
    getAccountsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/v2/accounts/_bulk`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.GetAccountsRequestToJSON)(requestParameters.getAccountsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Get human-friendly information about several accounts without low-level details.
     */
    getAccounts(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update internal cache for a particular account
     */
    reindexAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling reindexAccount.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/{account_id}/reindex`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Update internal cache for a particular account
     */
    reindexAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.reindexAccountRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Search by account domain name
     */
    searchAccountsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.name === null || requestParameters.name === undefined) {
                throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling searchAccounts.');
            }
            const queryParameters = {};
            if (requestParameters.name !== undefined) {
                queryParameters['name'] = requestParameters.name;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/accounts/search`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.FoundAccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Search by account domain name
     */
    searchAccounts(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchAccountsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AccountsApi = AccountsApi;
