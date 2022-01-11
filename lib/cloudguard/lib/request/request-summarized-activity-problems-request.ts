/**
 *
 *
 * OpenAPI spec version: 20200131
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudguard/RequestSummarizedActivityProblems.ts.html |here} to see how to use RequestSummarizedActivityProblemsRequest.
 */
export interface RequestSummarizedActivityProblemsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed
   * and all compartments and subcompartments in the tenancy are
   * returned depending on the the setting of `accessLevel`.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are `RESTRICTED` and `ACCESSIBLE`. Default is `RESTRICTED`.
   * Setting this to `ACCESSIBLE` returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment).
   * When set to `RESTRICTED` permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: RequestSummarizedActivityProblemsRequest.AccessLevel;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * Default is false.
   * When set to true, the summary of activity problems that has unknown values for
   * city, state or country will be included.
   *
   */
  "includeUnknownLocations"?: boolean;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace RequestSummarizedActivityProblemsRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }
}
