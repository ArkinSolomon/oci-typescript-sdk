/**
 *
 *
 * OpenAPI spec version: 20200129
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface ListRunsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * Unique identifier for the request. If provided, the returned request ID will include this value.
   * Otherwise, a random request ID will be generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * The ID of the application.
   *
   */
  "applicationId"?: string;
  /**
   * The OCID of the user who created the resource.
   *
   */
  "ownerPrincipalId"?: string;
  /**
   * The displayName prefix.
   *
   */
  "displayNameStartsWith"?: string;
  /**
   * The LifecycleState of the run.
   *
   */
  "lifecycleState"?: model.RunLifecycleState;
  /**
   * The epoch time that the resource was created.
   *
   */
  "timeCreatedGreaterThan"?: Date;
  /**
   * The maximum number of results to return in a paginated `List` call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` or `opc-prev-page` response header from the last `List` call
   * to sent back to server for getting the next page of results.
   *
   */
  "page"?: string;
  /**
   * The field used to sort the results. Multiple fields are not supported.
   *
   */
  "sortBy"?: ListRunsRequest.SortBy;
  /**
   * The ordering of results in ascending or descending order.
   *
   */
  "sortOrder"?: ListRunsRequest.SortOrder;
  /**
   * The query parameter for the Spark application name.
   *
   */
  "displayName"?: string;
}

export namespace ListRunsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName",
    Language = "language",
    RunDurationInMilliseconds = "runDurationInMilliseconds",
    LifecycleState = "lifecycleState",
    TotalOCpu = "totalOCpu",
    DataReadInBytes = "dataReadInBytes",
    DataWrittenInBytes = "dataWrittenInBytes"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
