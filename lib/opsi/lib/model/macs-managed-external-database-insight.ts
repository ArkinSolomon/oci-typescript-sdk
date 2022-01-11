/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Database insight resource.
 */
export interface MacsManagedExternalDatabaseInsight extends model.DatabaseInsight {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Management Agent
   */
  "managementAgentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of External Database Connector
   */
  "connectorId"?: string;
  "connectionDetails"?: model.ConnectionDetails;
  "connectionCredentialDetails"?: model.CredentialsBySource;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * Name of database
   */
  "databaseName": string;
  /**
   * Display name of database
   */
  "databaseDisplayName"?: string;
  /**
   * OCI database resource type
   */
  "databaseResourceType": string;
  /**
   * Additional details of a database in JSON format. For autonomous databases, this is the AutonomousDatabase object serialized as a JSON string as defined in https://docs.cloud.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/. For EM, pass in null or an empty string. Note that this string needs to be escaped when specified in the curl command.
   *
   */
  "dbAdditionalDetails"?: any;

  "entitySource": string;
}

export namespace MacsManagedExternalDatabaseInsight {
  export function getJsonObj(
    obj: MacsManagedExternalDatabaseInsight,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsight.getJsonObj(obj) as MacsManagedExternalDatabaseInsight)),
      ...{
        "connectionDetails": obj.connectionDetails
          ? model.ConnectionDetails.getJsonObj(obj.connectionDetails)
          : undefined,
        "connectionCredentialDetails": obj.connectionCredentialDetails
          ? model.CredentialDetails.getJsonObj(obj.connectionCredentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const entitySource = "MACS_MANAGED_EXTERNAL_DATABASE";
  export function getDeserializedJsonObj(
    obj: MacsManagedExternalDatabaseInsight,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsight.getDeserializedJsonObj(
            obj
          ) as MacsManagedExternalDatabaseInsight)),
      ...{
        "connectionDetails": obj.connectionDetails
          ? model.ConnectionDetails.getDeserializedJsonObj(obj.connectionDetails)
          : undefined,
        "connectionCredentialDetails": obj.connectionCredentialDetails
          ? model.CredentialDetails.getDeserializedJsonObj(obj.connectionCredentialDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
