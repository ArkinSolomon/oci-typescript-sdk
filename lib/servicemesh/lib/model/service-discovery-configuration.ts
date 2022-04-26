/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
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
 * Service Discovery configuration for virtual deployments.
 */
export interface ServiceDiscoveryConfiguration {
  "type": string;
}

export namespace ServiceDiscoveryConfiguration {
  export function getJsonObj(obj: ServiceDiscoveryConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "DNS":
          return model.DnsServiceDiscoveryConfiguration.getJsonObj(
            <model.DnsServiceDiscoveryConfiguration>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ServiceDiscoveryConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    if ("type" in obj && obj.type) {
      switch (obj.type) {
        case "DNS":
          return model.DnsServiceDiscoveryConfiguration.getDeserializedJsonObj(
            <model.DnsServiceDiscoveryConfiguration>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}
