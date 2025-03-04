/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Customer's Real Application Cluster (RAC)'s SCAN listener FQDN, port or list IPs and their ports.
 *
 */
export interface ScanListenerInfo {
  /**
   * FQDN of the customer's Real Application Cluster (RAC)'s SCAN listeners.
   *
   */
  "scanListenerFqdn"?: string;
  /**
   * A SCAN listener's IP of the customer's Real Application Cluster (RAC).
   *
   */
  "scanListenerIp"?: string;
  /**
   * The port that customer's Real Application Cluster (RAC)'s SCAN listeners are listening on.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPort"?: number;
}

export namespace ScanListenerInfo {
  export function getJsonObj(obj: ScanListenerInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScanListenerInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
