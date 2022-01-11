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
 * A summary of the datatype, unit and related metadata of an individual row element of a query result row that is returned.
 *
 */
export interface QueryResultRowTypeSummary {
  /**
   * Datatype of the query result row element.
   *
   */
  "dataType"?: string;
  /**
   * Granular unit in which the query result row element's data is represented.
   *
   */
  "unit"?: string;
  /**
   * Alias name if an alias is used for the query result row element or an assigned display name from the query language
   * in some default cases.
   *
   */
  "displayName"?: string;
  /**
   * Actual show expression in the user typed query that produced this column.
   *
   */
  "expression"?: string;
  /**
   * A query result row type summary object that represents a nested table structure.
   *
   */
  "queryResultRowTypeSummaries"?: Array<model.QueryResultRowTypeSummary>;
}

export namespace QueryResultRowTypeSummary {
  export function getJsonObj(obj: QueryResultRowTypeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryResultRowTypeSummaries": obj.queryResultRowTypeSummaries
          ? obj.queryResultRowTypeSummaries.map(item => {
              return model.QueryResultRowTypeSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryResultRowTypeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryResultRowTypeSummaries": obj.queryResultRowTypeSummaries
          ? obj.queryResultRowTypeSummaries.map(item => {
              return model.QueryResultRowTypeSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
