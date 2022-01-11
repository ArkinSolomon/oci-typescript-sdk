/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

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
 * A resource and its category.
 */
export interface LogAnalyticsResourceCategory {
  /**
   * The unique identifier of the resource, usually a name or ocid.
   */
  "resourceId"?: string;
  /**
   * The resource type.
   */
  "resourceType"?: string;
  /**
   * The category name to which this resource belongs.
   */
  "categoryName"?: string;
  /**
   * The system flag. A value of false denotes a user-created category assignment.
   * A value of true denotes an Oracle-defined category assignment.
   *
   */
  "isSystem"?: boolean;
}

export namespace LogAnalyticsResourceCategory {
  export function getJsonObj(obj: LogAnalyticsResourceCategory): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsResourceCategory): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
