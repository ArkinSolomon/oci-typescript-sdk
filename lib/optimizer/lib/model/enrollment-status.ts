/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
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
 * The metadata associated with the enrollment status.
 *
 */
export interface EnrollmentStatus {
  /**
   * The OCID of the enrollment status.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The enrollment status' current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The current Cloud Advisor enrollment status.
   */
  "status": model.OptimizerEnrollmentStatus;
  /**
   * The reason for the enrollment status of the tenancy.
   */
  "statusReason"?: string;
  /**
   * The date and time the enrollment status was created, in the format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the enrollment status was last updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
}

export namespace EnrollmentStatus {
  export function getJsonObj(obj: EnrollmentStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EnrollmentStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
