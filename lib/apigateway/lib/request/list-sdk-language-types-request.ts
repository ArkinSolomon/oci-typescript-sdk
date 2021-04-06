/**
 *
 *
 * OpenAPI spec version: 20190501
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apigateway/ListSdkLanguageTypes.ts.html |here} to see how to use ListSdkLanguageTypesRequest.
 */
export interface ListSdkLanguageTypesRequest extends common.BaseRequest {
  /**
   * The ocid of the compartment in which to list resources.
   */
  "compartmentId": string;
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
   * The sort order to use, either 'asc' or 'desc'. The default order depends on the sortBy value.
   */
  "sortOrder"?: ListSdkLanguageTypesRequest.SortOrder;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`).
   * Default order for `timeCreated` is descending. Default order for
   * `displayName` is ascending. The `displayName` sort order is case
   * sensitive.
   *
   */
  "sortBy"?: ListSdkLanguageTypesRequest.SortBy;
  /**
   * The client request id for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListSdkLanguageTypesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
