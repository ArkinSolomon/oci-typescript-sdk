/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * SubType information for a work request resource.
 */
export interface WorkRequestResourceSubTypeDetail {
  /**
   * Subtype of the work request resource like osn or peer.
   *
   */
  "subType": string;
  /**
   * The identifier of the resource subType.
   */
  "subTypeKey": string;
  /**
   * Status of the resource subType, as a result of the work tracked in this work request.
   * A resource subType would be CREATED, UPDATED or DELETED, after the work request is completed.
   *
   */
  "subTypeStatus": WorkRequestResourceSubTypeDetail.SubTypeStatus;
}

export namespace WorkRequestResourceSubTypeDetail {
  export enum SubTypeStatus {
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestResourceSubTypeDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestResourceSubTypeDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
