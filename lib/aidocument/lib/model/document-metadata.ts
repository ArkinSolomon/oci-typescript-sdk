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
 * The document information.
 */
export interface DocumentMetadata {
  /**
   * Teh number of pages in the document. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pageCount": number;
  /**
   * The result data format.
   */
  "mimeType": string;
}

export namespace DocumentMetadata {
  export function getJsonObj(obj: DocumentMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DocumentMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
