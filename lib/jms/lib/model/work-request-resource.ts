/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * A resource that is created or operated on by an asynchronous operation that is tracked by a work request.
 */
export interface WorkRequestResource {
  /**
   * The resource type affected by the work request.
   */
  "entityType": string;
  /**
   * The way in which this resource was affected by the operation that spawned the work request.
   * A resource being created, updated, or deleted will remain in the IN_PROGRESS state until
   * work is complete for that resource at which point it will transition to CREATED, UPDATED,
   * or DELETED, respectively.
   *
   */
  "actionType": model.ActionType;
  /**
   * An [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) or other unique identifier of the resource affected by the work request.
   */
  "identifier": string;
  /**
   * The URI path that the user can perform a GET operation to access the resource metadata.
   */
  "entityUri"?: string;
}

export namespace WorkRequestResource {
  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
