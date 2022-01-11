/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * An enum value indicating the operation being performed by the work request.
 **/
export enum WorkRequestOperationTypes {
  CreateWaasPolicy = "CREATE_WAAS_POLICY",
  UpdateWaasPolicy = "UPDATE_WAAS_POLICY",
  DeleteWaasPolicy = "DELETE_WAAS_POLICY",
  CreateHttpRedirect = "CREATE_HTTP_REDIRECT",
  UpdateHttpRedirect = "UPDATE_HTTP_REDIRECT",
  DeleteHttpRedirect = "DELETE_HTTP_REDIRECT",
  PurgeWaasPolicyCache = "PURGE_WAAS_POLICY_CACHE",
  CreateCustomProtectionRule = "CREATE_CUSTOM_PROTECTION_RULE",
  UpdateCustomProtectionRule = "UPDATE_CUSTOM_PROTECTION_RULE",
  DeleteCustomProtectionRule = "DELETE_CUSTOM_PROTECTION_RULE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace WorkRequestOperationTypes {
  export function getJsonObj(obj: WorkRequestOperationTypes): WorkRequestOperationTypes {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: WorkRequestOperationTypes
  ): WorkRequestOperationTypes {
    return obj;
  }
}
