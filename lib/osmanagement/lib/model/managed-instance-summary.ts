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
 * An OCI Compute instance that is being managed
 */
export interface ManagedInstanceSummary {
  /**
   * user settable name
   */
  "displayName": string;
  /**
   * OCID for the managed instance
   */
  "id": string;
  /**
   * Time at which the instance last checked in
   */
  "lastCheckin"?: string;
  /**
   * Time at which the instance last booted
   */
  "lastBoot"?: string;
  /**
   * Number of updates available to be installed Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "updatesAvailable"?: number;
  /**
   * OCID for the Compartment
   */
  "compartmentId": string;
  /**
   * Information specified by the user about the managed instance
   */
  "description"?: string;
  /**
   * status of the managed instance.
   */
  "status"?: ManagedInstanceSummary.Status;
  /**
   * The Operating System type of the managed instance.
   */
  "osFamily"?: model.OsFamilies;
  /**
   * Indicates whether a reboot is required to complete installation of updates.
   */
  "isRebootRequired"?: boolean;
}

export namespace ManagedInstanceSummary {
  export enum Status {
    Normal = "NORMAL",
    Unreachable = "UNREACHABLE",
    Error = "ERROR",
    Warning = "WARNING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ManagedInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagedInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
