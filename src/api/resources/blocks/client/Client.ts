/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vapi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Blocks {
    interface Options {
        environment?: core.Supplier<environments.VapiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Blocks {
    constructor(protected readonly _options: Blocks.Options) {}

    /**
     * @param {Vapi.BlocksListRequest} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.blocks.list()
     */
    public async list(
        request: Vapi.BlocksListRequest = {},
        requestOptions?: Blocks.RequestOptions
    ): Promise<Vapi.BlocksListResponseItem[]> {
        const {
            limit,
            createdAtGt,
            createdAtLt,
            createdAtGe,
            createdAtLe,
            updatedAtGt,
            updatedAtLt,
            updatedAtGe,
            updatedAtLe,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (createdAtGt != null) {
            _queryParams["createdAtGt"] = createdAtGt;
        }

        if (createdAtLt != null) {
            _queryParams["createdAtLt"] = createdAtLt;
        }

        if (createdAtGe != null) {
            _queryParams["createdAtGe"] = createdAtGe;
        }

        if (createdAtLe != null) {
            _queryParams["createdAtLe"] = createdAtLe;
        }

        if (updatedAtGt != null) {
            _queryParams["updatedAtGt"] = updatedAtGt;
        }

        if (updatedAtLt != null) {
            _queryParams["updatedAtLt"] = updatedAtLt;
        }

        if (updatedAtGe != null) {
            _queryParams["updatedAtGe"] = updatedAtGe;
        }

        if (updatedAtLe != null) {
            _queryParams["updatedAtLe"] = updatedAtLe;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                "block"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vapi",
                "X-Fern-SDK-Version": "0.0.0-alpha5",
                "User-Agent": "vapi/0.0.0-alpha5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.BlocksListResponseItem[];
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError();
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Vapi.BlocksCreateRequest} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.blocks.create({
     *         type: "conversation",
     *         instruction: "instruction"
     *     })
     */
    public async create(
        request: Vapi.BlocksCreateRequest,
        requestOptions?: Blocks.RequestOptions
    ): Promise<Vapi.BlocksCreateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                "block"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vapi",
                "X-Fern-SDK-Version": "0.0.0-alpha5",
                "User-Agent": "vapi/0.0.0-alpha5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.BlocksCreateResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError();
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.blocks.get("id")
     */
    public async get(id: string, requestOptions?: Blocks.RequestOptions): Promise<Vapi.BlocksGetResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `block/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vapi",
                "X-Fern-SDK-Version": "0.0.0-alpha5",
                "User-Agent": "vapi/0.0.0-alpha5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.BlocksGetResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError();
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.blocks.delete("id")
     */
    public async delete(id: string, requestOptions?: Blocks.RequestOptions): Promise<Vapi.BlocksDeleteResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `block/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vapi",
                "X-Fern-SDK-Version": "0.0.0-alpha5",
                "User-Agent": "vapi/0.0.0-alpha5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.BlocksDeleteResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError();
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} id
     * @param {Vapi.UpdateBlockDto} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.blocks.update("id")
     */
    public async update(
        id: string,
        request: Vapi.UpdateBlockDto = {},
        requestOptions?: Blocks.RequestOptions
    ): Promise<Vapi.BlocksUpdateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VapiEnvironment.Default,
                `block/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vapi",
                "X-Fern-SDK-Version": "0.0.0-alpha5",
                "User-Agent": "vapi/0.0.0-alpha5",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Vapi.BlocksUpdateResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VapiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VapiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VapiTimeoutError();
            case "unknown":
                throw new errors.VapiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
