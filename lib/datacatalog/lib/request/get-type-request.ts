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
export interface GetTypeRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique type key.
   */
  "typeKey": string;
  /**
   * Specifies the fields to return in a type response.
   *
   */
  "fields"?: Array<GetTypeRequest.Fields>;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace GetTypeRequest {
  export enum Fields {
    Key = "key",
    Description = "description",
    Name = "name",
    CatalogId = "catalogId",
    Properties = "properties",
    IsInternal = "isInternal",
    IsTag = "isTag",
    IsApproved = "isApproved",
    TypeCategory = "typeCategory",
    ExternalTypeName = "externalTypeName",
    LifecycleState = "lifecycleState",
    Uri = "uri"
  }
}
