/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The properties that define a request to update a cluster.
 */
export interface UpdateClusterDetails {
  /**
   * The new name for the cluster. Avoid entering confidential information.
   */
  "name"?: string;
  /**
   * The version of Kubernetes to which the cluster masters should be upgraded.
   */
  "kubernetesVersion"?: string;
  "options"?: model.UpdateClusterOptionsDetails;
  /**
   * The image verification policy for signature validation. Once a policy is created and enabled with
   * one or more kms keys, the policy will ensure all images deployed has been signed with the key(s)
   * attached to the policy.
   *
   */
  "imagePolicyConfig"?: model.UpdateImagePolicyConfigDetails;
}

export namespace UpdateClusterDetails {
  export function getJsonObj(obj: UpdateClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "options": obj.options
          ? model.UpdateClusterOptionsDetails.getJsonObj(obj.options)
          : undefined,
        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.UpdateImagePolicyConfigDetails.getJsonObj(obj.imagePolicyConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
