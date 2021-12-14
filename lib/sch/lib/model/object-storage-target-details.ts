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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The bucket used for the Object Storage target.
 * For configuration instructions, see
 * [To create a service connector](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/managingconnectors.htm#create).
 *
 */
export interface ObjectStorageTargetDetails extends model.TargetDetails {
  /**
   * The namespace.
   *
   */
  "namespace"?: string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   *
   */
  "bucketName": string;
  /**
   * The prefix of the objects. Avoid entering confidential information.
   *
   */
  "objectNamePrefix"?: string;
  /**
   * The batch rollover size in megabytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchRolloverSizeInMBs"?: number;
  /**
   * The batch rollover time in milliseconds.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchRolloverTimeInMs"?: number;

  "kind": string;
}

export namespace ObjectStorageTargetDetails {
  export function getJsonObj(obj: ObjectStorageTargetDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetDetails.getJsonObj(obj) as ObjectStorageTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "objectStorage";
  export function getDeserializedJsonObj(
    obj: ObjectStorageTargetDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetDetails.getDeserializedJsonObj(obj) as ObjectStorageTargetDetails)),
      ...{}
    };

    return jsonObj;
  }
}
