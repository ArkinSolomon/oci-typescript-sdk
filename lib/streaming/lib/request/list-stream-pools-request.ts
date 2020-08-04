/**
 *
 *
 * OpenAPI spec version: 20180418
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
export interface ListStreamPoolsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources that match the given ID exactly.
   *
   */
  "id"?: string;
  /**
   * A filter to return only resources that match the given name exactly.
   *
   */
  "name"?: string;
  /**
   * The maximum number of items to return. The value must be between 1 and 50. The default is 10.
   */
  "limit"?: number;
  /**
   * The page at which to start retrieving results.
   */
  "page"?: string;
  /**
   * The field to sort by. You can provide no more than one sort order. By default, `TIMECREATED` sorts results in descending order and `NAME` sorts results in ascending order.
   *
   */
  "sortBy"?: ListStreamPoolsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: ListStreamPoolsRequest.SortOrder;
  /**
   * A filter to only return resources that match the given lifecycle state. The state value is case-insensitive.
   *
   */
  "lifecycleState"?: string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListStreamPoolsRequest {
  export enum SortBy {
    Name = "NAME",
    Timecreated = "TIMECREATED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
