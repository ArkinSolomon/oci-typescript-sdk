/**
 *
 *
 * OpenAPI spec version: 20190912
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oce/ListOceInstances.ts.html |here} to see how to use ListOceInstancesRequest.
 */
export interface ListOceInstancesRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The ID of the tenancy in which to list resources.
   */
  "tenancyId"?: string;
  /**
 * A user-friendly name. Does not have to be unique, and it's changeable.
* <p>
Example: `My new resource`
* 
 */
  "displayName"?: string;
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
  "sortOrder"?: ListOceInstancesRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListOceInstancesRequest.SortBy;
  /**
   * Filter results on lifecycleState.
   */
  "lifecycleState"?: ListOceInstancesRequest.LifecycleState;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListOceInstancesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED"
  }
}
