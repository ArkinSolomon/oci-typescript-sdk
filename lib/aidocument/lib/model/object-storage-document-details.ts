/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * A document in OCI Object Storage.
 */
export interface ObjectStorageDocumentDetails extends model.DocumentDetails {
  /**
   * The Object Storage namespace.
   */
  "namespaceName": string;
  /**
   * The Object Storage bucket name.
   */
  "bucketName": string;
  /**
   * The Object Storage object name.
   */
  "objectName": string;

  "source": string;
}

export namespace ObjectStorageDocumentDetails {
  export function getJsonObj(obj: ObjectStorageDocumentDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DocumentDetails.getJsonObj(obj) as ObjectStorageDocumentDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageDocumentDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DocumentDetails.getDeserializedJsonObj(obj) as ObjectStorageDocumentDetails)),
      ...{}
    };

    return jsonObj;
  }
}
