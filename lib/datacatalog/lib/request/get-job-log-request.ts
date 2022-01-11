/**
 *
 *
 * OpenAPI spec version: 20190325
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/GetJobLog.ts.html |here} to see how to use GetJobLogRequest.
 */
export interface GetJobLogRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique job key.
   */
  "jobKey": string;
  /**
   * The key of the job execution.
   */
  "jobExecutionKey": string;
  /**
   * Unique job log key.
   */
  "jobLogKey": string;
  /**
   * Specifies the fields to return in a job log response.
   *
   */
  "fields"?: Array<GetJobLogRequest.Fields>;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace GetJobLogRequest {
  export enum Fields {
    Key = "key",
    JobExecutionKey = "jobExecutionKey",
    CreatedById = "createdById",
    UpdatedById = "updatedById",
    TimeUpdated = "timeUpdated",
    TimeCreated = "timeCreated",
    Severity = "severity",
    LogMessage = "logMessage",
    Uri = "uri"
  }
}
