/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * Allow customers to define DNS settings for containers. If this is not provided, the containers will use
 * the default DNS settings of the subnet.
 *
 */
export interface CreateContainerDnsConfigDetails {
  /**
   * IP address of a name server that the resolver should query, either an IPv4 address
   * (in dot notation), or an IPv6 address in colon (and possibly dot) notation. If null, we will use
   * nameservers from subnet dhcpDnsOptions.
   *
   */
  "nameservers"?: Array<string>;
  /**
   * Search list for host-name lookup. If null, we will use searches from subnet dhcpDnsOptios.
   */
  "searches"?: Array<string>;
  /**
   * Options allows certain internal resolver variables to be modified. Options are a list of objects in
   * https://man7.org/linux/man-pages/man5/resolv.conf.5.html. Examples: [\"ndots:n\", \"edns0\"]
   *
   */
  "options"?: Array<string>;
}

export namespace CreateContainerDnsConfigDetails {
  export function getJsonObj(obj: CreateContainerDnsConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateContainerDnsConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
