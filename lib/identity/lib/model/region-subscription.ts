/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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
* An object that represents your tenancy's access to a particular region (i.e., a subscription), the status of that
* access, and whether that region is the home region. For more information, see [Managing Regions](https://docs.cloud.oracle.com/Content/Identity/regions/managingregions.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Get Started with Policies](https://docs.cloud.oracle.com/Content/Identity/policiesgs/get-started-with-policies.htm).
* 
*/
export interface RegionSubscription {
  /**
    * The region's key. See [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm)
* for the full list of supported 3-letter region codes.
* <p>
Example: `PHX`
* 
    */
  "regionKey": string;
  /**
    * The region's name. See [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm)
* for the full list of supported region names.
* <p>
Example: `us-phoenix-1`
* 
    */
  "regionName": string;
  /**
   * The region subscription status.
   */
  "status": RegionSubscription.Status;
  /**
   * Indicates if the region is the home region or not.
   */
  "isHomeRegion": boolean;
}

export namespace RegionSubscription {
  export enum Status {
    Ready = "READY",
    InProgress = "IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RegionSubscription): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RegionSubscription): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
