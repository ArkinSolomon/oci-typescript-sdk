/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).
Use the table of contents and search tool to explore the  OS Management Hub API.

 * OpenAPI spec version: 20220901
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
 * Possible scheduled job operation types.
 **/
export enum OperationTypes {
  InstallPackages = "INSTALL_PACKAGES",
  UpdatePackages = "UPDATE_PACKAGES",
  RemovePackages = "REMOVE_PACKAGES",
  UpdateAll = "UPDATE_ALL",
  UpdateSecurity = "UPDATE_SECURITY",
  UpdateBugfix = "UPDATE_BUGFIX",
  UpdateEnhancement = "UPDATE_ENHANCEMENT",
  UpdateOther = "UPDATE_OTHER",
  UpdateKspliceUserspace = "UPDATE_KSPLICE_USERSPACE",
  UpdateKspliceKernel = "UPDATE_KSPLICE_KERNEL",
  ManageModuleStreams = "MANAGE_MODULE_STREAMS",
  SwitchModuleStream = "SWITCH_MODULE_STREAM",
  AttachSoftwareSources = "ATTACH_SOFTWARE_SOURCES",
  DetachSoftwareSources = "DETACH_SOFTWARE_SOURCES",
  SyncManagementStationMirror = "SYNC_MANAGEMENT_STATION_MIRROR",
  PromoteLifecycle = "PROMOTE_LIFECYCLE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationTypes {
  export function getJsonObj(obj: OperationTypes): OperationTypes {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationTypes): OperationTypes {
    return obj;
  }
}
