/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Redeployment of the full pipeline of a previous deployment.
 */
export interface DeployPipelineRedeployment extends model.Deployment {
  /**
   * Specifies the OCID of the previous deployment to be redeployed.
   */
  "previousDeploymentId"?: string;

  "deploymentType": string;
}

export namespace DeployPipelineRedeployment {
  export function getJsonObj(obj: DeployPipelineRedeployment, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Deployment.getJsonObj(obj) as DeployPipelineRedeployment)),
      ...{}
    };

    return jsonObj;
  }
  export const deploymentType = "PIPELINE_REDEPLOYMENT";
  export function getDeserializedJsonObj(
    obj: DeployPipelineRedeployment,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Deployment.getDeserializedJsonObj(obj) as DeployPipelineRedeployment)),
      ...{}
    };

    return jsonObj;
  }
}
