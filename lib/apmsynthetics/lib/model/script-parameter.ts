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
 * Details of the script parameters, paramName must be from the script content and
 * these details can be used to overwrite the default parameter present in the script content.
 *
 */
export interface ScriptParameter {
  /**
   * Name of the parameter.
   */
  "paramName": string;
  /**
   * Value of the parameter.
   */
  "paramValue"?: string;
  /**
   * If the parameter value is secret and should be kept confidential, then set isSecret to true.
   */
  "isSecret"?: boolean;
}

export namespace ScriptParameter {
  export function getJsonObj(obj: ScriptParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScriptParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
