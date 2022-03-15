/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
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
 * A specific compute shape supported by the Oracle Cloud VMware Solution.
 *
 */
export interface SupportedHostShapeSummary {
  /**
   * The name of the supported compute shape.
   *
   */
  "name": string;
  /**
   * The operations where you can use the shape. The operations can be CREATE_SDDC or CREATE_ESXI_HOST.
   *
   */
  "supportedOperations": Array<SupportedHostShapeSummary.SupportedOperations>;
  /**
   * The family of the shape. ESXi hosts of one SDDC must have the same shape family.
   *
   */
  "shapeFamily": string;
  /**
   * The default OCPU count of the shape.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "defaultOcpuCount"?: number;
  /**
   * Support OCPU count of the shape.
   *
   */
  "supportedOcpuCount"?: Array<number>;
  /**
   * The supported SDDC types for the shape.
   *
   */
  "supportedSddcTypes"?: Array<SupportedHostShapeSummary.SupportedSddcTypes>;
  /**
   * Description of the shape.
   *
   */
  "description"?: string;
  /**
   * Indicates whether the shape supports shielded instances.
   */
  "isSupportShieldedInstances"?: boolean;
}

export namespace SupportedHostShapeSummary {
  export enum SupportedOperations {
    CreateSddc = "CREATE_SDDC",
    DeleteSddc = "DELETE_SDDC",
    CreateEsxiHost = "CREATE_ESXI_HOST",
    DeleteEsxiHost = "DELETE_ESXI_HOST",
    UpgradeHcx = "UPGRADE_HCX",
    DowngradeHcx = "DOWNGRADE_HCX",
    CancelDowngradeHcx = "CANCEL_DOWNGRADE_HCX",
    RefreshHcxLicenseStatus = "REFRESH_HCX_LICENSE_STATUS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SupportedSddcTypes {
    Production = "PRODUCTION",
    NonProduction = "NON_PRODUCTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SupportedHostShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SupportedHostShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
