/**
 * Work Requests API
 * Many of the API operations that you use to create and configure Compute resources do not take effect
immediately. In these cases, the operation spawns an asynchronous workflow to fulfill the request.
Work requests provide visibility into the status of these in-progress, long-running workflows.

For more information about work requests and the operations that spawn work requests, see
[Viewing the State of a Compute Work Request](/iaas/Content/Compute/Tasks/viewingworkrequestcompute.htm).

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A resource that is created or operated on by an asynchronous operation that is tracked by
 * a work request.
 *
 */
export interface WorkRequestResource {
  /**
   * The way in which this resource was affected by the operation that spawned the work
   * request.
   *
   */
  "actionType": WorkRequestResource.ActionType;
  /**
   * The resource type the work request affects.
   */
  "entityType": string;
  /**
   * An [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) or other unique identifier for the
   * resource.
   *
   */
  "identifier": string;
  /**
   * The URI path that you can use for a GET request to access the resource metadata.
   */
  "entityUri"?: string;
}

export namespace WorkRequestResource {
  export enum ActionType {
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED",
    Related = "RELATED",
    InProgress = "IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
