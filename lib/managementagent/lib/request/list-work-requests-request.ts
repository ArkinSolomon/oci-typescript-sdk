/**
 *
 *
 * OpenAPI spec version: 20200202
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/managementagent/ListWorkRequests.ts.html |here} to see how to use ListWorkRequestsRequest.
 */
export interface ListWorkRequestsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment to which a request will be scoped.
   */
  "compartmentId": string;
  /**
   * The ManagementAgentID of the agent from which the Management Agents to be filtered.
   */
  "agentId"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The OperationStatus of the workRequest
   */
  "status"?: model.OperationStatus;
  /**
   * Filter for items with timeCreated greater or equal to provided value.
   * given `timeCreatedGreaterThanOrEqualTo` to the current time, in \"YYYY-MM-ddThh:mmZ\" format with a
   * Z offset, as defined by RFC 3339.
   *
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListWorkRequestsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeAccepted is descending. If no value is specified timeAccepted is default.
   *
   */
  "sortBy"?: ListWorkRequestsRequest.SortBy;
}

export namespace ListWorkRequestsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeAccepted = "timeAccepted"
  }
}
