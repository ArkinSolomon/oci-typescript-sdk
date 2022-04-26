/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * The object storage location where usage/cost CSVs will be uploaded
 */
export interface ObjectStorageLocation extends model.ResultLocation {
  /**
   * The destination Object Store Region specified by customer
   */
  "region": string;
  /**
   * The namespace needed to determine object storage bucket.
   */
  "namespace": string;
  /**
   * The bucket name where usage/cost CSVs will be uploaded
   */
  "bucketName": string;

  "locationType": string;
}

export namespace ObjectStorageLocation {
  export function getJsonObj(obj: ObjectStorageLocation, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ResultLocation.getJsonObj(obj) as ObjectStorageLocation)),
      ...{}
    };

    return jsonObj;
  }
  export const locationType = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageLocation,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResultLocation.getDeserializedJsonObj(obj) as ObjectStorageLocation)),
      ...{}
    };

    return jsonObj;
  }
}
