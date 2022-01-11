/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* An Oracle Database on a bare metal or virtual machine DB system. For more information, see [Bare Metal and Virtual Machine DB Systems](https://docs.cloud.oracle.com/Content/Database/Concepts/overview.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface DatabaseSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The character set for the database.
   */
  "characterSet"?: string;
  /**
   * The national character set for the database.
   */
  "ncharacterSet"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Database Home.
   */
  "dbHomeId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "dbSystemId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM cluster.
   */
  "vmClusterId"?: string;
  /**
   * The database name.
   */
  "dbName": string;
  /**
   * The name of the pluggable database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. Pluggable database should not be same as database name.
   */
  "pdbName"?: string;
  /**
   * The database workload type.
   */
  "dbWorkload"?: string;
  /**
   * A system-generated name for the database to ensure uniqueness within an Oracle Data Guard group (a primary database and its standby databases). The unique name cannot be changed.
   *
   */
  "dbUniqueName": string;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of the database.
   */
  "lifecycleState": DatabaseSummary.LifecycleState;
  /**
   * The date and time the database was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time when the latest database backup was created.
   */
  "lastBackupTimestamp"?: Date;
  "dbBackupConfig"?: model.DbBackupConfig;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The Connection strings used to connect to the Oracle Database.
   */
  "connectionStrings"?: model.DatabaseConnectionStrings;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
  /**
   * Point in time recovery timeStamp of the source database at which cloned database system is cloned from the source database system, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339)
   */
  "sourceDatabasePointInTimeRecoveryTimestamp"?: Date;
  /**
   * The database software image [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "databaseSoftwareImageId"?: string;
  /**
   * True if the database is a container database.
   */
  "isCdb"?: boolean;
  "databaseManagementConfig"?: model.CloudDatabaseManagementConfig;
  /**
   * Specifies a prefix for the `Oracle SID` of the database to be created.
   *
   */
  "sidPrefix"?: string;
}

export namespace DatabaseSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    Upgrading = "UPGRADING",
    Converting = "CONVERTING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    RestoreFailed = "RESTORE_FAILED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DatabaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbBackupConfig": obj.dbBackupConfig
          ? model.DbBackupConfig.getJsonObj(obj.dbBackupConfig)
          : undefined,

        "connectionStrings": obj.connectionStrings
          ? model.DatabaseConnectionStrings.getJsonObj(obj.connectionStrings)
          : undefined,

        "databaseManagementConfig": obj.databaseManagementConfig
          ? model.CloudDatabaseManagementConfig.getJsonObj(obj.databaseManagementConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbBackupConfig": obj.dbBackupConfig
          ? model.DbBackupConfig.getDeserializedJsonObj(obj.dbBackupConfig)
          : undefined,

        "connectionStrings": obj.connectionStrings
          ? model.DatabaseConnectionStrings.getDeserializedJsonObj(obj.connectionStrings)
          : undefined,

        "databaseManagementConfig": obj.databaseManagementConfig
          ? model.CloudDatabaseManagementConfig.getDeserializedJsonObj(obj.databaseManagementConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
