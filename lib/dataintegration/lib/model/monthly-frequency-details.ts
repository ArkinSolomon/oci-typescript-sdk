/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Frequency Details model for monthly frequency.
 */
export interface MonthlyFrequencyDetails extends model.AbstractFrequencyDetails {
  /**
   * This hold the repeatability aspect of a schedule. i.e. in a monhtly frequency, a task can be scheduled for every month, once in two months, once in tree months etc. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "interval"?: number;
  "time"?: model.Time;
  /**
   * A list of days of the month to be scheduled. i.e. excute every 2nd,3rd, 10th of the month.
   */
  "days"?: Array<number>;

  "modelType": string;
}

export namespace MonthlyFrequencyDetails {
  export function getJsonObj(obj: MonthlyFrequencyDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFrequencyDetails.getJsonObj(obj) as MonthlyFrequencyDetails)),
      ...{
        "time": obj.time ? model.Time.getJsonObj(obj.time) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "MONTHLY";
  export function getDeserializedJsonObj(
    obj: MonthlyFrequencyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractFrequencyDetails.getDeserializedJsonObj(obj) as MonthlyFrequencyDetails)),
      ...{
        "time": obj.time ? model.Time.getDeserializedJsonObj(obj.time) : undefined
      }
    };

    return jsonObj;
  }
}
