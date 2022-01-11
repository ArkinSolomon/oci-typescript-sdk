/**
 * Health Checks API
 * API for the Health Checks service. Use this API to manage endpoint probes and monitors.
For more information, see
[Overview of the Health Checks Service](/iaas/Content/HealthChecks/Concepts/healthchecks.htm).

 * OpenAPI spec version: 20180501
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
 * TCP connection results.  All durations are in milliseconds.
 */
export interface TcpConnection {
  /**
   * The connection IP address.
   */
  "address"?: string;
  /**
   * The port. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * Total connect duration, calculated using `connectEnd` minus `connectStart`. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "connectDuration"?: number;
  /**
   * The duration to secure the connection.  This value will be zero for
   * insecure connections.  Calculated using `connectEnd` minus `secureConnectionStart`.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "secureConnectDuration"?: number;
}

export namespace TcpConnection {
  export function getJsonObj(obj: TcpConnection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TcpConnection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
