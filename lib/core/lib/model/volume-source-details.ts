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
 * Specifies the volume source details for a new Block volume. The volume source is either another Block volume in the same Availability Domain or a Block volume backup.
 * This is an optional field. If not specified or set to null, the new Block volume will be empty.
 * When specified, the new Block volume will contain data from the source volume or backup.
 *
 */
export interface VolumeSourceDetails {
  "type": string;
}

export namespace VolumeSourceDetails {
  export function getJsonObj(obj: VolumeSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "blockVolumeReplica":
          return model.VolumeSourceFromBlockVolumeReplicaDetails.getJsonObj(
            <model.VolumeSourceFromBlockVolumeReplicaDetails>(<object>jsonObj),
            true
          );
        case "volume":
          return model.VolumeSourceFromVolumeDetails.getJsonObj(
            <model.VolumeSourceFromVolumeDetails>(<object>jsonObj),
            true
          );
        case "volumeBackup":
          return model.VolumeSourceFromVolumeBackupDetails.getJsonObj(
            <model.VolumeSourceFromVolumeBackupDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
