/**
 *
 *
 * OpenAPI spec version: 20200501
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/networkloadbalancer/ListNetworkLoadBalancersPolicies.ts.html |here} to see how to use ListNetworkLoadBalancersPoliciesRequest.
 */
export interface ListNetworkLoadBalancersPoliciesRequest extends common.BaseRequest {
  /**
   * The unique Oracle-assigned identifier for the request. If you must contact Oracle about a
   * particular request, then provide the request identifier.
   *
   */
  "opcRequestId"?: string;
  /**
   * For list pagination. The maximum number of results per page or items to return, in a paginated \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The page token representing the page from which to start retrieving results.
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' (ascending) or 'desc' (descending).
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order can be provided. The default order for timeCreated is descending.
   * The default order for displayName is ascending. If no value is specified, then timeCreated is the default.
   *
   */
  "sortBy"?: ListNetworkLoadBalancersPoliciesRequest.SortBy;
}

export namespace ListNetworkLoadBalancersPoliciesRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
