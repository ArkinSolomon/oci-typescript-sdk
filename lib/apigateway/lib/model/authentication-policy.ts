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
 * Information on how to authenticate incoming requests.
 */
export interface AuthenticationPolicy {
  /**
   * Whether an unauthenticated user may access the API. Must be \"true\" to enable ANONYMOUS
   * route authorization.
   *
   */
  "isAnonymousAccessAllowed"?: boolean;

  "type": string;
}

export namespace AuthenticationPolicy {
  export function getJsonObj(obj: AuthenticationPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "JWT_AUTHENTICATION":
          return model.JwtAuthenticationPolicy.getJsonObj(
            <model.JwtAuthenticationPolicy>(<object>jsonObj),
            true
          );
        case "CUSTOM_AUTHENTICATION":
          return model.CustomAuthenticationPolicy.getJsonObj(
            <model.CustomAuthenticationPolicy>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuthenticationPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "JWT_AUTHENTICATION":
          return model.JwtAuthenticationPolicy.getDeserializedJsonObj(
            <model.JwtAuthenticationPolicy>(<object>jsonObj),
            true
          );
        case "CUSTOM_AUTHENTICATION":
          return model.CustomAuthenticationPolicy.getDeserializedJsonObj(
            <model.CustomAuthenticationPolicy>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
