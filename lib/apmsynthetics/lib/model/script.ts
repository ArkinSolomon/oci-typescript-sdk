/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors.
 * OpenAPI spec version: 20200630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about the script.
 */
export interface Script {
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
  /**
   * The content of the script. It may contain custom-defined tags that can be used for setting dynamic parameters.
   * The format to set dynamic parameters is: `<ORAP><ON>param name</ON><OV>param value</OV><OS>isParamValueSecret(true/false)</OS></ORAP>`.
   * Param value and isParamValueSecret are optional, the default value for isParamValueSecret is false.
   * Examples:
   * With mandatory param name : `<ORAP><ON>param name</ON></ORAP>`
   * With parameter name and value : `<ORAP><ON>param name</ON><OV>param value</OV></ORAP>`
   * Note that the content is valid if it matches the given content type. For example, if the content type is SIDE, then the content should be in Side script format. If the content type is JS, then the content should be in JavaScript format.
   *
   */
  "content"?: string;
  /**
   * The time when the script was uploaded.
   */
  "timeUploaded"?: Date;
  /**
   * Size of the script content. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "contentSizeInBytes"?: number;
  /**
   * File name of the uploaded script content.
   */
  "contentFileName"?: string;
  /**
   * List of script parameters. Example: `[{\"scriptParameter\": {\"paramName\": \"userid\", \"paramValue\":\"testuser\", \"isSecret\": false}, \"isOverwritten\": false}]`
   *
   */
  "parameters"?: Array<model.ScriptParameterInfo>;
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

export namespace Script {
  export function getJsonObj(obj: Script): object {
    const jsonObj = {
      ...obj,
      ...{
        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.ScriptParameterInfo.getJsonObj(item);
            })
          : undefined,
        "monitorStatusCountMap": obj.monitorStatusCountMap
          ? model.MonitorStatusCountMap.getJsonObj(obj.monitorStatusCountMap)
          : undefined
      }
    };

    return jsonObj;
  }
}
