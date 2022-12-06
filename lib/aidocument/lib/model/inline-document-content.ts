/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * The content of an inline document.
 */
export interface InlineDocumentContent extends model.InputLocation {
  /**
   * Raw document data with Base64 encoding.
   */
  "data": string;

  "sourceType": string;
}

export namespace InlineDocumentContent {
  export function getJsonObj(obj: InlineDocumentContent, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.InputLocation.getJsonObj(obj) as InlineDocumentContent)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "INLINE_DOCUMENT_CONTENT";
  export function getDeserializedJsonObj(
    obj: InlineDocumentContent,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputLocation.getDeserializedJsonObj(obj) as InlineDocumentContent)),
      ...{}
    };

    return jsonObj;
  }
}
