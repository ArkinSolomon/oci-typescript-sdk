/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
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

export interface UpdateTagDetails {
  /**
   * The description you assign to the tag during creation.
   */
  "description"?: string;
  /**
   * Whether the tag is retired.
   * See [Retiring Key Definitions and Namespace Definitions](https://docs.cloud.oracle.com/Content/Identity/Concepts/taggingoverview.htm#Retiring).
   *
   */
  "isRetired"?: boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Indicates whether the tag is enabled for cost tracking.
   *
   */
  "isCostTracking"?: boolean;
  "validator"?: model.DefaultTagDefinitionValidator | model.EnumTagDefinitionValidator;
}

export namespace UpdateTagDetails {
  export function getJsonObj(obj: UpdateTagDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseTagDefinitionValidator.getJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateTagDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseTagDefinitionValidator.getDeserializedJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
}
