/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Details to create Rest data asset type.
 */
export interface CreateDataAssetFromRest extends model.CreateDataAssetDetails {
  /**
   * The base url of the rest server.
   */
  "baseUrl": string;
  /**
   * The manifest file content of the rest APIs.
   */
  "manifestFileContent": string;
  "defaultConnection":
    | model.CreateConnectionFromOracleSiebel
    | model.CreateConnectionFromAmazonS3
    | model.CreateConnectionFromBICC
    | model.CreateConnectionFromAtp
    | model.CreateConnectionFromHdfs
    | model.CreateConnectionFromMySqlHeatWave
    | model.CreateConnectionFromRestBasicAuth
    | model.CreateConnectionFromOracle
    | model.CreateConnectionFromOraclePeopleSoft
    | model.CreateConnectionFromOracleEbs
    | model.CreateConnectionFromMySQL
    | model.CreateConnectionFromJdbc
    | model.CreateConnectionFromBIP
    | model.CreateConnectionFromAdwc
    | model.CreateConnectionFromRestNoAuth
    | model.CreateConnectionFromObjectStorage
    | model.CreateConnectionFromLake;

  "modelType": string;
}

export namespace CreateDataAssetFromRest {
  export function getJsonObj(obj: CreateDataAssetFromRest, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getJsonObj(obj) as CreateDataAssetFromRest)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionDetails.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "REST_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: CreateDataAssetFromRest,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataAssetDetails.getDeserializedJsonObj(obj) as CreateDataAssetFromRest)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.CreateConnectionDetails.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
