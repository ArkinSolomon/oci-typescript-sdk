/**
 * NetworkLoadBalancer API
 * This describes the network load balancer API.
 * OpenAPI spec version: 20200501
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
 * Possible operations.
 **/
export enum OperationType {
  CreateNetworkLoadBalancer = "CREATE_NETWORK_LOAD_BALANCER",
  UpdateNetworkLoadBalancer = "UPDATE_NETWORK_LOAD_BALANCER",
  DeleteNetworkLoadBalancer = "DELETE_NETWORK_LOAD_BALANCER",
  CreateBackend = "CREATE_BACKEND",
  UpdateBackend = "UPDATE_BACKEND",
  DeleteBackend = "DELETE_BACKEND",
  CreateListener = "CREATE_LISTENER",
  UpdateListener = "UPDATE_LISTENER",
  DeleteListener = "DELETE_LISTENER",
  CreateBackendset = "CREATE_BACKENDSET",
  UpdateBackendset = "UPDATE_BACKENDSET",
  DeleteBackendset = "DELETE_BACKENDSET",
  UpdateNsgs = "UPDATE_NSGS",
  UpdateHealthChecker = "UPDATE_HEALTH_CHECKER",
  ChangeCompartment = "CHANGE_COMPARTMENT",
  AttachNlbToPod = "ATTACH_NLB_TO_POD",
  DetachNlbFromPod = "DETACH_NLB_FROM_POD",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}
