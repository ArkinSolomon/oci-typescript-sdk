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
* A base object for all types of attachments between a storage volume and an instance.
* For specific details about iSCSI attachments, see
* {@link IScsiVolumeAttachment}.
* <p>
For general information about volume attachments, see
* [Overview of Block Volume Storage](https://docs.cloud.oracle.com/Content/Block/Concepts/overview.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface VolumeAttachment {
  /**
    * The availability domain of an instance.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The device name.
   */
  "device"?: string;
  /**
    * A user-friendly name. Does not have to be unique, and it cannot be changed.
* Avoid entering confidential information.
* <p>
Example: `My volume attachment`
* 
    */
  "displayName"?: string;
  /**
   * The OCID of the volume attachment.
   */
  "id": string;
  /**
   * The OCID of the instance the volume is attached to.
   */
  "instanceId": string;
  /**
   * Whether the attachment was created in read-only mode.
   */
  "isReadOnly"?: boolean;
  /**
   * Whether the attachment should be created in shareable mode. If an attachment
   * is created in shareable mode, then other instances can attach the same volume, provided
   * that they also create their attachments in shareable mode. Only certain volume types can
   * be attached in shareable mode. Defaults to false if not specified.
   *
   */
  "isShareable"?: boolean;
  /**
   * The current state of the volume attachment.
   */
  "lifecycleState": VolumeAttachment.LifecycleState;
  /**
    * The date and time the volume was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The OCID of the volume.
   */
  "volumeId": string;
  /**
   * Whether in-transit encryption for the data volume's paravirtualized attachment is enabled or not.
   */
  "isPvEncryptionInTransitEnabled"?: boolean;

  "attachmentType": string;
}

export namespace VolumeAttachment {
  export enum LifecycleState {
    Attaching = "ATTACHING",
    Attached = "ATTACHED",
    Detaching = "DETACHING",
    Detached = "DETACHED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VolumeAttachment): object {
    const jsonObj = { ...obj, ...{} };

    if ("attachmentType" in obj && obj.attachmentType) {
      switch (obj.attachmentType) {
        case "iscsi":
          return model.IScsiVolumeAttachment.getJsonObj(
            <model.IScsiVolumeAttachment>(<object>jsonObj),
            true
          );
        case "emulated":
          return model.EmulatedVolumeAttachment.getJsonObj(
            <model.EmulatedVolumeAttachment>(<object>jsonObj),
            true
          );
        case "paravirtualized":
          return model.ParavirtualizedVolumeAttachment.getJsonObj(
            <model.ParavirtualizedVolumeAttachment>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.attachmentType);
      }
    }
    return jsonObj;
  }
}
