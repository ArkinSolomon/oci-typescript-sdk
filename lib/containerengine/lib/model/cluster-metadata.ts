/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define meta data for a cluster.
 */
export interface ClusterMetadata {
  /**
   * The time the cluster was created.
   */
  "timeCreated"?: Date;
  /**
   * The user who created the cluster.
   */
  "createdByUserId"?: string;
  /**
   * The OCID of the work request which created the cluster.
   */
  "createdByWorkRequestId"?: string;
  /**
   * The time the cluster was deleted.
   */
  "timeDeleted"?: Date;
  /**
   * The user who deleted the cluster.
   */
  "deletedByUserId"?: string;
  /**
   * The OCID of the work request which deleted the cluster.
   */
  "deletedByWorkRequestId"?: string;
  /**
   * The time the cluster was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The user who updated the cluster.
   */
  "updatedByUserId"?: string;
  /**
   * The OCID of the work request which updated the cluster.
   */
  "updatedByWorkRequestId"?: string;
}

export namespace ClusterMetadata {
  export function getJsonObj(obj: ClusterMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ClusterMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
