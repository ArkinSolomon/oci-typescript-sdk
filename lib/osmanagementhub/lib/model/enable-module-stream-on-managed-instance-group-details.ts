/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).
Use the table of contents and search tool to explore the  OS Management Hub API.

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The work request details for the module stream operation on the managed instance group.
 */
export interface EnableModuleStreamOnManagedInstanceGroupDetails {
  /**
   * The name of a module.
   */
  "moduleName"?: string;
  /**
   * The name of a stream of the specified module.
   */
  "streamName"?: string;
  "workRequestDetails"?: model.WorkRequestDetails;
}

export namespace EnableModuleStreamOnManagedInstanceGroupDetails {
  export function getJsonObj(obj: EnableModuleStreamOnManagedInstanceGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: EnableModuleStreamOnManagedInstanceGroupDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getDeserializedJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
