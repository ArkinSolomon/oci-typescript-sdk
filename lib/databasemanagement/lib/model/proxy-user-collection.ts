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
 * A collection of proxy users for the current User.
 */
export interface ProxyUserCollection {
  /**
   * An array of User resources.
   */
  "items": Array<model.ProxyUserSummary>;
}

export namespace ProxyUserCollection {
  export function getJsonObj(obj: ProxyUserCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ProxyUserSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProxyUserCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ProxyUserSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
