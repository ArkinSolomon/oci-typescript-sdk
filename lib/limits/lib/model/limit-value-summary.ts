/**
 * Service limits APIs
 * APIs that interact with the resource limits of a specific resource type
 * OpenAPI spec version:
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The value of a specific resource limit.
 */
export interface LimitValueSummary {
  /**
   * The resource limit name. To be used for writing policies (in case of quotas) or other programmatic calls.
   *
   */
  "name"?: string;
  /**
   * The scope type of the limit.
   *
   */
  "scopeType"?: LimitValueSummary.ScopeType;
  /**
   * If present, the returned value is only specific to this availability domain.
   */
  "availabilityDomain"?: string;
  /**
   * The resource limit value.
   */
  "value"?: number;
}

export namespace LimitValueSummary {
  export enum ScopeType {
    Global = "GLOBAL",
    Region = "REGION",
    Ad = "AD",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LimitValueSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
