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
 * Summary containing the metadata about the query result set.
 *
 */
export interface QueryResultMetadataSummary {
  /**
   * A collection of QueryResultRowTypeSummary objects that describe the type and properties of the individual row elements of the query rows
   * being returned.  The ith element in this list contains the QueryResultRowTypeSummary of the ith key value pair in the QueryResultRowData map.
   *
   */
  "queryResultRowTypeSummaries"?: Array<model.QueryResultRowTypeSummary>;
  /**
   * Source of the query result set (traces, spans, etc).
   *
   */
  "sourceName"?: string;
  /**
   * Columns or attributes of the query rows  which are group by values.  This is a list of ResultsGroupedBy summary objects,
   * and the list will contain as many elements as the attributes and aggregate functions in the group by clause in the select query.
   *
   */
  "queryResultsGroupedBy"?: Array<model.QueryResultsGroupedBySummary>;
  /**
   * Order by which the query results are organized.  This is a list of queryResultsOrderedBy summary objects, and the list
   * will contain more than one OrderedBy summary object, if the sort was multidimensional.
   *
   */
  "queryResultsOrderedBy"?: Array<model.QueryResultsOrderedBySummary>;
  /**
   * Interval for the time series function in minutes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeSeriesIntervalInMins"?: number;
}

export namespace QueryResultMetadataSummary {
  export function getJsonObj(obj: QueryResultMetadataSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryResultRowTypeSummaries": obj.queryResultRowTypeSummaries
          ? obj.queryResultRowTypeSummaries.map(item => {
              return model.QueryResultRowTypeSummary.getJsonObj(item);
            })
          : undefined,

        "queryResultsGroupedBy": obj.queryResultsGroupedBy
          ? obj.queryResultsGroupedBy.map(item => {
              return model.QueryResultsGroupedBySummary.getJsonObj(item);
            })
          : undefined,
        "queryResultsOrderedBy": obj.queryResultsOrderedBy
          ? obj.queryResultsOrderedBy.map(item => {
              return model.QueryResultsOrderedBySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryResultMetadataSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "queryResultRowTypeSummaries": obj.queryResultRowTypeSummaries
          ? obj.queryResultRowTypeSummaries.map(item => {
              return model.QueryResultRowTypeSummary.getDeserializedJsonObj(item);
            })
          : undefined,

        "queryResultsGroupedBy": obj.queryResultsGroupedBy
          ? obj.queryResultsGroupedBy.map(item => {
              return model.QueryResultsGroupedBySummary.getDeserializedJsonObj(item);
            })
          : undefined,
        "queryResultsOrderedBy": obj.queryResultsOrderedBy
          ? obj.queryResultsOrderedBy.map(item => {
              return model.QueryResultsOrderedBySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
