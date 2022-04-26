/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
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
 * Rule that represents Request/Response Protection.
 * Only actions of the following types are allowed to be referenced in this rule:
 *  * CHECK
 *  * RETURN_HTTP_RESPONSE
 *
 */
export interface ProtectionRule extends model.WebAppFirewallPolicyRule {
  /**
   * An ordered list that references OCI-managed protection capabilities.
   * Referenced protection capabilities are not necessarily executed in order of appearance. Their execution order
   * is decided at runtime for improved performance.
   * The array cannot contain entries with the same pair of capability key and version more than once.
   *
   */
  "protectionCapabilities": Array<model.ProtectionCapability>;
  "protectionCapabilitySettings"?: model.ProtectionCapabilitySettings;
  /**
   * Enables/disables body inspection for this protection rule.
   * Only Protection Rules in RequestProtection can have this option enabled. Response body inspection will
   * be available at a later date.
   *
   */
  "isBodyInspectionEnabled"?: boolean;

  "type": string;
}

export namespace ProtectionRule {
  export function getJsonObj(obj: ProtectionRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WebAppFirewallPolicyRule.getJsonObj(obj) as ProtectionRule)),
      ...{
        "protectionCapabilities": obj.protectionCapabilities
          ? obj.protectionCapabilities.map(item => {
              return model.ProtectionCapability.getJsonObj(item);
            })
          : undefined,
        "protectionCapabilitySettings": obj.protectionCapabilitySettings
          ? model.ProtectionCapabilitySettings.getJsonObj(obj.protectionCapabilitySettings)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "PROTECTION";
  export function getDeserializedJsonObj(obj: ProtectionRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WebAppFirewallPolicyRule.getDeserializedJsonObj(obj) as ProtectionRule)),
      ...{
        "protectionCapabilities": obj.protectionCapabilities
          ? obj.protectionCapabilities.map(item => {
              return model.ProtectionCapability.getDeserializedJsonObj(item);
            })
          : undefined,
        "protectionCapabilitySettings": obj.protectionCapabilitySettings
          ? model.ProtectionCapabilitySettings.getDeserializedJsonObj(
              obj.protectionCapabilitySettings
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
