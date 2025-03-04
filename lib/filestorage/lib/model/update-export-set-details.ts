/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Details for updating the export set.
 */
export interface UpdateExportSetDetails {
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My export set`
* 
    */
  "displayName"?: string;
  /**
   * Controls the maximum `tbytes`, `fbytes`, and `abytes`
   * values reported by `NFS FSSTAT` calls through any associated
   * mount targets. This is an advanced feature. For most
   * applications, use the default value. The
   * `tbytes` value reported by `FSSTAT` will be
   * `maxFsStatBytes`. The value of `fbytes` and `abytes` will be
   * `maxFsStatBytes` minus the metered size of the file
   * system. If the metered size is larger than `maxFsStatBytes`,
   * then `fbytes` and `abytes` will both be '0'.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxFsStatBytes"?: number;
  /**
   * Controls the maximum `ffiles`, `ffiles`, and `afiles`
   * values reported by `NFS FSSTAT` calls through any associated
   * mount targets. This is an advanced feature. For most
   * applications, use the default value. The
   * `tfiles` value reported by `FSSTAT` will be
   * `maxFsStatFiles`. The value of `ffiles` and `afiles` will be
   * `maxFsStatFiles` minus the metered size of the file
   * system. If the metered size is larger than `maxFsStatFiles`,
   * then `ffiles` and `afiles` will both be '0'.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxFsStatFiles"?: number;
}

export namespace UpdateExportSetDetails {
  export function getJsonObj(obj: UpdateExportSetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateExportSetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
