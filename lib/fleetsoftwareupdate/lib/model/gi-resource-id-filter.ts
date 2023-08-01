/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Related resource Ids to include in the discovery.
 *
 */
export interface GiResourceIdFilter extends model.GiFleetDiscoveryFilter {
  /**
   * Type of resource to match in the discovery.
   *
   */
  "entityType": GiResourceIdFilter.EntityType;
  /**
   * Related resource Ids to include in the discovery.
   * All must match the specified entityType.
   *
   */
  "identifiers": Array<string>;
  /**
   * Type of join for each element in this filter.
   *
   */
  "operator"?: model.FleetDiscoveryOperators;

  "type": string;
}

export namespace GiResourceIdFilter {
  export enum EntityType {
    Exadatainfrastructure = "EXADATAINFRASTRUCTURE",
    Cloudexadatainfrastructure = "CLOUDEXADATAINFRASTRUCTURE",
    Vmcluster = "VMCLUSTER",
    Cloudvmcluster = "CLOUDVMCLUSTER",
    Fsucollection = "FSUCOLLECTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: GiResourceIdFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GiFleetDiscoveryFilter.getJsonObj(obj) as GiResourceIdFilter)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "RESOURCE_ID";
  export function getDeserializedJsonObj(
    obj: GiResourceIdFilter,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.GiFleetDiscoveryFilter.getDeserializedJsonObj(obj) as GiResourceIdFilter)),
      ...{}
    };

    return jsonObj;
  }
}
