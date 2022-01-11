/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * The information to be updated.
 */
export interface UpdateOperationsInsightsWarehouseUserDetails {
  /**
   * User provided connection password for the AWR Data,  Enterprise Manager Data and Operations Insights OPSI Hub.
   */
  "connectionPassword"?: string;
  /**
   * Indicate whether user has access to AWR data.
   */
  "isAwrDataAccess"?: boolean;
  /**
   * Indicate whether user has access to EM data.
   */
  "isEmDataAccess"?: boolean;
  /**
   * Indicate whether user has access to OPSI data.
   */
  "isOpsiDataAccess"?: boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateOperationsInsightsWarehouseUserDetails {
  export function getJsonObj(obj: UpdateOperationsInsightsWarehouseUserDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: UpdateOperationsInsightsWarehouseUserDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
