/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Creation details for a configuration source based on the specified compartment.
 *
 */
export interface CreateCompartmentConfigSourceDetails extends model.CreateConfigSourceDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to use for creating the stack.
   * The new stack will include definitions for supported resource types in scope of the specified compartment OCID (tenancy level for root compartment, compartment level otherwise).
   *
   */
  "compartmentId": string;
  /**
   * The region to use for creating the stack. The new stack will include definitions for
   * supported resource types in this region.
   *
   */
  "region": string;
  /**
   * Filter for [services to use with Resource Discovery](https://www.terraform.io/docs/providers/oci/guides/resource_discovery.html#services).
   * For example, \"database\" limits resource discovery to resource types within the Database service.
   * The specified services must be in scope of the given compartment OCID (tenancy level for root compartment, compartment level otherwise).
   * If not specified, then all services at the scope of the given compartment OCID are used.
   *
   */
  "servicesToDiscover"?: Array<string>;

  "configSourceType": string;
}

export namespace CreateCompartmentConfigSourceDetails {
  export function getJsonObj(
    obj: CreateCompartmentConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getJsonObj(
            obj
          ) as CreateCompartmentConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceType = "COMPARTMENT_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: CreateCompartmentConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateCompartmentConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
