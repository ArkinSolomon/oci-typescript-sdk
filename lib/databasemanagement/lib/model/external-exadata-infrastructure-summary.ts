/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The Exadata infrastructure.
 */
export interface ExternalExadataInfrastructureSummary extends model.DbmResource {
  /**
   * The rack size of the Exadata infrastructure.
   */
  "rackSize"?: ExternalExadataInfrastructureSummary.RackSize;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The Oracle license model that applies to the database management resources.
   *
   */
  "licenseModel"?: ExternalExadataInfrastructureSummary.LicenseModel;
  /**
   * The Oracle grid home path.
   */
  "gridHomePath"?: string;

  "resourceType": string;
}

export namespace ExternalExadataInfrastructureSummary {
  export enum RackSize {
    Full = "FULL",
    Half = "HALF",
    Quarter = "QUARTER",
    Eighth = "EIGHTH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: ExternalExadataInfrastructureSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getJsonObj(obj) as ExternalExadataInfrastructureSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const resourceType = "INFRASTRUCTURE_SUMMARY";
  export function getDeserializedJsonObj(
    obj: ExternalExadataInfrastructureSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getDeserializedJsonObj(obj) as ExternalExadataInfrastructureSummary)),
      ...{}
    };

    return jsonObj;
  }
}
