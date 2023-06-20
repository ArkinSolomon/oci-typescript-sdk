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
 * User can define Oauth clients in IAM, then use it to generate a token to grant access to app resources.
 *
 */
export interface OAuth2ClientCredentialSummary {
  /**
   * Allowed scopes for the given oauth credential.
   */
  "scopes"?: Array<model.FullyQualifiedScope>;
  /**
   * The OCID of the user the Oauth credential belongs to.
   */
  "userId"?: string;
  /**
    * Date and time when this credential will expire, in the format defined by RFC3339.
* Null if it never expires.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "expiresOn"?: Date;
  /**
   * The OCID of the Oauth credential.
   */
  "id"?: string;
  /**
   * The OCID of the compartment containing the Oauth credential.
   */
  "compartmentId"?: string;
  /**
   * The name of the Oauth credential.
   */
  "name"?: string;
  /**
   * The description of the Oauth credential.
   */
  "description"?: string;
  /**
   * The credential's current state. After creating a Oauth credential, make sure its `lifecycleState` changes from
   * CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState"?: OAuth2ClientCredentialSummary.LifecycleState;
  /**
    * Date and time the `OAuth2ClientCredential` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace OAuth2ClientCredentialSummary {
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

  export function getJsonObj(obj: OAuth2ClientCredentialSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "scopes": obj.scopes
          ? obj.scopes.map(item => {
              return model.FullyQualifiedScope.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OAuth2ClientCredentialSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "scopes": obj.scopes
          ? obj.scopes.map(item => {
              return model.FullyQualifiedScope.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
