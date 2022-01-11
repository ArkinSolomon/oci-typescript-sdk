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
 * A query parameter to drop (with BLOCK) or pass through (with ALLOW).
 *
 */
export interface FilterQueryParameterPolicyItem {
  /**
   * The case-sensitive name of the query parameter.
   *
   */
  "name": string;
}

export namespace FilterQueryParameterPolicyItem {
  export function getJsonObj(obj: FilterQueryParameterPolicyItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FilterQueryParameterPolicyItem): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
