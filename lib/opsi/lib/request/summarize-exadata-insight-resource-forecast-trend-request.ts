/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/SummarizeExadataInsightResourceForecastTrend.ts.html |here} to see how to use SummarizeExadataInsightResourceForecastTrendRequest.
 */
export interface SummarizeExadataInsightResourceForecastTrendRequest extends common.BaseRequest {
  /**
   * Filter by resource.
   * Supported values are HOST , STORAGE_SERVER and DATABASE
   *
   */
  "resourceType": string;
  /**
   * Filter by resource metric.
   * Supported values are CPU , STORAGE, MEMORY, IO, IOPS, THROUGHPUT
   *
   */
  "resourceMetric": string;
  /**
   * [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of exadata insight resource.
   *
   */
  "exadataInsightId": string;
  /**
   * Specify time period in ISO 8601 format with respect to current time.
   * Default is last 30 days represented by P30D.
   * If timeInterval is specified, then timeIntervalStart and timeIntervalEnd will be ignored.
   * Examples  P90D (last 90 days), P4W (last 4 weeks), P2M (last 2 months), P1Y (last 12 months), . Maximum value allowed is 25 months prior to current time (P25M).
   *
   */
  "analysisTimeInterval"?: string;
  /**
   * Analysis start time in UTC in ISO 8601 format(inclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * The minimum allowed value is 2 years prior to the current day.
   * timeIntervalStart and timeIntervalEnd parameters are used together.
   * If analysisTimeInterval is specified, this parameter is ignored.
   *
   */
  "timeIntervalStart"?: Date;
  /**
   * Analysis end time in UTC in ISO 8601 format(exclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * timeIntervalStart and timeIntervalEnd are used together.
   * If timeIntervalEnd is not specified, current time is used as timeIntervalEnd.
   *
   */
  "timeIntervalEnd"?: Date;
  /**
   * Optional list of database insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "databaseInsightId"?: Array<string>;
  /**
   * Optional list of host insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "hostInsightId"?: Array<string>;
  /**
   * Optional storage server name on an exadata system.
   *
   */
  "storageServerName"?: Array<string>;
  /**
   * Filter by one or more Exadata types.
   * Possible value are DBMACHINE, EXACS, and EXACC.
   *
   */
  "exadataType"?: Array<string>;
  /**
   * Choose the type of statistic metric data to be used for forecasting.
   */
  "statistic"?: SummarizeExadataInsightResourceForecastTrendRequest.Statistic;
  /**
   * Number of days used for utilization forecast analysis.
   *
   */
  "forecastStartDay"?: number;
  /**
   * Number of days used for utilization forecast analysis.
   *
   */
  "forecastDays"?: number;
  /**
   * Choose algorithm model for the forecasting.
   * Possible values:
   *   - LINEAR: Uses linear regression algorithm for forecasting.
   *   - ML_AUTO: Automatically detects best algorithm to use for forecasting.
   *   - ML_NO_AUTO: Automatically detects seasonality of the data for forecasting using linear or seasonal algorithm.
   *
   */
  "forecastModel"?: SummarizeExadataInsightResourceForecastTrendRequest.ForecastModel;
  /**
   * Filter by one or more cdb name.
   *
   */
  "cdbName"?: Array<string>;
  /**
   * Filter by hostname.
   *
   */
  "hostName"?: Array<string>;
  /**
   * For list pagination. The maximum number of results per page, or items to
   * return in a paginated \"List\" call.
   * For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   * Example: `50`
   *
   */
  "limit"?: number;
  /**
   * This parameter is used to change data's confidence level, this data is ingested by the
   * forecast algorithm.
   * Confidence is the probability of an interval to contain the expected population parameter.
   * Manipulation of this value will lead to different results.
   * If not set, default confidence value is 95%.
   *
   */
  "confidence"?: number;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The order in which resource Forecast trend records are listed
   */
  "sortBy"?: SummarizeExadataInsightResourceForecastTrendRequest.SortBy;
  /**
   * For list pagination. The value of the `opc-next-page` response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace SummarizeExadataInsightResourceForecastTrendRequest {
  export enum Statistic {
    Avg = "AVG",
    Max = "MAX"
  }

  export enum ForecastModel {
    Linear = "LINEAR",
    MlAuto = "ML_AUTO",
    MlNoAuto = "ML_NO_AUTO"
  }

  export enum SortBy {
    Id = "id",
    Name = "name",
    DaysToReachCapacity = "daysToReachCapacity"
  }
}
