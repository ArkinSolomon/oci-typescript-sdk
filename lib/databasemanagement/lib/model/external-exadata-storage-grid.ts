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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of the Exadata storage server grid.
 */
export interface ExternalExadataStorageGrid extends model.DbmResource {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * The number of Exadata storage servers in the Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "serverCount"?: number;
  /**
   * A list of monitored Exadata storage servers.
   */
  "storageServers"?: Array<model.ExternalExadataStorageServerSummary>;

  "resourceType": string;
}

export namespace ExternalExadataStorageGrid {
  export function getJsonObj(obj: ExternalExadataStorageGrid, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getJsonObj(obj) as ExternalExadataStorageGrid)),
      ...{
        "storageServers": obj.storageServers
          ? obj.storageServers.map(item => {
              return model.ExternalExadataStorageServerSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const resourceType = "STORAGE_GRID";
  export function getDeserializedJsonObj(
    obj: ExternalExadataStorageGrid,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getDeserializedJsonObj(obj) as ExternalExadataStorageGrid)),
      ...{
        "storageServers": obj.storageServers
          ? obj.storageServers.map(item => {
              return model.ExternalExadataStorageServerSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
