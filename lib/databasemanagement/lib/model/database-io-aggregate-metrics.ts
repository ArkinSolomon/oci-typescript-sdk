/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The database Input/Output metric details.
 */
export interface DatabaseIOAggregateMetrics {
  /**
   * A list of the Input/Output Operations Per Second metrics grouped by IOType for a specific database.
   */
  "iops"?: Array<model.MetricDataPoint>;
  /**
   * A list of the IOThroughput metrics grouped for a specific database.
   */
  "ioThroughput"?: Array<model.MetricDataPoint>;
}

export namespace DatabaseIOAggregateMetrics {
  export function getJsonObj(obj: DatabaseIOAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "iops": obj.iops
          ? obj.iops.map(item => {
              return model.MetricDataPoint.getJsonObj(item);
            })
          : undefined,
        "ioThroughput": obj.ioThroughput
          ? obj.ioThroughput.map(item => {
              return model.MetricDataPoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseIOAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "iops": obj.iops
          ? obj.iops.map(item => {
              return model.MetricDataPoint.getDeserializedJsonObj(item);
            })
          : undefined,
        "ioThroughput": obj.ioThroughput
          ? obj.ioThroughput.map(item => {
              return model.MetricDataPoint.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
