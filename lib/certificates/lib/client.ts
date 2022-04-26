/**
 * Certificates Service Retrieval API
 * API for retrieving certificates.
 * OpenAPI spec version: 20210224
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CertificatesApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class CertificatesClient {
  protected static serviceEndpointTemplate =
    "https://certificates.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20210224";
    if (this.logger) this.logger.info(`CertificatesClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      CertificatesClient.serviceEndpointTemplate,
      region,
      CertificatesClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      CertificatesClient.serviceEndpointTemplate,
      regionId,
      CertificatesClient.endpointServiceName
    );
  }

  /**
   * Gets a ca-bundle bundle.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetCaBundleRequest
   * @return GetCaBundleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificates/GetCaBundle.ts.html |here} to see how to use GetCaBundle API.
   */
  public async getCaBundle(
    getCaBundleRequest: requests.GetCaBundleRequest
  ): Promise<responses.GetCaBundleResponse> {
    if (this.logger) this.logger.debug("Calling operation CertificatesClient#getCaBundle.");
    const pathParams = {
      "{caBundleId}": getCaBundleRequest.caBundleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getCaBundleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getCaBundleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/caBundles/{caBundleId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetCaBundleResponse>{},
        body: await response.json(),
        bodyKey: "caBundle",
        bodyModel: model.CaBundle,
        type: "model.CaBundle",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a certificate authority bundle that matches either the specified `stage`, `name`, or `versionNumber` parameter.
   * If none of these parameters are provided, the bundle for the certificate authority version marked as `CURRENT` will be returned.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetCertificateAuthorityBundleRequest
   * @return GetCertificateAuthorityBundleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificates/GetCertificateAuthorityBundle.ts.html |here} to see how to use GetCertificateAuthorityBundle API.
   */
  public async getCertificateAuthorityBundle(
    getCertificateAuthorityBundleRequest: requests.GetCertificateAuthorityBundleRequest
  ): Promise<responses.GetCertificateAuthorityBundleResponse> {
    if (this.logger)
      this.logger.debug("Calling operation CertificatesClient#getCertificateAuthorityBundle.");
    const pathParams = {
      "{certificateAuthorityId}": getCertificateAuthorityBundleRequest.certificateAuthorityId
    };

    const queryParams = {
      "versionNumber": getCertificateAuthorityBundleRequest.versionNumber,
      "certificateAuthorityVersionName":
        getCertificateAuthorityBundleRequest.certificateAuthorityVersionName,
      "stage": getCertificateAuthorityBundleRequest.stage
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getCertificateAuthorityBundleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getCertificateAuthorityBundleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/certificateAuthorityBundles/{certificateAuthorityId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetCertificateAuthorityBundleResponse>{},
        body: await response.json(),
        bodyKey: "certificateAuthorityBundle",
        bodyModel: model.CertificateAuthorityBundle,
        type: "model.CertificateAuthorityBundle",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Gets a certificate bundle that matches either the specified `stage`, `versionName`, or `versionNumber` parameter.
* If none of these parameters are provided, the bundle for the certificate version marked as `CURRENT` will be returned.
* <p>
By default, the private key is not included in the query result, and a CertificateBundlePublicOnly is returned.
* If the private key is needed, use the CertificateBundleTypeQueryParam parameter to get a CertificateBundleWithPrivateKey response.
* 
     * This operation does not retry by default if the user has not defined a retry configuration.
     * @param GetCertificateBundleRequest
     * @return GetCertificateBundleResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificates/GetCertificateBundle.ts.html |here} to see how to use GetCertificateBundle API.
     */
  public async getCertificateBundle(
    getCertificateBundleRequest: requests.GetCertificateBundleRequest
  ): Promise<responses.GetCertificateBundleResponse> {
    if (this.logger)
      this.logger.debug("Calling operation CertificatesClient#getCertificateBundle.");
    const pathParams = {
      "{certificateId}": getCertificateBundleRequest.certificateId
    };

    const queryParams = {
      "versionNumber": getCertificateBundleRequest.versionNumber,
      "certificateVersionName": getCertificateBundleRequest.certificateVersionName,
      "stage": getCertificateBundleRequest.stage,
      "certificateBundleType": getCertificateBundleRequest.certificateBundleType
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getCertificateBundleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getCertificateBundleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/certificateBundles/{certificateId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetCertificateBundleResponse>{},
        body: await response.json(),
        bodyKey: "certificateBundle",
        bodyModel: model.CertificateBundle,
        type: "model.CertificateBundle",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists all certificate authority bundle versions for the specified certificate authority.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListCertificateAuthorityBundleVersionsRequest
   * @return ListCertificateAuthorityBundleVersionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificates/ListCertificateAuthorityBundleVersions.ts.html |here} to see how to use ListCertificateAuthorityBundleVersions API.
   */
  public async listCertificateAuthorityBundleVersions(
    listCertificateAuthorityBundleVersionsRequest: requests.ListCertificateAuthorityBundleVersionsRequest
  ): Promise<responses.ListCertificateAuthorityBundleVersionsResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation CertificatesClient#listCertificateAuthorityBundleVersions."
      );
    const pathParams = {
      "{certificateAuthorityId}":
        listCertificateAuthorityBundleVersionsRequest.certificateAuthorityId
    };

    const queryParams = {
      "sortBy": listCertificateAuthorityBundleVersionsRequest.sortBy,
      "sortOrder": listCertificateAuthorityBundleVersionsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listCertificateAuthorityBundleVersionsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listCertificateAuthorityBundleVersionsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/certificateAuthorityBundles/{certificateAuthorityId}/versions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListCertificateAuthorityBundleVersionsResponse>{},
        body: await response.json(),
        bodyKey: "certificateAuthorityBundleVersionCollection",
        bodyModel: model.CertificateAuthorityBundleVersionCollection,
        type: "model.CertificateAuthorityBundleVersionCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists all certificate bundle versions for the specified certificate.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListCertificateBundleVersionsRequest
   * @return ListCertificateBundleVersionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/certificates/ListCertificateBundleVersions.ts.html |here} to see how to use ListCertificateBundleVersions API.
   */
  public async listCertificateBundleVersions(
    listCertificateBundleVersionsRequest: requests.ListCertificateBundleVersionsRequest
  ): Promise<responses.ListCertificateBundleVersionsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation CertificatesClient#listCertificateBundleVersions.");
    const pathParams = {
      "{certificateId}": listCertificateBundleVersionsRequest.certificateId
    };

    const queryParams = {
      "sortBy": listCertificateBundleVersionsRequest.sortBy,
      "sortOrder": listCertificateBundleVersionsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listCertificateBundleVersionsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listCertificateBundleVersionsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/certificateBundles/{certificateId}/versions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListCertificateBundleVersionsResponse>{},
        body: await response.json(),
        bodyKey: "certificateBundleVersionCollection",
        bodyModel: model.CertificateBundleVersionCollection,
        type: "model.CertificateBundleVersionCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
