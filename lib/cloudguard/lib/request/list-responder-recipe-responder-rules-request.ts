/**
 *
 *
 * OpenAPI spec version: 20200131
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudguard/ListResponderRecipeResponderRules.ts.html |here} to see how to use ListResponderRecipeResponderRulesRequest.
 */
export interface ListResponderRecipeResponderRulesRequest extends common.BaseRequest {
  /**
   * OCID of ResponderRecipe
   */
  "responderRecipeId": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The field life cycle state. Only one state can be provided. Default value for state is active. If no value is specified state is active.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for displayName is ascending. If no value is specified displayName is default.
   *
   */
  "sortBy"?: ListResponderRecipeResponderRulesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListResponderRecipeResponderRulesRequest {
  export enum SortBy {
    DisplayName = "displayName",
    RiskLevel = "riskLevel"
  }
}
