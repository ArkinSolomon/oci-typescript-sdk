/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListVmClusterNetworks.ts.html |here} to see how to use ListVmClusterNetworksRequest.
 */
export interface ListVmClusterNetworksRequest extends common.BaseRequest {
  /**
   * The Exadata infrastructure [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "exadataInfrastructureId": string;
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListVmClusterNetworksRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   */
  "sortOrder"?: ListVmClusterNetworksRequest.SortOrder;
  /**
   * A filter to return only resources that match the given lifecycle state exactly.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListVmClusterNetworksRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
