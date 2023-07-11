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
 * The details to update the HDFS data asset connection.
 */
export interface UpdateConnectionFromHdfs extends model.UpdateConnectionDetails {
  /**
   * The HDFS principal.
   */
  "hdfsPrincipal": string;
  /**
   * The HDFS Data Node principal.
   */
  "dataNodePrincipal": string;
  /**
   * The HDFS Name Node principal.
   */
  "nameNodePrincipal": string;
  /**
   * HDFS Realm name.
   */
  "realm"?: string;
  /**
   * The HDFS Key Distribution Center.
   */
  "keyDistributionCenter"?: string;
  "keyTabContent"?: model.SensitiveAttribute;

  "modelType": string;
}

export namespace UpdateConnectionFromHdfs {
  export function getJsonObj(obj: UpdateConnectionFromHdfs, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateConnectionFromHdfs)),
      ...{
        "keyTabContent": obj.keyTabContent
          ? model.SensitiveAttribute.getJsonObj(obj.keyTabContent)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "HDFS_CONNECTION";
  export function getDeserializedJsonObj(
    obj: UpdateConnectionFromHdfs,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(obj) as UpdateConnectionFromHdfs)),
      ...{
        "keyTabContent": obj.keyTabContent
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.keyTabContent)
          : undefined
      }
    };

    return jsonObj;
  }
}
