/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * Details of the link between two nodes.
 */
export interface Link {
  /**
   * ID of the link.
   */
  "id": string;
  /**
   * ID of the source node.
   */
  "source"?: string;
  /**
   * ID of the destination node.
   */
  "destination"?: string;
  /**
   * Number of times the link is repeated. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "repeatCount"?: number;
  /**
   * Average packet loss. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "forwardingLoss"?: number;
  /**
   * Difference of the packet response time between source and destination nodes, in milliseconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "delayInMilliseconds"?: number;
  /**
   * Minimum delay in milliseconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minDelayInMilliseconds"?: number;
  /**
   * Maximum delay in milliseconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDelayInMilliseconds"?: number;
  /**
   * List of all path ids of which this link is part of.
   */
  "paths"?: Array<string>;
}

export namespace Link {
  export function getJsonObj(obj: Link): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Link): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
