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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/ListJobDefinitions.ts.html |here} to see how to use ListJobDefinitionsRequest.
 */
export interface ListJobDefinitionsRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match display name pattern given. The match is not case sensitive.
   * For Example : /folders?displayNameContains=Cu.*
   * The above would match all folders with display name that starts with \"Cu\" or has the pattern \"Cu\" anywhere in between.
   *
   */
  "displayNameContains"?: string;
  /**
   * Job execution state.
   */
  "jobExecutionState"?: model.JobExecutionState;
  /**
   * A filter to return only resources that match the specified lifecycle state. The value is case insensitive.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Job type.
   */
  "jobType"?: model.JobType;
  /**
   * Whether job definition is an incremental harvest (true) or a full harvest (false).
   */
  "isIncremental"?: boolean;
  /**
   * Unique data asset key.
   */
  "dataAssetKey"?: string;
  /**
   * Unique connection key.
   */
  "connectionKey"?: string;
  /**
   * Time that the resource was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Time that the resource was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the resource.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated the resource.
   */
  "updatedById"?: string;
  /**
   * The sample data size in MB, specified as number of rows, for a metadata harvest.
   */
  "sampleDataSizeInMBs"?: string;
  /**
   * Specifies the fields to return in a job definition summary response.
   *
   */
  "fields"?: Array<ListJobDefinitionsRequest.Fields>;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. Default order for TIMELATESTEXECUTIONSTARTED is descending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListJobDefinitionsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListJobDefinitionsRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListJobDefinitionsRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    CatalogId = "catalogId",
    JobType = "jobType",
    ConnectionKey = "connectionKey",
    LifecycleState = "lifecycleState",
    TimeCreated = "timeCreated",
    IsSampleDataExtracted = "isSampleDataExtracted",
    Uri = "uri",
    TimeLatestExecutionStarted = "timeLatestExecutionStarted",
    TimeLatestExecutionEnded = "timeLatestExecutionEnded",
    JobExecutionState = "jobExecutionState",
    ScheduleType = "scheduleType"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME",
    Timelatestexecutionstarted = "TIMELATESTEXECUTIONSTARTED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
