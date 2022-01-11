/**
 * Apm Traces API
 * API for APM Trace service. Use this API to query the Traces and associated Spans.

 * OpenAPI spec version: 20200630
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
 * A response containing a collection of query rows (selected attributes and aggregations) filtered, grouped and
 * sorted by the specified criteria from the query that is run, and the associated summary describing the corresponding
 * query result metadata.
 *
 */
export interface QueryResultResponse {
  "queryResultMetadataSummary": model.QueryResultMetadataSummary;
  /**
   * A collection of objects with each object representing an individual row of the query result set.  The total number of objects
   * returned in this collection correspond to the total number of rows returned by the actual query that is run against
   * the queried entity.
   *
   */
  "queryResultRows": Array<model.QueryResultRow>;
}

export namespace QueryResultResponse {
  export function getJsonObj(obj: QueryResultResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryResultMetadataSummary": obj.queryResultMetadataSummary
          ? model.QueryResultMetadataSummary.getJsonObj(obj.queryResultMetadataSummary)
          : undefined,
        "queryResultRows": obj.queryResultRows
          ? obj.queryResultRows.map(item => {
              return model.QueryResultRow.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryResultResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryResultMetadataSummary": obj.queryResultMetadataSummary
          ? model.QueryResultMetadataSummary.getDeserializedJsonObj(obj.queryResultMetadataSummary)
          : undefined,
        "queryResultRows": obj.queryResultRows
          ? obj.queryResultRows.map(item => {
              return model.QueryResultRow.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
