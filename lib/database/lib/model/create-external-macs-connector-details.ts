/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for creating a resource used to connect to an external Oracle Database using
 * the [Management Agent cloud service (MACS)](https://docs.cloud.oracle.com/iaas/management-agents/index.html).
 *
 */
export interface CreateExternalMacsConnectorDetails
  extends model.CreateExternalDatabaseConnectorDetails {
  "connectionString": model.DatabaseConnectionString;
  "connectionCredentials":
    | model.DatabaseConnectionCredentailsByName
    | model.DatabaseConnectionCredentialsByDetails;
  /**
   * The ID of the agent used for the
   * {@link #createExternalDatabaseConnectorDetails(CreateExternalDatabaseConnectorDetailsRequest) createExternalDatabaseConnectorDetails}.
   *
   */
  "connectorAgentId": string;

  "connectorType": string;
}

export namespace CreateExternalMacsConnectorDetails {
  export function getJsonObj(
    obj: CreateExternalMacsConnectorDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateExternalDatabaseConnectorDetails.getJsonObj(
            obj
          ) as CreateExternalMacsConnectorDetails)),
      ...{
        "connectionString": obj.connectionString
          ? model.DatabaseConnectionString.getJsonObj(obj.connectionString)
          : undefined,
        "connectionCredentials": obj.connectionCredentials
          ? model.DatabaseConnectionCredentials.getJsonObj(obj.connectionCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectorType = "MACS";
}
