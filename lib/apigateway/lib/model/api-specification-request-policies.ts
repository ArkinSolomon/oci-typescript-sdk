/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Global behavior applied to all requests received by the API.
 */
export interface ApiSpecificationRequestPolicies {
  "authentication"?:
    | model.TokenAuthenticationPolicy
    | model.JwtAuthenticationPolicy
    | model.CustomAuthenticationPolicy;
  "rateLimiting"?: model.RateLimitingPolicy;
  "cors"?: model.CorsPolicy;
  "mutualTls"?: model.MutualTlsDetails;
  "usagePlans"?: model.UsagePlansPolicy;
  "dynamicAuthentication"?: model.DynamicAuthenticationPolicy;
}

export namespace ApiSpecificationRequestPolicies {
  export function getJsonObj(obj: ApiSpecificationRequestPolicies): object {
    const jsonObj = {
      ...obj,
      ...{
        "authentication": obj.authentication
          ? model.AuthenticationPolicy.getJsonObj(obj.authentication)
          : undefined,
        "rateLimiting": obj.rateLimiting
          ? model.RateLimitingPolicy.getJsonObj(obj.rateLimiting)
          : undefined,
        "cors": obj.cors ? model.CorsPolicy.getJsonObj(obj.cors) : undefined,
        "mutualTls": obj.mutualTls ? model.MutualTlsDetails.getJsonObj(obj.mutualTls) : undefined,
        "usagePlans": obj.usagePlans
          ? model.UsagePlansPolicy.getJsonObj(obj.usagePlans)
          : undefined,
        "dynamicAuthentication": obj.dynamicAuthentication
          ? model.DynamicAuthenticationPolicy.getJsonObj(obj.dynamicAuthentication)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApiSpecificationRequestPolicies): object {
    const jsonObj = {
      ...obj,
      ...{
        "authentication": obj.authentication
          ? model.AuthenticationPolicy.getDeserializedJsonObj(obj.authentication)
          : undefined,
        "rateLimiting": obj.rateLimiting
          ? model.RateLimitingPolicy.getDeserializedJsonObj(obj.rateLimiting)
          : undefined,
        "cors": obj.cors ? model.CorsPolicy.getDeserializedJsonObj(obj.cors) : undefined,
        "mutualTls": obj.mutualTls
          ? model.MutualTlsDetails.getDeserializedJsonObj(obj.mutualTls)
          : undefined,
        "usagePlans": obj.usagePlans
          ? model.UsagePlansPolicy.getDeserializedJsonObj(obj.usagePlans)
          : undefined,
        "dynamicAuthentication": obj.dynamicAuthentication
          ? model.DynamicAuthenticationPolicy.getDeserializedJsonObj(obj.dynamicAuthentication)
          : undefined
      }
    };

    return jsonObj;
  }
}
