/**
 *
 *
 * OpenAPI spec version: 20210527
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/servicecatalog/ListWorkRequests.ts.html |here} to see how to use ListWorkRequestsRequest.
 */
export interface ListWorkRequestsRequest extends common.BaseRequest {
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId"?: string;
  /**
   * The ID of the asynchronous work request.
   */
  "workRequestId"?: string;
  /**
   * A filter to return only resources their lifecycleState matches the given OperationStatus.
   */
  "status"?: model.OperationStatus;
  /**
   * The ID of the resource affected by the work request
   */
  "resourceId"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   */
  "page"?: string;
  /**
   * How many records to return. Specify a value greater than zero and less than or equal to 1000. The default is 30.
   *
   */
  "limit"?: number;
  /**
   * The sort order to apply, either `ASC` or `DESC`. Default is `ASC`.
   */
  "sortOrder"?: ListWorkRequestsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeAccepted is descending.
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
