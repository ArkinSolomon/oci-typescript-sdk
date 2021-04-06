/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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
 * An autoscaling configuration lets you dynamically scale the resources in a Compute instance pool.
 * For more information, see [Autoscaling](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/autoscalinginstancepools.htm).
 *
 */
export interface AutoScalingConfiguration {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the autoscaling configuration.
   *
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the autoscaling configuration.
   */
  "id": string;
  /**
    * For threshold-based autoscaling policies, this value is the minimum period of time to wait between scaling actions.
* The cooldown period gives the system time to stabilize before rescaling. The minimum value is 300 seconds, which
* is also the default. The cooldown period starts when the instance pool reaches the running state.
* <p>
For schedule-based autoscaling policies, this value is not used.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "coolDownInSeconds"?: number;
  /**
   * Whether the autoscaling configuration is enabled.
   */
  "isEnabled"?: boolean;
  "resource": model.InstancePoolResource;
  /**
   * Autoscaling policy definitions for the autoscaling configuration. An autoscaling policy defines the criteria that
   * trigger autoscaling actions and the actions to take.
   *
   */
  "policies": Array<model.AutoScalingPolicy>;
  /**
    * The date and time the autoscaling configuration was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The maximum number of resources to scale out to. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxResourceCount"?: number;
  /**
   * The minimum number of resources to scale in to. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minResourceCount"?: number;
}

export namespace AutoScalingConfiguration {
  export function getJsonObj(obj: AutoScalingConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "resource": obj.resource ? model.Resource.getJsonObj(obj.resource) : undefined,
        "policies": obj.policies
          ? obj.policies.map(item => {
              return model.AutoScalingPolicy.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
