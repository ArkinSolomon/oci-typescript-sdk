/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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
* Used to validate the value set for a defined tag and contains the list of allowable `values`.
* <p>
You must specify at least one valid value in the `values` array. You can't have blank or
* or empty strings (`\"\"`). Duplicate values are not allowed.
* 
*/
export interface EnumTagDefinitionValidator extends model.BaseTagDefinitionValidator {
  /**
   * The list of allowed values for a definedTag value.
   *
   */
  "values"?: Array<string>;

  "validatorType": string;
}

export namespace EnumTagDefinitionValidator {
  export function getJsonObj(obj: EnumTagDefinitionValidator, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseTagDefinitionValidator.getJsonObj(obj) as EnumTagDefinitionValidator)),
      ...{}
    };

    return jsonObj;
  }
  export const validatorType = "ENUM";
  export function getDeserializedJsonObj(
    obj: EnumTagDefinitionValidator,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseTagDefinitionValidator.getDeserializedJsonObj(
            obj
          ) as EnumTagDefinitionValidator)),
      ...{}
    };

    return jsonObj;
  }
}
