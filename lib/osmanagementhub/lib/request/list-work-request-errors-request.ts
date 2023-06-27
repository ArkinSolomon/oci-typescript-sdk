/**
 *
 *
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrorsRequest.
 */
export interface ListWorkRequestErrorsRequest extends common.BaseRequest {
  /**
   * The OCID of the work request.
   */
  "workRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
 * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `3`
* 
 */
  "page"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "limit"?: number;
  /**
   * The field to sort by. Only one sort order may be provided.
   * Default order for timeCreated is descending.
   *
   */
  "sortBy"?: ListWorkRequestErrorsRequest.SortBy;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
}

export namespace ListWorkRequestErrorsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
