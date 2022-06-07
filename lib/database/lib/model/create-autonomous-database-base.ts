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
 * Details to create an Oracle Autonomous Database.
 * <p>
 **Notes:**
 * - To specify OCPU core count, you must use either `ocpuCount` or `cpuCoreCount`. You cannot use both parameters at the same time.
 * - To specify a storage allocation, you must use  either `dataStorageSizeInGBs` or `dataStorageSizeInTBs`.
 * - See the individual parameter discriptions for more information on the OCPU and storage value parameters.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateAutonomousDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment of the Autonomous Database.
   */
  "compartmentId": string;
  /**
    * The character set for the autonomous database.  The default is AL32UTF8. Allowed values are:
* <p>
AL32UTF8, AR8ADOS710, AR8ADOS720, AR8APTEC715, AR8ARABICMACS, AR8ASMO8X, AR8ISO8859P6, AR8MSWIN1256, AR8MUSSAD768, AR8NAFITHA711, AR8NAFITHA721, AR8SAKHR706, AR8SAKHR707, AZ8ISO8859P9E, BG8MSWIN, BG8PC437S, BLT8CP921, BLT8ISO8859P13, BLT8MSWIN1257, BLT8PC775, BN8BSCII, CDN8PC863, CEL8ISO8859P14, CL8ISO8859P5, CL8ISOIR111, CL8KOI8R, CL8KOI8U, CL8MACCYRILLICS, CL8MSWIN1251, EE8ISO8859P2, EE8MACCES, EE8MACCROATIANS, EE8MSWIN1250, EE8PC852, EL8DEC, EL8ISO8859P7, EL8MACGREEKS, EL8MSWIN1253, EL8PC437S, EL8PC851, EL8PC869, ET8MSWIN923, HU8ABMOD, HU8CWI2, IN8ISCII, IS8PC861, IW8ISO8859P8, IW8MACHEBREWS, IW8MSWIN1255, IW8PC1507, JA16EUC, JA16EUCTILDE, JA16SJIS, JA16SJISTILDE, JA16VMS, KO16KSC5601, KO16KSCCS, KO16MSWIN949, LA8ISO6937, LA8PASSPORT, LT8MSWIN921, LT8PC772, LT8PC774, LV8PC1117, LV8PC8LR, LV8RST104090, N8PC865, NE8ISO8859P10, NEE8ISO8859P4, RU8BESTA, RU8PC855, RU8PC866, SE8ISO8859P3, TH8MACTHAIS, TH8TISASCII, TR8DEC, TR8MACTURKISHS, TR8MSWIN1254, TR8PC857, US7ASCII, US8PC437, UTF8, VN8MSWIN1258, VN8VN3, WE8DEC, WE8DG, WE8ISO8859P1, WE8ISO8859P15, WE8ISO8859P9, WE8MACROMAN8S, WE8MSWIN1252, WE8NCR4970, WE8NEXTSTEP, WE8PC850, WE8PC858, WE8PC860, WE8ROMAN8, ZHS16CGB231280, ZHS16GBK, ZHT16BIG5, ZHT16CCDC, ZHT16DBT, ZHT16HKSCS, ZHT16MSWIN950, ZHT32EUC, ZHT32SOPS, ZHT32TRIS
* 
    */
  "characterSet"?: string;
  /**
   * The national character set for the autonomous database.  The default is AL16UTF16. Allowed values are:
   * AL16UTF16 or UTF8.
   *
   */
  "ncharacterSet"?: string;
  /**
   * The database name. The name must begin with an alphabetic character and can contain a maximum of 14 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy.
   */
  "dbName"?: string;
  /**
   * The number of OCPU cores to be made available to the database. For Autonomous Databases on dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
   * <p>
   **Note:** This parameter cannot be used with the `ocpuCount` parameter.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
    * The number of OCPU cores to be made available to the database. 
* <p>
The following points apply:
* - For Autonomous Databases on dedicated Exadata infrastructure, to provision less than 1 core, enter a fractional value in an increment of 0.1. For example, you can provision 0.3 or 0.4 cores, but not 0.35 cores. (Note that fractional OCPU values are not supported for Autonomous Databasese on shared Exadata infrastructure.)
* - To provision 1 or more cores, you must enter an integer between 1 and the maximum number of cores available for the infrastructure shape. For example, you can provision 2 cores or 3 cores, but not 2.5 cores. This applies to Autonomous Databases on both shared and dedicated Exadata infrastructure.
* <p>
For Autonomous Databases on dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
* <p>
**Note:** This parameter cannot be used with the `cpuCoreCount` parameter.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "ocpuCount"?: number;
  /**
    * The Autonomous Database workload type. The following values are valid:
* <p>
- OLTP - indicates an Autonomous Transaction Processing database
* - DW - indicates an Autonomous Data Warehouse database
* - AJD - indicates an Autonomous JSON Database
* - APEX - indicates an Autonomous Database with the Oracle APEX Application Development workload type.
* 
    */
  "dbWorkload"?: CreateAutonomousDatabaseBase.DbWorkload;
  /**
   * The size, in terabytes, of the data volume that will be created and attached to the database. This storage can later be scaled up if needed. For Autonomous Databases on dedicated Exadata infrastructure, the maximum storage value is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
   * <p>
   **Note:** This parameter cannot be used with the `dataStorageSizeInGBs` parameter.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * The size, in gigabytes, of the data volume that will be created and attached to the database. This storage can later be scaled up if needed. The maximum storage value is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://www.oracle.com/pls/topic/lookup?ctx=en/cloud/paas/autonomous-database&id=ATPFG-GUID-B0F033C1-CC5A-42F0-B2E7-3CECFEDA1FD1) for shape details.
   * <p>
   **Notes**
   * - This parameter is only supported for dedicated Exadata infrastructure.
   * - This parameter cannot be used with the `dataStorageSizeInTBs` parameter.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * Indicates if this is an Always Free resource. The default value is false. Note that Always Free Autonomous Databases have 1 CPU and 20GB of memory. For Always Free databases, memory and CPU cannot be scaled.
   *
   */
  "isFreeTier"?: boolean;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](https://docs.cloud.oracle.com/Content/KeyManagement/Concepts/keyoverview.htm#concepts).
   */
  "vaultId"?: string;
  /**
   * **Important** The `adminPassword` must be specified for all Autonomous Databases except for refreshable clones. The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase, and 1 numeric character. It cannot contain the double quote symbol (\") or the username \"admin\", regardless of casing.
   *
   */
  "adminPassword"?: string;
  /**
   * The user-friendly name for the Autonomous Database. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The Oracle license model that applies to the Oracle Autonomous Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle PaaS and IaaS services in the cloud.
   * License Included allows you to subscribe to new Oracle Database software licenses and the Database service.
   * Note that when provisioning an Autonomous Database on [dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null because the attribute is already set at the
   * Autonomous Exadata Infrastructure level. When using [shared Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), if a value is not specified, the system will supply the value of `BRING_YOUR_OWN_LICENSE`.
   *
   */
  "licenseModel"?: CreateAutonomousDatabaseBase.LicenseModel;
  /**
   * If set to `TRUE`, indicates that an Autonomous Database preview version is being provisioned, and that the preview version's terms of service have been accepted. Note that preview version software is only available for databases on [shared Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html).
   *
   */
  "isPreviewVersionWithServiceTermsAccepted"?: boolean;
  /**
   * Indicates if auto scaling is enabled for the Autonomous Database OCPU core count. The default value is `FALSE`.
   *
   */
  "isAutoScalingEnabled"?: boolean;
  /**
   * True if the database is on [dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html).
   *
   */
  "isDedicated"?: boolean;
  /**
   * The Autonomous Container Database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "autonomousContainerDatabaseId"?: string;
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
    * The client IP access control list (ACL). This feature is available for autonomous databases on [shared Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer.
* Only clients connecting from an IP address included in the ACL may access the Autonomous Database instance.
* <p>
For shared Exadata infrastructure, this is an array of CIDR (Classless Inter-Domain Routing) notations for a subnet or VCN OCID.
* Use a semicolon (;) as a deliminator between the VCN-specific subnets or IPs.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"ocid1.vcn.oc1.sea.<unique_id>\",\"ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1\",\"ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16\"]`
* For Exadata Cloud@Customer, this is an array of IP addresses or CIDR (Classless Inter-Domain Routing) notations.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"1.1.2.25\"]`
* <p>
For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
* 
    */
  "whitelistedIps"?: Array<string>;
  /**
   * This field will be null if the Autonomous Database is not Data Guard enabled or Access Control is disabled.
   * It's value would be `TRUE` if Autonomous Database is Data Guard enabled and Access Control is enabled and if the Autonomous Database uses primary IP access control list (ACL) for standby.
   * It's value would be `FALSE` if Autonomous Database is Data Guard enabled and Access Control is enabled and if the Autonomous Database uses different IP access control list (ACL) for standby compared to primary.
   *
   */
  "arePrimaryWhitelistedIpsUsed"?: boolean;
  /**
    * The client IP access control list (ACL). This feature is available for autonomous databases on [shared Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer.
* Only clients connecting from an IP address included in the ACL may access the Autonomous Database instance.
* <p>
For shared Exadata infrastructure, this is an array of CIDR (Classless Inter-Domain Routing) notations for a subnet or VCN OCID.
* Use a semicolon (;) as a deliminator between the VCN-specific subnets or IPs.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"ocid1.vcn.oc1.sea.<unique_id>\",\"ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1\",\"ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16\"]`
* For Exadata Cloud@Customer, this is an array of IP addresses or CIDR (Classless Inter-Domain Routing) notations.
* Example: `[\"1.1.1.1\",\"1.1.1.0/24\",\"1.1.2.25\"]`
* <p>
For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
* 
    */
  "standbyWhitelistedIps"?: Array<string>;
  /**
   * **Deprecated.** Indicates whether the Autonomous Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.
   *
   */
  "isDataGuardEnabled"?: boolean;
  /**
   * Indicates whether the Autonomous Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.
   */
  "isLocalDataGuardEnabled"?: boolean;
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
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The private endpoint label for the resource. Setting this to an empty string, after the private endpoint database gets created, will change the same private endpoint database to the public endpoint database.
   */
  "privateEndpointLabel"?: string;
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
   * A valid Oracle Database version for Autonomous Database.
   */
  "dbVersion"?: string;
  /**
   * Customer Contacts.
   */
  "customerContacts"?: Array<model.CustomerContact>;
  /**
   * Indicates whether the Autonomous Database requires mTLS connections.
   */
  "isMtlsConnectionRequired"?: boolean;
  /**
   * The maintenance schedule type of the Autonomous Database on shared Exadata infrastructure. The EARLY maintenance schedule of this Autonomous Database
   * follows a schedule that applies patches prior to the REGULAR schedule.The REGULAR maintenance schedule of this Autonomous Database follows the normal cycle.
   *
   */
  "autonomousMaintenanceScheduleType"?: CreateAutonomousDatabaseBase.AutonomousMaintenanceScheduleType;
  /**
   * list of scheduled operations
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
   *
   */
  "databaseEdition"?: string;

  "source": string;
}

export namespace CreateAutonomousDatabaseBase {
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

  export enum AutonomousMaintenanceScheduleType {
    Early = "EARLY",
    Regular = "REGULAR"
  }

  export function getJsonObj(obj: CreateAutonomousDatabaseBase): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getJsonObj(item);
            })
          : undefined,

        "scheduledOperations": obj.scheduledOperations
          ? obj.scheduledOperations.map(item => {
              return model.ScheduledOperationDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "DATABASE":
          return model.CreateAutonomousDatabaseCloneDetails.getJsonObj(
            <model.CreateAutonomousDatabaseCloneDetails>(<object>jsonObj),
            true
          );
        case "CLONE_TO_REFRESHABLE":
          return model.CreateRefreshableAutonomousDatabaseCloneDetails.getJsonObj(
            <model.CreateRefreshableAutonomousDatabaseCloneDetails>(<object>jsonObj),
            true
          );
        case "BACKUP_FROM_ID":
          return model.CreateAutonomousDatabaseFromBackupDetails.getJsonObj(
            <model.CreateAutonomousDatabaseFromBackupDetails>(<object>jsonObj),
            true
          );
        case "BACKUP_FROM_TIMESTAMP":
          return model.CreateAutonomousDatabaseFromBackupTimestampDetails.getJsonObj(
            <model.CreateAutonomousDatabaseFromBackupTimestampDetails>(<object>jsonObj),
            true
          );
        case "CROSS_REGION_DATAGUARD":
          return model.CreateCrossRegionAutonomousDatabaseDataGuardDetails.getJsonObj(
            <model.CreateCrossRegionAutonomousDatabaseDataGuardDetails>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.CreateAutonomousDatabaseDetails.getJsonObj(
            <model.CreateAutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAutonomousDatabaseBase): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getDeserializedJsonObj(item);
            })
          : undefined,

        "scheduledOperations": obj.scheduledOperations
          ? obj.scheduledOperations.map(item => {
              return model.ScheduledOperationDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "source" in obj && obj.source) {
      switch (obj.source) {
        case "DATABASE":
          return model.CreateAutonomousDatabaseCloneDetails.getDeserializedJsonObj(
            <model.CreateAutonomousDatabaseCloneDetails>(<object>jsonObj),
            true
          );
        case "CLONE_TO_REFRESHABLE":
          return model.CreateRefreshableAutonomousDatabaseCloneDetails.getDeserializedJsonObj(
            <model.CreateRefreshableAutonomousDatabaseCloneDetails>(<object>jsonObj),
            true
          );
        case "BACKUP_FROM_ID":
          return model.CreateAutonomousDatabaseFromBackupDetails.getDeserializedJsonObj(
            <model.CreateAutonomousDatabaseFromBackupDetails>(<object>jsonObj),
            true
          );
        case "BACKUP_FROM_TIMESTAMP":
          return model.CreateAutonomousDatabaseFromBackupTimestampDetails.getDeserializedJsonObj(
            <model.CreateAutonomousDatabaseFromBackupTimestampDetails>(<object>jsonObj),
            true
          );
        case "CROSS_REGION_DATAGUARD":
          return model.CreateCrossRegionAutonomousDatabaseDataGuardDetails.getDeserializedJsonObj(
            <model.CreateCrossRegionAutonomousDatabaseDataGuardDetails>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.CreateAutonomousDatabaseDetails.getDeserializedJsonObj(
            <model.CreateAutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.source);
      }
    }
    return jsonObj;
  }
}
