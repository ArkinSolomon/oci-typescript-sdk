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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of a tablespace.
 */
export interface Tablespace {
  /**
   * The name of the tablespace.
   */
  "name": string;
  /**
   * The type of tablespace.
   */
  "type": Tablespace.Type;
  /**
   * The status of the tablespace.
   */
  "status"?: Tablespace.Status;
  /**
   * The tablespace block size. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockSizeBytes"?: number;
  /**
   * The default logging attribute.
   */
  "logging"?: Tablespace.Logging;
  /**
   * Indicates whether the tablespace is under Force Logging mode.
   */
  "isForceLogging"?: boolean;
  /**
   * Indicates whether the extents in the tablespace are Locally managed or Dictionary managed.
   */
  "extentManagement"?: Tablespace.ExtentManagement;
  /**
   * The type of extent allocation in effect for the tablespace.
   */
  "allocationType"?: Tablespace.AllocationType;
  /**
   * Indicates whether the tablespace is plugged in.
   */
  "isPluggedIn"?: boolean;
  /**
   * Indicates whether the free and used segment space in the tablespace is managed using free lists (MANUAL) or bitmaps (AUTO).
   */
  "segmentSpaceManagement"?: Tablespace.SegmentSpaceManagement;
  /**
   * Indicates whether default table compression is enabled or disabled.
   */
  "defaultTableCompression"?: Tablespace.DefaultTableCompression;
  /**
   * Indicates whether undo retention guarantee is enabled for the tablespace.
   */
  "retention"?: Tablespace.Retention;
  /**
   * Indicates whether the tablespace is a Bigfile tablespace or a Smallfile tablespace.
   */
  "isBigfile"?: boolean;
  /**
   * Indicates whether predicates are evaluated by Host or by Storage.
   */
  "predicateEvaluation"?: Tablespace.PredicateEvaluation;
  /**
   * Indicates whether the tablespace is encrypted.
   */
  "isEncrypted"?: boolean;
  /**
   * The operation type for which default compression is enabled.
   */
  "compressFor"?: Tablespace.CompressFor;
  /**
   * Indicates whether the In-Memory Column Store (IM column store) is by default enabled or disabled for tables in the tablespace.
   */
  "defaultInMemory"?: Tablespace.DefaultInMemory;
  /**
   * Indicates the default priority for In-Memory Column Store (IM column store) population for the tablespace.
   */
  "defaultInMemoryPriority"?: Tablespace.DefaultInMemoryPriority;
  /**
   * Indicates how the IM column store is distributed by default for the tablespace in an Oracle Real Application Clusters (Oracle RAC) environment.
   */
  "defaultInMemoryDistribute"?: Tablespace.DefaultInMemoryDistribute;
  /**
   * Indicates the default compression level for the IM column store for the tablespace.
   */
  "defaultInMemoryCompression"?: Tablespace.DefaultInMemoryCompression;
  /**
   * Indicates the duplicate setting for the IM column store in an Oracle RAC environment.
   */
  "defaultInMemoryDuplicate"?: Tablespace.DefaultInMemoryDuplicate;
  /**
   * Indicates whether the tablespace is for shared tablespace, or for local temporary tablespace for leaf (read-only) instances, or for local temporary tablespace for all instance types.
   */
  "shared"?: Tablespace.Shared;
  /**
   * Indicates whether default index compression is enabled or disabled.
   */
  "defaultIndexCompression"?: Tablespace.DefaultIndexCompression;
  /**
   * The operation type for which default index compression is enabled.
   */
  "indexCompressFor"?: Tablespace.IndexCompressFor;
  /**
   * This specifies the default value for the CELLMEMORY attribute that tables created in the tablespace will inherit unless the behavior is overridden explicitly. This column is intended for use with Oracle Exadata.
   */
  "defaultCellMemory"?: string;
  /**
   * Indicates how the IM column store is populated on various instances by default for the tablespace.
   */
  "defaultInMemoryService"?: Tablespace.DefaultInMemoryService;
  /**
   * Indicates the service name for the service on which the IM column store should be populated by default for the tablespace. This column has a value only when the corresponding DEF_INMEMORY_SERVICE is USER_DEFINED. In all other cases, this column is null.
   */
  "defaultInMemoryServiceName"?: string;
  /**
   * The lost write protection setting for the tablespace.
   */
  "lostWriteProtect"?: Tablespace.LostWriteProtect;
  /**
   * Indicates whether this is a chunk tablespace.
   */
  "isChunkTablespace"?: boolean;
  /**
   * The temporary tablespace group.
   */
  "tempGroup"?: string;
  /**
   * The maximum tablespace size in KB. If the tablespace contains any data files with Autoextend enabled, then this column displays the amount of underlying free storage space for the tablespace. For example, if the current tablespace size is 1 GB, the combined maximum size of all its data files is 32 GB, and its underlying storage (for example, ASM or file system storage) has 20 GB of free space, then this column will have a value of approximately 20 GB. If the tablespace contains only data files with autoextend disabled, then this column displays the allocated space for the entire tablespace, that is, the combined size of all data files in the tablespace. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxSizeKB"?: number;
  /**
   * The allocated tablespace size in KB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "allocatedSizeKB"?: number;
  /**
   * The size of the tablespace available for user data in KB. The difference between tablespace size and user data size is used for storing metadata. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "userSizeKB"?: number;
  /**
   * The free space available in the tablespace in KB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "freeSpaceKB"?: number;
  /**
   * The total space used by the tablespace in KB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedSpaceKB"?: number;
  /**
   * The percentage of used space out of the maximum available space in the tablespace. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedPercentAvailable"?: number;
  /**
   * The percentage of used space out of the total allocated space in the tablespace. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedPercentAllocated"?: number;
  /**
   * Indicates whether this is the default tablespace.
   */
  "isDefault"?: boolean;
  /**
   * A list of the data files associated with the tablespace.
   */
  "datafiles"?: Array<model.Datafile>;
}

export namespace Tablespace {
  export enum Type {
    Undo = "UNDO",
    LostWriteProtection = "LOST_WRITE_PROTECTION",
    Permanent = "PERMANENT",
    Temporary = "TEMPORARY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Online = "ONLINE",
    Offline = "OFFLINE",
    ReadOnly = "READ_ONLY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Logging {
    Logging = "LOGGING",
    Nologging = "NOLOGGING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExtentManagement {
    Local = "LOCAL",
    Dictionary = "DICTIONARY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AllocationType {
    System = "SYSTEM",
    Uniform = "UNIFORM",
    User = "USER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SegmentSpaceManagement {
    Manual = "MANUAL",
    Auto = "AUTO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultTableCompression {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Retention {
    Guarantee = "GUARANTEE",
    Noguarantee = "NOGUARANTEE",
    NotApply = "NOT_APPLY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PredicateEvaluation {
    Host = "HOST",
    Storage = "STORAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum CompressFor {
    Basic = "BASIC",
    Advanced = "ADVANCED",
    QueryLow = "QUERY_LOW",
    QueryHigh = "QUERY_HIGH",
    ArchiveLow = "ARCHIVE_LOW",
    ArchiveHigh = "ARCHIVE_HIGH",
    DirectLoadOnly = "DIRECT_LOAD_ONLY",
    ForAllOperations = "FOR_ALL_OPERATIONS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultInMemory {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultInMemoryPriority {
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultInMemoryDistribute {
    Auto = "AUTO",
    ByRowidRange = "BY_ROWID_RANGE",
    ByPartition = "BY_PARTITION",
    BySubpartition = "BY_SUBPARTITION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultInMemoryCompression {
    NoMemcompress = "NO_MEMCOMPRESS",
    ForDml = "FOR_DML",
    ForQueryLow = "FOR_QUERY_LOW",
    ForQueryHigh = "FOR_QUERY_HIGH",
    ForCapacityLow = "FOR_CAPACITY_LOW",
    ForCapacityHigh = "FOR_CAPACITY_HIGH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultInMemoryDuplicate {
    NoDuplicate = "NO_DUPLICATE",
    Duplicate = "DUPLICATE",
    DuplicateAll = "DUPLICATE_ALL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Shared {
    Shared = "SHARED",
    LocalOnLeaf = "LOCAL_ON_LEAF",
    LocalOnAll = "LOCAL_ON_ALL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultIndexCompression {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IndexCompressFor {
    AdvancedLow = "ADVANCED_LOW",
    AdvancedHigh = "ADVANCED_HIGH",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DefaultInMemoryService {
    Default = "DEFAULT",
    None = "NONE",
    All = "ALL",
    UserDefined = "USER_DEFINED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LostWriteProtect {
    Enabled = "ENABLED",
    ProtectOff = "PROTECT_OFF",
    Suspend = "SUSPEND",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Tablespace): object {
    const jsonObj = {
      ...obj,
      ...{
        "datafiles": obj.datafiles
          ? obj.datafiles.map(item => {
              return model.Datafile.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Tablespace): object {
    const jsonObj = {
      ...obj,
      ...{
        "datafiles": obj.datafiles
          ? obj.datafiles.map(item => {
              return model.Datafile.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
