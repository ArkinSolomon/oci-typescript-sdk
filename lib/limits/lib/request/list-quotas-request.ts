/**
 *
 *
 * OpenAPI spec version:
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
export interface ListQuotasRequest extends common.BaseRequest {
  /**
   * The OCID of the parent compartment (remember that the tenancy is simply the root compartment).
   *
   */
  "compartmentId": string;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * name
   */
  "name"?: string;
  /**
   * Filters returned quotas based on whether the given state.
   */
  "lifecycleState"?: ListQuotasRequest.LifecycleState;
  /**
   * The sort order to use, either 'asc' or 'desc'. By default it will be ascending.
   *
   */
  "sortOrder"?: ListQuotasRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Time created is default ordered as descending. Display name is default ordered as ascending.
   *
   */
  "sortBy"?: ListQuotasRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListQuotasRequest {
  export enum LifecycleState {
    Active = "ACTIVE"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "NAME",
    Timecreated = "TIMECREATED"
  }
}
