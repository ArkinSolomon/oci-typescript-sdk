/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
 * Ipsec tunnels error details
 */
export interface IPSecConnectionTunnelErrorDetails {
  /**
   * unique id generated for each error report
   */
  "id": string;
  /**
   * unique code describes error type
   */
  "errorCode": string;
  /**
   * detailed description of the error
   */
  "errorDescription": string;
  /**
   * how to resolve the error
   */
  "solution": string;
  /**
   * link to oracle resources
   */
  "ociResourcesLink": string;
  /**
   * timestamp when error occurred.
   */
  "timestamp": Date;
}

export namespace IPSecConnectionTunnelErrorDetails {
  export function getJsonObj(obj: IPSecConnectionTunnelErrorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IPSecConnectionTunnelErrorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
