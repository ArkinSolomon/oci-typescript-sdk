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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Content types that the news report can handle.
 */
export interface NewsContentTypes {
  /**
   * Supported resources for capacity planning content type.
   */
  "capacityPlanningResources": Array<model.NewsContentTypesResource>;
}

export namespace NewsContentTypes {
  export function getJsonObj(obj: NewsContentTypes): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacityPlanningResources": obj.capacityPlanningResources
          ? obj.capacityPlanningResources.map(item => {
              return model.NewsContentTypesResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NewsContentTypes): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacityPlanningResources": obj.capacityPlanningResources
          ? obj.capacityPlanningResources.map(item => {
              return model.NewsContentTypesResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
