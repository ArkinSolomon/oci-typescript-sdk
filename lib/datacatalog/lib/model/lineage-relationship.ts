/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Declares how two elements of object lineage are related.
 */
export interface LineageRelationship {
  /**
   * Object key of source lineage element.
   */
  "fromObjectKey"?: string;
  /**
   * Object key of target lineage element.
   */
  "toObjectKey"?: string;
  /**
   * Type of the relationship.
   */
  "relationshipType"?: string;
}

export namespace LineageRelationship {
  export function getJsonObj(obj: LineageRelationship): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LineageRelationship): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
