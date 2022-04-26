/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Configration for a metric based horizontal scale-in policy.
 */
export interface MetricBasedHorizontalScaleInConfig {
  "metric"?: model.AutoScalePolicyMetricRule;
  /**
   * This value is the minimum number of nodes the cluster can be scaled-in to. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minNodeCount"?: number;
  /**
   * This value is the number of nodes to remove during a scale-in event. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "stepSize"?: number;
}

export namespace MetricBasedHorizontalScaleInConfig {
  export function getJsonObj(obj: MetricBasedHorizontalScaleInConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "metric": obj.metric ? model.AutoScalePolicyMetricRule.getJsonObj(obj.metric) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MetricBasedHorizontalScaleInConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "metric": obj.metric
          ? model.AutoScalePolicyMetricRule.getDeserializedJsonObj(obj.metric)
          : undefined
      }
    };

    return jsonObj;
  }
}
