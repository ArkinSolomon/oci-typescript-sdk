/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details for updating a configuration source provider.
 *
 */
export interface UpdateConfigurationSourceProviderDetails {
  /**
   * Human-readable name of the configuration source provider. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Description of the configuration source provider. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "configSourceProviderType": string;
}

export namespace UpdateConfigurationSourceProviderDetails {
  export function getJsonObj(obj: UpdateConfigurationSourceProviderDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configSourceProviderType" in obj && obj.configSourceProviderType) {
      switch (obj.configSourceProviderType) {
        case "GITLAB_ACCESS_TOKEN":
          return model.UpdateGitlabAccessTokenConfigurationSourceProviderDetails.getJsonObj(
            <model.UpdateGitlabAccessTokenConfigurationSourceProviderDetails>(<object>jsonObj),
            true
          );
        case "GITHUB_ACCESS_TOKEN":
          return model.UpdateGithubAccessTokenConfigurationSourceProviderDetails.getJsonObj(
            <model.UpdateGithubAccessTokenConfigurationSourceProviderDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configSourceProviderType);
      }
    }
    return jsonObj;
  }
}
