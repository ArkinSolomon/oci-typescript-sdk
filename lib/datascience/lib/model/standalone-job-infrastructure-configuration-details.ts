/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The standalone job infrastructure configuration.
 */
export interface StandaloneJobInfrastructureConfigurationDetails
  extends model.JobInfrastructureConfigurationDetails {
  /**
   * The shape used to launch the job run instances.
   */
  "shapeName": string;
  /**
   * The subnet to create a secondary vnic in to attach to the instance running the job
   *
   */
  "subnetId": string;
  /**
   * The size of the block storage volume to attach to the instance running the job
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockStorageSizeInGBs": number;

  "jobInfrastructureType": string;
}

export namespace StandaloneJobInfrastructureConfigurationDetails {
  export function getJsonObj(
    obj: StandaloneJobInfrastructureConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobInfrastructureConfigurationDetails.getJsonObj(
            obj
          ) as StandaloneJobInfrastructureConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const jobInfrastructureType = "STANDALONE";
  export function getDeserializedJsonObj(
    obj: StandaloneJobInfrastructureConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobInfrastructureConfigurationDetails.getDeserializedJsonObj(
            obj
          ) as StandaloneJobInfrastructureConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
}
