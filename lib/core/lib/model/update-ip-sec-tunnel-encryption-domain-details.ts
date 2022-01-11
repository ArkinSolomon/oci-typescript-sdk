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
 * Request to update a multi-encryption domain policy on the IPSec tunnel.
 * There can't be more than 50 security associations in use at one time. See [Encryption domain for policy-based
 * tunnels](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/ipsecencryptiondomains.htm#spi_policy_based_tunnel) for more.
 *
 */
export interface UpdateIPSecTunnelEncryptionDomainDetails {
  /**
   * Lists IPv4 or IPv6-enabled subnets in your Oracle tenancy.
   */
  "oracleTrafficSelector"?: Array<string>;
  /**
   * Lists IPv4 or IPv6-enabled subnets in your on-premises network.
   */
  "cpeTrafficSelector"?: Array<string>;
}

export namespace UpdateIPSecTunnelEncryptionDomainDetails {
  export function getJsonObj(obj: UpdateIPSecTunnelEncryptionDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateIPSecTunnelEncryptionDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
