/**
 *
 *
 * OpenAPI spec version: 20211001
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datalabelingservicedataplane/ListAnnotations.ts.html |here} to see how to use ListAnnotationsRequest.
 */
export interface ListAnnotationsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * Filter results by the OCID of the dataset.
   */
  "datasetId": string;
  /**
   * A filter to return only resources their lifecycleState matches the given lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * Unique OCID identifier
   */
  "id"?: string;
  /**
   * The OCID of the principal who updated the annotation.
   */
  "updatedBy"?: string;
  /**
   * The OCID of the record annotated
   */
  "recordId"?: string;
  /**
   * The date and time the resource was created, in the timestamp format defined by RFC3339.
   *
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * The date and time the resource was created, in the timestamp format defined by RFC3339.
   *
   */
  "timeCreatedLessThanOrEqualTo"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. If no value is specified timeCreated is default.
   */
  "sortBy"?: ListAnnotationsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListAnnotationsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    Label = "label"
  }
}
