/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
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
 * Subscription mapping information.
 */
export interface SubscriptionMappingSummary {
  /**
   * OCID of the mapping between subscription and compartment identified by the tenancy.
   */
  "id": string;
  /**
   * OCID of the subscription.
   */
  "subscriptionId": string;
  /**
   * OCID of the compartment. Always a tenancy OCID.
   */
  "compartmentId": string;
  /**
   * Denotes if the subscription is explicity assigned to the root compartment or tenancy.
   */
  "isExplicitlyAssigned": boolean;
  /**
   * Lifecycle state of the subscription mapping.
   */
  "lifecycleState": string;
  /**
   * Date-time when subscription mapping was terminated.
   */
  "timeTerminated"?: Date;
  /**
   * Date-time when subscription mapping was created.
   */
  "timeCreated": Date;
  /**
   * Date-time when subscription mapping was updated.
   */
  "timeUpdated": Date;
}

export namespace SubscriptionMappingSummary {
  export function getJsonObj(obj: SubscriptionMappingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SubscriptionMappingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
