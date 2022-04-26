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
 * Update details of an autoscaling policy.
 */
export interface UpdateAutoScalePolicyDetails {
  "policyType": string;
}

export namespace UpdateAutoScalePolicyDetails {
  export function getJsonObj(obj: UpdateAutoScalePolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "SCHEDULE_BASED_HORIZONTAL_SCALING_POLICY":
          return model.UpdateScheduleBasedHorizontalScalingPolicyDetails.getJsonObj(
            <model.UpdateScheduleBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "METRIC_BASED_VERTICAL_SCALING_POLICY":
          return model.UpdateMetricBasedVerticalScalingPolicyDetails.getJsonObj(
            <model.UpdateMetricBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "METRIC_BASED_HORIZONTAL_SCALING_POLICY":
          return model.UpdateMetricBasedHorizontalScalingPolicyDetails.getJsonObj(
            <model.UpdateMetricBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "SCHEDULE_BASED_VERTICAL_SCALING_POLICY":
          return model.UpdateScheduleBasedVerticalScalingPolicyDetails.getJsonObj(
            <model.UpdateScheduleBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAutoScalePolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "SCHEDULE_BASED_HORIZONTAL_SCALING_POLICY":
          return model.UpdateScheduleBasedHorizontalScalingPolicyDetails.getDeserializedJsonObj(
            <model.UpdateScheduleBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "METRIC_BASED_VERTICAL_SCALING_POLICY":
          return model.UpdateMetricBasedVerticalScalingPolicyDetails.getDeserializedJsonObj(
            <model.UpdateMetricBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "METRIC_BASED_HORIZONTAL_SCALING_POLICY":
          return model.UpdateMetricBasedHorizontalScalingPolicyDetails.getDeserializedJsonObj(
            <model.UpdateMetricBasedHorizontalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        case "SCHEDULE_BASED_VERTICAL_SCALING_POLICY":
          return model.UpdateScheduleBasedVerticalScalingPolicyDetails.getDeserializedJsonObj(
            <model.UpdateScheduleBasedVerticalScalingPolicyDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
}
