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
 * Users can enable multi-factor authentication (MFA) for their own user accounts. After MFA is enabled, the
 * user is prompted for a time-based one-time password (TOTP) to authenticate before they can sign in to the
 * Console. To enable multi-factor authentication, the user must register a mobile device with a TOTP authenticator app
 * installed. The registration process creates the `MfaTotpDevice` object. The registration process requires
 * interaction with the Console and cannot be completed programmatically. For more information, see
 * [Managing Multi-Factor Authentication](https://docs.cloud.oracle.com/Content/Identity/mfa/understand-multi-factor-authentication.htm).
 *
 */
export interface MfaTotpDevice {
  /**
   * The OCID of the MFA TOTP device.
   */
  "id": string;
  /**
   * The seed for the MFA TOTP device (Base32 encoded).
   *
   */
  "seed": string;
  /**
   * The OCID of the user the MFA TOTP device belongs to.
   */
  "userId": string;
  /**
    * Date and time the `MfaTotpDevice` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
    * Date and time when this MFA TOTP device will expire, in the format defined by RFC3339.
* Null if it never expires.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeExpires"?: Date;
  /**
   * The MFA TOTP device's current state. After creating the MFA TOTP device, make sure its `lifecycleState` changes from
   * CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState": MfaTotpDevice.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState.
   * Allowed values are:
   *  - 1 - SUSPENDED
   *  - 2 - DISABLED
   *  - 4 - BLOCKED
   *  - 8 - LOCKED
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
  /**
   * Flag to indicate if the MFA TOTP device has been activated.
   */
  "isActivated": boolean;
}

export namespace MfaTotpDevice {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MfaTotpDevice): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MfaTotpDevice): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
