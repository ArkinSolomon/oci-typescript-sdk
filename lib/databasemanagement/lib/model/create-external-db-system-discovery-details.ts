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
 * The details required to create an external DB system discovery resource.
 */
export interface CreateExternalDbSystemDiscoveryDetails {
  /**
   * The user-friendly name for the DB system. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the management agent
   * used for the external DB system discovery.
   *
   */
  "agentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the external DB system resides.
   */
  "compartmentId": string;
}

export namespace CreateExternalDbSystemDiscoveryDetails {
  export function getJsonObj(obj: CreateExternalDbSystemDiscoveryDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateExternalDbSystemDiscoveryDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
