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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/GetJobDefinition.ts.html |here} to see how to use GetJobDefinitionRequest.
 */
export interface GetJobDefinitionRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique job definition key.
   */
  "jobDefinitionKey": string;
  /**
   * Specifies the fields to return in a job definition response.
   *
   */
  "fields"?: Array<GetJobDefinitionRequest.Fields>;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace GetJobDefinitionRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    CatalogId = "catalogId",
    JobType = "jobType",
    IsIncremental = "isIncremental",
    DataAssetKey = "dataAssetKey",
    ConnectionKey = "connectionKey",
    InternalVersion = "internalVersion",
    LifecycleState = "lifecycleState",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    CreatedById = "createdById",
    UpdatedById = "updatedById",
    Uri = "uri",
    IsSampleDataExtracted = "isSampleDataExtracted",
    SampleDataSizeInMBs = "sampleDataSizeInMBs",
    TimeLatestExecutionStarted = "timeLatestExecutionStarted",
    TimeLatestExecutionEnded = "timeLatestExecutionEnded",
    JobExecutionState = "jobExecutionState",
    ScheduleType = "scheduleType",
    Properties = "properties"
  }
}
