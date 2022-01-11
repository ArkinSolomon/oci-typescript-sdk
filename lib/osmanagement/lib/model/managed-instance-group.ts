/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Detail information for a managed instance group
 */
export interface ManagedInstanceGroup {
  /**
   * Managed Instance Group identifier
   */
  "displayName": string;
  /**
   * OCID for the managed instance group
   */
  "id": string;
  /**
   * Information specified by the user about the managed instance group
   */
  "description"?: string;
  /**
   * OCID for the Compartment
   */
  "compartmentId": string;
  /**
   * list of Managed Instances in the group
   */
  "managedInstances"?: Array<model.Id>;
  /**
   * The current state of the Software Source.
   */
  "lifecycleState"?: model.LifecycleStates;
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
  /**
   * The Operating System type of the managed instance.
   */
  "osFamily"?: model.OsFamilies;
}

export namespace ManagedInstanceGroup {
  export function getJsonObj(obj: ManagedInstanceGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedInstances": obj.managedInstances
          ? obj.managedInstances.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagedInstanceGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedInstances": obj.managedInstances
          ? obj.managedInstances.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
