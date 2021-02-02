/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * Specifies a volume group which is a collection of
 * volumes. For more information, see [Volume Groups](https://docs.cloud.oracle.com/Content/Block/Concepts/volumegroups.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you
 * supply string values using the API.
 *
 */
export interface VolumeGroup {
  /**
   * The availability domain of the volume group.
   */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the volume group.
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
   * A user-friendly name for the volume group. Does not have to be
   * unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID for the volume group.
   */
  "id": string;
  /**
   * The current state of a volume group.
   */
  "lifecycleState": VolumeGroup.LifecycleState;
  /**
   * The aggregate size of the volume group in MBs.
   */
  "sizeInMBs": number;
  /**
   * The aggregate size of the volume group in GBs.
   */
  "sizeInGBs"?: number;
  "sourceDetails"?:
    | model.VolumeGroupSourceFromVolumeGroupDetails
    | model.VolumeGroupSourceFromVolumesDetails
    | model.VolumeGroupSourceFromVolumeGroupBackupDetails;
  /**
   * The date and time the volume group was created. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * OCIDs for the volumes in this volume group.
   */
  "volumeIds": Array<string>;
  /**
   * Specifies whether the newly created cloned volume group's data has finished copying
   * from the source volume group or backup.
   *
   */
  "isHydrated"?: boolean;
}

export namespace VolumeGroup {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Faulty = "FAULTY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VolumeGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.VolumeGroupSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
