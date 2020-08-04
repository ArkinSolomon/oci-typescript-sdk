/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Blockchain Platform Instance Details For Hostname.
 */
export interface BlockchainPlatformByHostname {
  /**
   * unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Service endpoint URL, valid post-provisioning
   */
  "serviceEndpoint"?: string;
  /**
   * Platform Instance Display name, can be renamed
   */
  "displayName": string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Platform Instance Description
   */
  "description"?: string;
  /**
   * The time the the Platform Instance was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the Platform Instance was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * Role of platform - founder or participant
   */
  "platformRole"?: string;
  /**
   * Type of compute shape - one of Standard, (Enterprise) Small, Medium, Large or Extra Large
   */
  "computeShape": string;
  /**
   * The current state of the Platform Instance.
   */
  "lifecycleState"?: string;
  /**
   * An message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
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
}

export namespace BlockchainPlatformByHostname {
  export function getJsonObj(obj: BlockchainPlatformByHostname): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
