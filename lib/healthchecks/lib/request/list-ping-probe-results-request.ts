/**
 *
 *
 * OpenAPI spec version: 20180501
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

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/healthchecks/ListPingProbeResults.ts.html |here} to see how to use ListPingProbeResultsRequest.
 */
export interface ListPingProbeResultsRequest extends common.BaseRequest {
  /**
   * The OCID of a monitor or on-demand probe.
   */
  "probeConfigurationId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header
   * from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * Returns results with a `startTime` equal to or greater than the specified value.
   */
  "startTimeGreaterThanOrEqualTo"?: number;
  /**
   * Returns results with a `startTime` equal to or less than the specified value.
   */
  "startTimeLessThanOrEqualTo"?: number;
  /**
   * Controls the sort order of results.
   */
  "sortOrder"?: ListPingProbeResultsRequest.SortOrder;
  /**
   * Filters results that match the `target`.
   */
  "target"?: string;
}

export namespace ListPingProbeResultsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
