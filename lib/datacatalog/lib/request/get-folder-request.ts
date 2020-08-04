/**
 *
 *
 * OpenAPI spec version: 20190325
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
export interface GetFolderRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique data asset key.
   */
  "dataAssetKey": string;
  /**
   * Unique folder key.
   */
  "folderKey": string;
  /**
   * Specifies the fields to return in a folder response.
   *
   */
  "fields"?: Array<GetFolderRequest.Fields>;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace GetFolderRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    ParentFolderKey = "parentFolderKey",
    Path = "path",
    DataAssetKey = "dataAssetKey",
    Properties = "properties",
    ExternalKey = "externalKey",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    CreatedById = "createdById",
    UpdatedById = "updatedById",
    TimeExternal = "timeExternal",
    LifecycleState = "lifecycleState",
    HarvestStatus = "harvestStatus",
    LastJobKey = "lastJobKey",
    Uri = "uri"
  }
}
