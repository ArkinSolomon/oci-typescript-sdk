/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
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
 * Information about the script.
 */
export interface ScriptSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the script.
   * scriptId is mandatory for creation of SCRIPTED_BROWSER and SCRIPTED_REST monitor types. For other monitor types, it should be set to null.
   *
   */
  "id": string;
  /**
   * Unique name that can be edited. The name should not contain any confidential information.
   */
  "displayName": string;
  /**
   * Content type of the script.
   */
  "contentType": model.ContentTypes;
  "monitorStatusCountMap": model.MonitorStatusCountMap;
  /**
   * The time the resource was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: `2020-02-12T22:47:12.613Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: `2020-02-13T22:47:12.613Z`
   *
   */
  "timeUpdated"?: Date;
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

export namespace ScriptSummary {
  export function getJsonObj(obj: ScriptSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "monitorStatusCountMap": obj.monitorStatusCountMap
          ? model.MonitorStatusCountMap.getJsonObj(obj.monitorStatusCountMap)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScriptSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "monitorStatusCountMap": obj.monitorStatusCountMap
          ? model.MonitorStatusCountMap.getDeserializedJsonObj(obj.monitorStatusCountMap)
          : undefined
      }
    };

    return jsonObj;
  }
}
