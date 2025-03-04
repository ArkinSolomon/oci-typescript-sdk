/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * Details for scheduling key version deletion.
 */
export interface ScheduleKeyVersionDeletionDetails {
  /**
   * An optional property to indicate when to delete the key version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format. The specified time must be between 7 and 30 days from the time
   * when the request is received. If this property is missing, it will be set to 30 days from the time of the request by default.
   *
   */
  "timeOfDeletion"?: Date;
}

export namespace ScheduleKeyVersionDeletionDetails {
  export function getJsonObj(obj: ScheduleKeyVersionDeletionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduleKeyVersionDeletionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
