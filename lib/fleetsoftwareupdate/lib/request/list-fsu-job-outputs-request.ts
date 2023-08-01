/**
 *
 *
 * OpenAPI spec version: 20220528
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/fleetsoftwareupdate/ListFsuJobOutputs.ts.html |here} to see how to use ListFsuJobOutputsRequest.
 */
export interface ListFsuJobOutputsRequest extends common.BaseRequest {
  /**
   * The OCID of the Exadata Fleet Update Job.
   *
   */
  "fsuJobId": string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results.
   * This must come from the `opc-next-page` header field of a previous response.
   *
   */
  "page"?: string;
}
