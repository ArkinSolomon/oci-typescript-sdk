/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

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
 * Contains memory statistics.
 *
 */
export interface HostMemoryStatistics extends model.HostResourceStatistics {
  "freeMemory"?: number;
  "availableMemory"?: number;
  /**
   * Total number of huge pages.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePagesTotal"?: number;
  /**
   * Size of huge pages in megabytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePageSizeInMB"?: number;
  /**
   * Total number of available huge pages.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePagesFree"?: number;
  /**
   * Total number of huge pages which are used or reserved.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePagesReserved"?: number;
  "load"?: model.SummaryStatistics;

  "resourceName": string;
}

export namespace HostMemoryStatistics {
  export function getJsonObj(obj: HostMemoryStatistics, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostResourceStatistics.getJsonObj(obj) as HostMemoryStatistics)),
      ...{
        "load": obj.load ? model.SummaryStatistics.getJsonObj(obj.load) : undefined
      }
    };

    return jsonObj;
  }
  export const resourceName = "HOST_MEMORY_STATISTICS";
  export function getDeserializedJsonObj(
    obj: HostMemoryStatistics,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostResourceStatistics.getDeserializedJsonObj(obj) as HostMemoryStatistics)),
      ...{
        "load": obj.load ? model.SummaryStatistics.getDeserializedJsonObj(obj.load) : undefined
      }
    };

    return jsonObj;
  }
}
