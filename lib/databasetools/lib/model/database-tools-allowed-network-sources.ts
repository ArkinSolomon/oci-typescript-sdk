/**
 * Database Tools
 * Database Tools APIs to manage Connections and Private Endpoints.
 * OpenAPI spec version: 20201005
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
 * Allow to restrict access to only requests that come from the specified public or virtual source IP addresses.
 *
 */
export interface DatabaseToolsAllowedNetworkSources {
  /**
   * A list of allowed public IPs and CIDR blocks.
   *
   */
  "publicSourceList"?: Array<string>;
  /**
   * A list of allowed VCN [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) and IP ranges pairs.
   * Example:`\"vcnId\": \"ocid1.vcn.oc1.iad.aaaaaaaaexampleuniqueID\", \"ipRanges\": [ \"129.213.39.0/24\" ]`
   *
   */
  "virtualSourceList"?: Array<model.DatabaseToolsVirtualSource>;
}

export namespace DatabaseToolsAllowedNetworkSources {
  export function getJsonObj(obj: DatabaseToolsAllowedNetworkSources): object {
    const jsonObj = {
      ...obj,
      ...{
        "virtualSourceList": obj.virtualSourceList
          ? obj.virtualSourceList.map(item => {
              return model.DatabaseToolsVirtualSource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsAllowedNetworkSources): object {
    const jsonObj = {
      ...obj,
      ...{
        "virtualSourceList": obj.virtualSourceList
          ? obj.virtualSourceList.map(item => {
              return model.DatabaseToolsVirtualSource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
