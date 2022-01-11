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

export interface UpdateSecurityListDetails {
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Rules for allowing egress IP packets.
   */
  "egressSecurityRules"?: Array<model.EgressSecurityRule>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Rules for allowing ingress IP packets.
   */
  "ingressSecurityRules"?: Array<model.IngressSecurityRule>;
}

export namespace UpdateSecurityListDetails {
  export function getJsonObj(obj: UpdateSecurityListDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "egressSecurityRules": obj.egressSecurityRules
          ? obj.egressSecurityRules.map(item => {
              return model.EgressSecurityRule.getJsonObj(item);
            })
          : undefined,

        "ingressSecurityRules": obj.ingressSecurityRules
          ? obj.ingressSecurityRules.map(item => {
              return model.IngressSecurityRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSecurityListDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "egressSecurityRules": obj.egressSecurityRules
          ? obj.egressSecurityRules.map(item => {
              return model.EgressSecurityRule.getDeserializedJsonObj(item);
            })
          : undefined,

        "ingressSecurityRules": obj.ingressSecurityRules
          ? obj.ingressSecurityRules.map(item => {
              return model.IngressSecurityRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
