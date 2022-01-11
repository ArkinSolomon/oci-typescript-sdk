/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Create Migration resource parameters.
 *
 */
export interface CreateMigrationDetails {
  /**
   * Migration type.
   *
   */
  "type": model.MigrationTypes;
  /**
   * Migration Display Name
   *
   */
  "displayName"?: string;
  /**
   * OCID of the compartment
   *
   */
  "compartmentId": string;
  /**
   * The OCID of the registered ODMS Agent. Only valid for Offline Logical Migrations.
   *
   */
  "agentId"?: string;
  /**
   * The OCID of the Source Database Connection.
   *
   */
  "sourceDatabaseConnectionId": string;
  /**
   * The OCID of the Source Container Database Connection. Only used for Online migrations.
   * Only Connections of type Non-Autonomous can be used as source container databases.
   *
   */
  "sourceContainerDatabaseConnectionId"?: string;
  /**
   * The OCID of the Target Database Connection.
   *
   */
  "targetDatabaseConnectionId": string;
  "dataTransferMediumDetails"?: model.CreateDataTransferMediumDetails;
  "dumpTransferDetails"?: model.CreateDumpTransferDetails;
  "datapumpSettings"?: model.CreateDataPumpSettings;
  "advisorSettings"?: model.CreateAdvisorSettings;
  /**
   * Database objects to exclude from migration, cannot be specified alongside 'includeObjects'
   *
   */
  "excludeObjects"?: Array<model.DatabaseObject>;
  /**
   * Database objects to include from migration, cannot be specified alongside 'excludeObjects'
   *
   */
  "includeObjects"?: Array<model.DatabaseObject>;
  "goldenGateDetails"?: model.CreateGoldenGateDetails;
  "vaultDetails"?: model.CreateVaultDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateMigrationDetails {
  export function getJsonObj(obj: CreateMigrationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataTransferMediumDetails": obj.dataTransferMediumDetails
          ? model.CreateDataTransferMediumDetails.getJsonObj(obj.dataTransferMediumDetails)
          : undefined,
        "dumpTransferDetails": obj.dumpTransferDetails
          ? model.CreateDumpTransferDetails.getJsonObj(obj.dumpTransferDetails)
          : undefined,
        "datapumpSettings": obj.datapumpSettings
          ? model.CreateDataPumpSettings.getJsonObj(obj.datapumpSettings)
          : undefined,
        "advisorSettings": obj.advisorSettings
          ? model.CreateAdvisorSettings.getJsonObj(obj.advisorSettings)
          : undefined,
        "excludeObjects": obj.excludeObjects
          ? obj.excludeObjects.map(item => {
              return model.DatabaseObject.getJsonObj(item);
            })
          : undefined,
        "includeObjects": obj.includeObjects
          ? obj.includeObjects.map(item => {
              return model.DatabaseObject.getJsonObj(item);
            })
          : undefined,
        "goldenGateDetails": obj.goldenGateDetails
          ? model.CreateGoldenGateDetails.getJsonObj(obj.goldenGateDetails)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.CreateVaultDetails.getJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMigrationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataTransferMediumDetails": obj.dataTransferMediumDetails
          ? model.CreateDataTransferMediumDetails.getDeserializedJsonObj(
              obj.dataTransferMediumDetails
            )
          : undefined,
        "dumpTransferDetails": obj.dumpTransferDetails
          ? model.CreateDumpTransferDetails.getDeserializedJsonObj(obj.dumpTransferDetails)
          : undefined,
        "datapumpSettings": obj.datapumpSettings
          ? model.CreateDataPumpSettings.getDeserializedJsonObj(obj.datapumpSettings)
          : undefined,
        "advisorSettings": obj.advisorSettings
          ? model.CreateAdvisorSettings.getDeserializedJsonObj(obj.advisorSettings)
          : undefined,
        "excludeObjects": obj.excludeObjects
          ? obj.excludeObjects.map(item => {
              return model.DatabaseObject.getDeserializedJsonObj(item);
            })
          : undefined,
        "includeObjects": obj.includeObjects
          ? obj.includeObjects.map(item => {
              return model.DatabaseObject.getDeserializedJsonObj(item);
            })
          : undefined,
        "goldenGateDetails": obj.goldenGateDetails
          ? model.CreateGoldenGateDetails.getDeserializedJsonObj(obj.goldenGateDetails)
          : undefined,
        "vaultDetails": obj.vaultDetails
          ? model.CreateVaultDetails.getDeserializedJsonObj(obj.vaultDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
