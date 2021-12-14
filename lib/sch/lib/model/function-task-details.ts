/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
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
 * The Functions task.
 * Batch input for a function can be limited by either size or time. The first limit reached determines the boundary of the batch.
 * For configuration instructions, see
 * [To create a service connector](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/managingconnectors.htm#create).
 *
 */
export interface FunctionTaskDetails extends model.TaskDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the function to be used as a task.
   *
   */
  "functionId": string;
  /**
   * Size limit (kilobytes) for batch sent to invoke the function.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchSizeInKbs"?: number;
  /**
   * Time limit (seconds) for batch sent to invoke the function.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchTimeInSec"?: number;

  "kind": string;
}

export namespace FunctionTaskDetails {
  export function getJsonObj(obj: FunctionTaskDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TaskDetails.getJsonObj(obj) as FunctionTaskDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "function";
  export function getDeserializedJsonObj(
    obj: FunctionTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TaskDetails.getDeserializedJsonObj(obj) as FunctionTaskDetails)),
      ...{}
    };

    return jsonObj;
  }
}
