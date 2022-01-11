/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListUploadFiles.ts.html |here} to see how to use ListUploadFilesRequest.
 */
export interface ListUploadFilesRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * Unique internal identifier to refer upload container.
   */
  "uploadReference": string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListUploadFilesRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeStarted is descending.
   * timeCreated, fileName and logGroup are deprecated. Instead use timestarted, name, logGroup accordingly.
   *
   */
  "sortBy"?: ListUploadFilesRequest.SortBy;
  /**
   * This can be used to filter upload files based on the file, log group and log source names.
   */
  "searchStr"?: string;
  /**
   * Upload File processing state.
   */
  "status"?: Array<ListUploadFilesRequest.Status>;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListUploadFilesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeStarted = "timeStarted",
    Name = "name",
    LogGroupName = "logGroupName",
    SourceName = "sourceName",
    Status = "status",
    TimeCreated = "timeCreated",
    FileName = "fileName",
    LogGroup = "logGroup"
  }

  export enum Status {
    InProgress = "IN_PROGRESS",
    Successful = "SUCCESSFUL",
    Failed = "FAILED"
  }
}
