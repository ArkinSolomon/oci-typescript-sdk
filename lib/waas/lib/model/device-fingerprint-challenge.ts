/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The device fingerprint challenge settings. The device fingerprint challenge generates hashed signatures of both virtual and real browsers to identify and block malicious bots.
 */
export interface DeviceFingerprintChallenge {
  /**
   * Enables or disables the device fingerprint challenge Web Application Firewall feature.
   */
  "isEnabled": boolean;
  /**
   * The action to take on requests from detected bots. If unspecified, defaults to `DETECT`.
   */
  "action"?: DeviceFingerprintChallenge.Action;
  /**
   * The number of failed requests allowed before taking action. If unspecified, defaults to `10`.
   */
  "failureThreshold"?: number;
  /**
   * The number of seconds between challenges for the same IP address. If unspecified, defaults to `60`.
   */
  "actionExpirationInSeconds"?: number;
  /**
   * The number of seconds before the failure threshold resets. If unspecified, defaults to `60`.
   */
  "failureThresholdExpirationInSeconds"?: number;
  /**
   * The maximum number of IP addresses permitted with the same device fingerprint. If unspecified, defaults to `20`.
   */
  "maxAddressCount"?: number;
  /**
   * The number of seconds before the maximum addresses count resets. If unspecified, defaults to `60`.
   */
  "maxAddressCountExpirationInSeconds"?: number;
  "challengeSettings"?: model.BlockChallengeSettings;
}

export namespace DeviceFingerprintChallenge {
  export enum Action {
    Detect = "DETECT",
    Block = "BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DeviceFingerprintChallenge): object {
    const jsonObj = {
      ...obj,
      ...{
        "challengeSettings": obj.challengeSettings
          ? model.BlockChallengeSettings.getJsonObj(obj.challengeSettings)
          : undefined
      }
    };

    return jsonObj;
  }
}
