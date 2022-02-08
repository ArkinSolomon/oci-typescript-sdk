/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
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
 * The request body used to create new configuration items. It must specify the configuration type of the item,
 * as well as the actual data to populate the item with.
 *
 */
export interface CreateConfigDetails {
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

  "configType": string;
}

export namespace CreateConfigDetails {
  export function getJsonObj(obj: CreateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "SPAN_FILTER":
          return model.CreateSpanFilterDetails.getJsonObj(
            <model.CreateSpanFilterDetails>(<object>jsonObj),
            true
          );
        case "METRIC_GROUP":
          return model.CreateMetricGroupDetails.getJsonObj(
            <model.CreateMetricGroupDetails>(<object>jsonObj),
            true
          );
        case "APDEX":
          return model.CreateApdexRulesDetails.getJsonObj(
            <model.CreateApdexRulesDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "SPAN_FILTER":
          return model.CreateSpanFilterDetails.getDeserializedJsonObj(
            <model.CreateSpanFilterDetails>(<object>jsonObj),
            true
          );
        case "METRIC_GROUP":
          return model.CreateMetricGroupDetails.getDeserializedJsonObj(
            <model.CreateMetricGroupDetails>(<object>jsonObj),
            true
          );
        case "APDEX":
          return model.CreateApdexRulesDetails.getDeserializedJsonObj(
            <model.CreateApdexRulesDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configType);
      }
    }
    return jsonObj;
  }
}
