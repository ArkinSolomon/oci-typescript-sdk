/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * A named set of path route rules. For more information, see
 * [Managing Request Routing](https://docs.cloud.oracle.com/Content/Balance/Tasks/managingrequest.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface PathRouteSet {
  /**
    * The unique name for this set of path route rules. Avoid entering confidential information.
* <p>
Example: `example_path_route_set`
* 
    */
  "name": string;
  /**
   * The set of path route rules.
   */
  "pathRoutes": Array<model.PathRoute>;
}

export namespace PathRouteSet {
  export function getJsonObj(obj: PathRouteSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "pathRoutes": obj.pathRoutes
          ? obj.pathRoutes.map(item => {
              return model.PathRoute.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PathRouteSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "pathRoutes": obj.pathRoutes
          ? obj.pathRoutes.map(item => {
              return model.PathRoute.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
