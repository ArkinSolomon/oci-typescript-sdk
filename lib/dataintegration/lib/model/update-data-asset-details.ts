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
 * Properties used in data asset update operations.
 */
export interface UpdateDataAssetDetails {
  /**
   * Generated key that can be used in API calls to identify data asset.
   */
  "key": string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * The user-defined description of the data asset.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion": number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  /**
   * Additional properties for the data asset.
   */
  "assetProperties"?: { [key: string]: string };
  "registryMetadata"?: model.RegistryMetadata;

  "modelType": string;
}

export namespace UpdateDataAssetDetails {
  export function getJsonObj(obj: UpdateDataAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "REST_DATA_ASSET":
          return model.UpdateDataAssetFromRest.getJsonObj(
            <model.UpdateDataAssetFromRest>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_DATA_ASSET":
          return model.UpdateDataAssetFromMySqlHeatWave.getJsonObj(
            <model.UpdateDataAssetFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_DATA_ASSET":
          return model.UpdateDataAssetFromOracleEbs.getJsonObj(
            <model.UpdateDataAssetFromOracleEbs>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.UpdateDataAssetFromAdwc.getJsonObj(
            <model.UpdateDataAssetFromAdwc>(<object>jsonObj),
            true
          );
        case "HDFS_DATA_ASSET":
          return model.UpdateDataAssetFromHdfs.getJsonObj(
            <model.UpdateDataAssetFromHdfs>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_DATA_ASSET":
          return model.UpdateDataAssetFromOraclePeopleSoft.getJsonObj(
            <model.UpdateDataAssetFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.UpdateDataAssetFromObjectStorage.getJsonObj(
            <model.UpdateDataAssetFromObjectStorage>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_DATA_ASSET":
          return model.UpdateDataAssetFromAmazonS3.getJsonObj(
            <model.UpdateDataAssetFromAmazonS3>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.UpdateDataAssetFromMySQL.getJsonObj(
            <model.UpdateDataAssetFromMySQL>(<object>jsonObj),
            true
          );
        case "ORACLE_SIEBEL_DATA_ASSET":
          return model.UpdateDataAssetFromOracleSiebel.getJsonObj(
            <model.UpdateDataAssetFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "LAKE_DATA_ASSET":
          return model.UpdateDataAssetFromLake.getJsonObj(
            <model.UpdateDataAssetFromLake>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.UpdateDataAssetFromAtp.getJsonObj(
            <model.UpdateDataAssetFromAtp>(<object>jsonObj),
            true
          );
        case "GENERIC_JDBC_DATA_ASSET":
          return model.UpdateDataAssetFromJdbc.getJsonObj(
            <model.UpdateDataAssetFromJdbc>(<object>jsonObj),
            true
          );
        case "FUSION_APP_DATA_ASSET":
          return model.UpdateDataAssetFromFusionApp.getJsonObj(
            <model.UpdateDataAssetFromFusionApp>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.UpdateDataAssetFromOracle.getJsonObj(
            <model.UpdateDataAssetFromOracle>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDataAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getDeserializedJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "REST_DATA_ASSET":
          return model.UpdateDataAssetFromRest.getDeserializedJsonObj(
            <model.UpdateDataAssetFromRest>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_DATA_ASSET":
          return model.UpdateDataAssetFromMySqlHeatWave.getDeserializedJsonObj(
            <model.UpdateDataAssetFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_DATA_ASSET":
          return model.UpdateDataAssetFromOracleEbs.getDeserializedJsonObj(
            <model.UpdateDataAssetFromOracleEbs>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.UpdateDataAssetFromAdwc.getDeserializedJsonObj(
            <model.UpdateDataAssetFromAdwc>(<object>jsonObj),
            true
          );
        case "HDFS_DATA_ASSET":
          return model.UpdateDataAssetFromHdfs.getDeserializedJsonObj(
            <model.UpdateDataAssetFromHdfs>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_DATA_ASSET":
          return model.UpdateDataAssetFromOraclePeopleSoft.getDeserializedJsonObj(
            <model.UpdateDataAssetFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.UpdateDataAssetFromObjectStorage.getDeserializedJsonObj(
            <model.UpdateDataAssetFromObjectStorage>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_DATA_ASSET":
          return model.UpdateDataAssetFromAmazonS3.getDeserializedJsonObj(
            <model.UpdateDataAssetFromAmazonS3>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.UpdateDataAssetFromMySQL.getDeserializedJsonObj(
            <model.UpdateDataAssetFromMySQL>(<object>jsonObj),
            true
          );
        case "ORACLE_SIEBEL_DATA_ASSET":
          return model.UpdateDataAssetFromOracleSiebel.getDeserializedJsonObj(
            <model.UpdateDataAssetFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "LAKE_DATA_ASSET":
          return model.UpdateDataAssetFromLake.getDeserializedJsonObj(
            <model.UpdateDataAssetFromLake>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.UpdateDataAssetFromAtp.getDeserializedJsonObj(
            <model.UpdateDataAssetFromAtp>(<object>jsonObj),
            true
          );
        case "GENERIC_JDBC_DATA_ASSET":
          return model.UpdateDataAssetFromJdbc.getDeserializedJsonObj(
            <model.UpdateDataAssetFromJdbc>(<object>jsonObj),
            true
          );
        case "FUSION_APP_DATA_ASSET":
          return model.UpdateDataAssetFromFusionApp.getDeserializedJsonObj(
            <model.UpdateDataAssetFromFusionApp>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.UpdateDataAssetFromOracle.getDeserializedJsonObj(
            <model.UpdateDataAssetFromOracle>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
