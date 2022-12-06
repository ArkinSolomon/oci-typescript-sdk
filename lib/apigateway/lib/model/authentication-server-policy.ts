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
 * Policy for the details regarding each authentication server under dynamic authentication. We specify the value of selectors for which this authentication server must be selected for a request under keys. We specify the configuration details of authentication server under authenticationServerDetail.
 */
export interface AuthenticationServerPolicy {
  "key": model.WildcardSelectionKey | model.AnyOfSelectionKey;
  "authenticationServerDetail":
    | model.TokenAuthenticationPolicy
    | model.JwtAuthenticationPolicy
    | model.CustomAuthenticationPolicy;
}

export namespace AuthenticationServerPolicy {
  export function getJsonObj(obj: AuthenticationServerPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "key": obj.key ? model.DynamicSelectionKey.getJsonObj(obj.key) : undefined,
        "authenticationServerDetail": obj.authenticationServerDetail
          ? model.AuthenticationPolicy.getJsonObj(obj.authenticationServerDetail)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuthenticationServerPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "key": obj.key ? model.DynamicSelectionKey.getDeserializedJsonObj(obj.key) : undefined,
        "authenticationServerDetail": obj.authenticationServerDetail
          ? model.AuthenticationPolicy.getDeserializedJsonObj(obj.authenticationServerDetail)
          : undefined
      }
    };

    return jsonObj;
  }
}
