/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
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
 * Evaluated type of dimension value.
 *
 */
export interface JmesPathDimensionValue extends model.DimensionValueDetails {
  /**
   * The location to use for deriving the dimension value (evaluated).
   * The path must start with `logContent` in an acceptable notation style with supported [JMESPath selectors](https://jmespath.org/specification.html): expression with dot and index operator (`.` and `{@link #metricDataDetails(MetricDataDetailsRequest) metricDataDetails}.
   * The returned value depends on the results of evaluation.
   * If the evaluated value is valid, then the evaluated value is returned without double quotes. (Any front or trailing double quotes are trimmed before returning the value. For example, the evaluated value `\"compartmentId\"` is returned as `compartmentId`.)
   * If the evaluated value is invalid, then the returned value is `SCH_EVAL_INVALID_VALUE`.
   * If the evaluated value is empty, then the returned value is `SCH_EVAL_VALUE_EMPTY`.
   *
   */
  "path": string;

  "kind": string;
}

export namespace JmesPathDimensionValue {
  export function getJsonObj(obj: JmesPathDimensionValue, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DimensionValueDetails.getJsonObj(obj) as JmesPathDimensionValue)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "jmesPath";
  export function getDeserializedJsonObj(
    obj: JmesPathDimensionValue,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DimensionValueDetails.getDeserializedJsonObj(obj) as JmesPathDimensionValue)),
      ...{}
    };

    return jsonObj;
  }
}
