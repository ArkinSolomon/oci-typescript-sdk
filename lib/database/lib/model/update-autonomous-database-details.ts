/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details to update an Oracle Autonomous Database.
 * <p>
 **Notes**
 * - To specify OCPU core count, you must use either `ocpuCount` or `cpuCoreCount`. You cannot use both parameters at the same time.
 * - To specify a storage allocation, you must use  either `dataStorageSizeInGBs` or `dataStorageSizeInTBs`.
 * - See the individual parameter discriptions for more information on the OCPU and storage value parameters.
 * **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface UpdateAutonomousDatabaseDetails {
  /**
   * Retention period, in days, for long-term backups Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "backupRetentionPeriodInDays"?: number;
  /**
   * The compute model of the Autonomous Database. This is required if using the `computeCount` parameter. If using `cpuCoreCount` then it is an error to specify `computeModel` to a non-null value.
   */
  "computeModel"?: UpdateAutonomousDatabaseDetails.ComputeModel;
  /**
   * The percentage of the System Global Area(SGA) assigned to In-Memory tables in Autonomous Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inMemoryPercentage"?: number;
  /**
   * Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "localAdgAutoFailoverMaxDataLossLimit"?: number;
  /**
    * The number of CPUs to be made available to the Autonomous Database.<br>
* For Autonomous Databases on Dedicated Exadata Infrastructure:
* - The CPU type (OCPUs or ECPUs) is determined by the parent Autonomous Exadata VM Cluster's compute model. 
* - It is suggested to use 'computeCount' parameter if you want to use fractional value to provision less than 1 core.
* <p>
**Note:** This parameter cannot be used with the `ocpuCount` or `computeCount` parameter.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, databaseEdition, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "cpuCoreCount"?: number;
  "longTermBackupSchedule"?: model.LongTermBackUpScheduleDetails;
  /**
    * The compute amount available to the database. Minimum and maximum values depend on the compute model and whether the database is an Autonomous Database Serverless instance or an Autonomous Database on Dedicated Exadata Infrastructure. For an Autonomous Database Serverless instance, the ECPU compute model requires values in multiples of two. Required when using the computeModel parameter. When using the cpuCoreCount parameter, computeCount must be null.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, databaseEdition, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "computeCount"?: number;
  /**
    * The number of OCPU cores to be made available to the Autonomous Database.
* <p>
For Autonomous Databases on Dedicated Exadata Infrastructure, you can specify a fractional value for this parameter. Fractional values are not supported for Autonomous Database Serverless instances.
* <p>
To provision less than 1 core, enter a fractional value in an increment of 0.1. To provision 1 or more cores, you must enter an integer between 1 and the maximum number of cores available to the infrastructure shape. For example, you can provision 0.3 or 0.4 cores, but not 0.35 cores. Likewise, you can provision 2 cores or 3 cores, but not 2.5 cores. The maximum number of cores is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/index.html) for shape details.
* <p>
**Note:** This parameter cannot be used with the `cpuCoreCount` parameter.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "ocpuCount"?: number;
  /**
    * The size, in terabytes, of the data volume that will be created and attached to the database. For Autonomous Databases on dedicated Exadata infrastructure, the maximum storage value is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
* A full Exadata service is allocated when the Autonomous Database size is set to the upper limit (384 TB).
* <p>
**Note:** This parameter cannot be used with the `dataStorageSizeInGBs` parameter.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, databaseEdition, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "dataStorageSizeInTBs"?: number;
  /**
    * Applies to dedicated Exadata infrastructure only.
* <p>
The size, in gigabytes, of the data volume that will be created and attached to the database. The maximum storage value depends on the system shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
* <p>
**Note:** This parameter cannot be used with the `dataStorageSizeInTBs` parameter.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "dataStorageSizeInGBs"?: number;
  /**
   * The user-friendly name for the Autonomous Database. The name does not have to be unique. The display name can only be updated for Autonomous Databases using dedicated Exadata Infrastructure. This parameter may not be updated in parallel with dbVersion.
   *
   */
  "displayName"?: string;
  /**
    * Indicates if this is an Always Free resource. The default value is false. Note that Always Free Autonomous Databases have 1 CPU and 20GB of memory. For Always Free databases, memory and CPU cannot be scaled.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isLocalDataGuardEnabled
* 
    */
  "isFreeTier"?: boolean;
  /**
    * The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase, and 1 numeric character. It cannot contain the double quote symbol (\") or the username \"admin\", regardless of casing. It must be different from the last four passwords and it must not be a password used within the last 24 hours.
* <p>
This cannot be used in conjunction with with OCI vault secrets (secretId).
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, whitelistedIps, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, or isFreeTier.
* 
    */
  "adminPassword"?: string;
  /**
    * New name for this Autonomous Database.
* For Autonomous Databases on Dedicated Exadata Infrastructure, the name must begin with an alphabetic character, and can contain a maximum of eight alphanumeric characters. Special characters are not permitted.
* For Autonomous Database Serverless instances, the name must begin with an alphabetic character, and can contain a maximum of 14 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails.
* 
    */
  "dbName"?: string;
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
    * The Autonomous Database workload type. The following values are valid:
* <p>
- OLTP - indicates an Autonomous Transaction Processing database
* - DW - indicates an Autonomous Data Warehouse database
* - AJD - indicates an Autonomous JSON Database
* - APEX - indicates an Autonomous Database with the Oracle APEX Application Development workload type.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "dbWorkload"?: UpdateAutonomousDatabaseDetails.DbWorkload;
  /**
    * The Oracle license model that applies to the Oracle Autonomous Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud.
* License Included allows you to subscribe to new Oracle Database software licenses and the Oracle Database service.
* Note that when provisioning an [Autonomous Database on dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the
* Autonomous Exadata Infrastructure level. When provisioning an [Autonomous Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to `BRING_YOUR_OWN_LICENSE`.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, maxCpuCoreCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "licenseModel"?: UpdateAutonomousDatabaseDetails.LicenseModel;
  /**
    * Indicates if the database-level access control is enabled.
* If disabled, database access is defined by the network security rules.
* If enabled, database access is restricted to the IP addresses defined by the rules specified with the `whitelistedIps` property. While specifying `whitelistedIps` rules is optional,
*  if database-level access control is enabled and no rules are specified, the database will become inaccessible. The rules can be added later using the `UpdateAutonomousDatabase` API operation or edit option in console.
* When creating a database clone, the desired access control setting should be specified. By default, database-level access control will be disabled for the clone.
* <p>
This property is applicable only to Autonomous Databases on the Exadata Cloud@Customer platform.
* 
    */
  "isAccessControlEnabled"?: boolean;
  /**
    * The client IP access control list (ACL). This feature is available for [Autonomous Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer.
* Only clients connecting from an IP address included in the ACL may access the Autonomous Database instance.
* <p>
For Autonomous Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID).
* Use a semicolon (;) as a deliminator between the VCN-specific subnets or IPs.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"ocid1.vcn.oc1.sea.<unique_id>\",\"ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1\",\"ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16\"]`
* For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"1.1.2.25\"]`
* <p>
For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "whitelistedIps"?: Array<string>;
  /**
   * This field will be null if the Autonomous Database is not Data Guard enabled or Access Control is disabled.
   * `TRUE` if the Autonomous Database has Data Guard and Access Control enabled, and the Autonomous Database uses the primary's IP access control list (ACL) for standby.
   * `FALSE` if the Autonomous Database has Data Guard and Access Control enabled, and the Autonomous Database uses a different IP access control list (ACL) for standby compared to primary.
   *
   */
  "arePrimaryWhitelistedIpsUsed"?: boolean;
  /**
    * The client IP access control list (ACL). This feature is available for [Autonomous Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer.
* Only clients connecting from an IP address included in the ACL may access the Autonomous Database instance.
* <p>
For Autonomous Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID).
* Use a semicolon (;) as a deliminator between the VCN-specific subnets or IPs.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"ocid1.vcn.oc1.sea.<unique_id>\",\"ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1\",\"ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16\"]`
* For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"1.1.2.25\"]`
* <p>
For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "standbyWhitelistedIps"?: Array<string>;
  /**
   * Indicates whether auto scaling is enabled for the Autonomous Database OCPU core count. Setting to `TRUE` enables auto scaling. Setting to `FALSE` disables auto scaling. The default value is true. Auto scaling is only available for [Autonomous Database Serverless instances](https://docs.oracle.com/en/cloud/paas/autonomous-database/shared/index.html).
   *
   */
  "isAutoScalingEnabled"?: boolean;
  /**
    * Indicates if the Autonomous Database is a refreshable clone.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "isRefreshableClone"?: boolean;
  /**
   * The refresh mode of the clone. AUTOMATIC indicates that the clone is automatically being refreshed with data from the source Autonomous Database.
   */
  "refreshableMode"?: UpdateAutonomousDatabaseDetails.RefreshableMode;
  /**
    * Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable when creating a cross-region Autonomous Data Guard associations, or to
* Autonomous Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.
* <p>
To create a local standby, set to `TRUE`. To delete a local standby, set to `FALSE`. For more information on using Autonomous Data Guard on an Autonomous Database Serverless instance (local and cross-region) , see [About Standby Databases](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/autonomous-data-guard-about.html#GUID-045AD017-8120-4BDC-AF58-7430FFE28D2B)
* <p>
To enable cross-region Autonomous Data Guard on an Autonomous Database Serverless instance, see [Enable Autonomous Data Guard](https://docs-uat.us.oracle.com/en/cloud/paas/autonomous-database/adbsa/autonomous-data-guard-update-type.html#GUID-967ED737-4A05-4D6E-A7CA-C3F21ACF9BF0).
* <p>
This cannot be updated in parallel with any of the following: isMTLSRequired, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "isLocalDataGuardEnabled"?: boolean;
  /**
    * ** Deprecated. ** Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable when creating a cross-region Autonomous Data Guard associations, or to
* Autonomous Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.
* <p>
To create a local standby, set to `TRUE`. To delete a local standby, set to `FALSE`. For more information on using Autonomous Data Guard on an Autonomous Database Serverless instance (local and cross-region) , see [About Standby Databases](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/autonomous-data-guard-about.html#GUID-045AD017-8120-4BDC-AF58-7430FFE28D2B)
* <p>
To enable cross-region Autonomous Data Guard on an Autonomous Database Serverless instance, see [Enable Autonomous Data Guard](https://docs-uat.us.oracle.com/en/cloud/paas/autonomous-database/adbsa/autonomous-data-guard-update-type.html#GUID-967ED737-4A05-4D6E-A7CA-C3F21ACF9BF0).
* <p>
To delete a cross-region standby database, provide the `peerDbId` for the standby database in a remote region, and set `isDataGuardEnabled` to `FALSE`.
* 
    */
  "isDataGuardEnabled"?: boolean;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Autonomous Data Guard standby database located in a different (remote) region from the source primary Autonomous Database.
* <p>
To create or delete a local (in-region) standby, see the `isDataGuardEnabled` parameter.
* 
    */
  "peerDbId"?: string;
  /**
   * A valid Oracle Database version for Autonomous Database.
   */
  "dbVersion"?: string;
  /**
    * Indicates the Autonomous Database mode. The database can be opened in `READ_ONLY` or `READ_WRITE` mode.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "openMode"?: UpdateAutonomousDatabaseDetails.OpenMode;
  /**
    * The Autonomous Database permission level. Restricted mode allows access only by admin users.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "permissionLevel"?: UpdateAutonomousDatabaseDetails.PermissionLevel;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet the resource is associated with.
* <p>
**Subnet Restrictions:**
* - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28.
* - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20.
* - For Autonomous Database, setting this will disable public secure access to the database.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and the backup subnet.
* 
    */
  "subnetId"?: string;
  /**
    * The resource's private endpoint label. Setting this to an empty string, after the creation of the private endpoint database, changes the private endpoint database to a public endpoint database.
* <p>
This setting cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "privateEndpointLabel"?: string;
  /**
   * The private endpoint Ip address for the resource.
   */
  "privateEndpointIp"?: string;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
    * Customer Contacts. Setting this to an empty list removes all customer contacts of an Oracle
* <p>
This cannot be updated in parallel with any of the following: isMTLSConnectionRequired, scheduledOperations, or dbToolsDetails.
* 
    */
  "customerContacts"?: Array<model.CustomerContact>;
  /**
    * Specifies if the Autonomous Database requires mTLS connections.
* <p>
This may not be updated in parallel with any of the following: licenseModel, databaseEdition, cpuCoreCount, computeCount, maxCpuCoreCount, dataStorageSizeInTBs, whitelistedIps, openMode, permissionLevel, db-workload, privateEndpointLabel, nsgIds, customerContacts, dbVersion, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* <p>
Service Change: The default value of the isMTLSConnectionRequired attribute will change from true to false on July 1, 2023 in the following APIs:
* - CreateAutonomousDatabase
* - GetAutonomousDatabase
* - UpdateAutonomousDatabase
* Details: Prior to the July 1, 2023 change, the isMTLSConnectionRequired attribute default value was true. This applies to Autonomous Database Serverless.
* Does this impact me? If you use or maintain custom scripts or Terraform scripts referencing the CreateAutonomousDatabase, GetAutonomousDatabase, or UpdateAutonomousDatabase APIs, you want to check, and possibly modify, the scripts for the changed default value of the attribute. Should you choose not to leave your scripts unchanged, the API calls containing this attribute will continue to work, but the default value will switch from true to false.
* How do I make this change? Using either OCI SDKs or command line tools, update your custom scripts to explicitly set the isMTLSConnectionRequired attribute to true.
* 
    */
  "isMtlsConnectionRequired"?: boolean;
  /**
    * The list of scheduled operations.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "scheduledOperations"?: Array<model.ScheduledOperationDetails>;
  /**
   * Indicates if auto scaling is enabled for the Autonomous Database storage. The default value is `FALSE`.
   *
   */
  "isAutoScalingForStorageEnabled"?: boolean;
  /**
   * The number of Max OCPU cores to be made available to the autonomous database with auto scaling of cpu enabled.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxCpuCoreCount"?: number;
  /**
    * The Oracle Database Edition that applies to the Autonomous databases.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "databaseEdition"?: string;
  /**
    * The list of database tools details.
* <p>
This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, isLocalDataGuardEnabled, or isFreeTier.
* 
    */
  "dbToolsDetails"?: Array<model.DatabaseTool>;
  /**
   * The OCI vault secret [/Content/General/Concepts/identifiers.htm]OCID. This cannot be used in conjunction with adminPassword.
   */
  "secretId"?: string;
  /**
   * The version of the vault secret. If no version is specified, the latest version will be used. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "secretVersionNumber"?: number;
}

export namespace UpdateAutonomousDatabaseDetails {
  export enum ComputeModel {
    Ecpu = "ECPU",
    Ocpu = "OCPU"
  }

  export enum DbWorkload {
    Oltp = "OLTP",
    Dw = "DW",
    Ajd = "AJD",
    Apex = "APEX"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export enum RefreshableMode {
    Automatic = "AUTOMATIC",
    Manual = "MANUAL"
  }

  export enum OpenMode {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
  }

  export enum PermissionLevel {
    Restricted = "RESTRICTED",
    Unrestricted = "UNRESTRICTED"
  }

  export function getJsonObj(obj: UpdateAutonomousDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "longTermBackupSchedule": obj.longTermBackupSchedule
          ? model.LongTermBackUpScheduleDetails.getJsonObj(obj.longTermBackupSchedule)
          : undefined,

        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getJsonObj(item);
            })
          : undefined,

        "scheduledOperations": obj.scheduledOperations
          ? obj.scheduledOperations.map(item => {
              return model.ScheduledOperationDetails.getJsonObj(item);
            })
          : undefined,

        "dbToolsDetails": obj.dbToolsDetails
          ? obj.dbToolsDetails.map(item => {
              return model.DatabaseTool.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAutonomousDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "longTermBackupSchedule": obj.longTermBackupSchedule
          ? model.LongTermBackUpScheduleDetails.getDeserializedJsonObj(obj.longTermBackupSchedule)
          : undefined,

        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getDeserializedJsonObj(item);
            })
          : undefined,

        "scheduledOperations": obj.scheduledOperations
          ? obj.scheduledOperations.map(item => {
              return model.ScheduledOperationDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "dbToolsDetails": obj.dbToolsDetails
          ? obj.dbToolsDetails.map(item => {
              return model.DatabaseTool.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
