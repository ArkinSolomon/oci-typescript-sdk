/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
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
 * Optional. The tags specified in the profile override for a recommendation.
 *
 */
export interface TargetTags {
  /**
   * The list of tags specified in the current profile override.
   */
  "items": Array<model.TargetTag>;
}

export namespace TargetTags {
  export function getJsonObj(obj: TargetTags): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.TargetTag.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetTags): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.TargetTag.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
