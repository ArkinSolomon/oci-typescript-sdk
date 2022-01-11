/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * Possible Work Delivery states.
 **/
export enum WorkDeliveryStatus {
  Accepted = "ACCEPTED",
  InProgress = "IN_PROGRESS",
  Failed = "FAILED",
  Succeeded = "SUCCEEDED",
  Canceling = "CANCELING",
  Canceled = "CANCELED"
}

export namespace WorkDeliveryStatus {
  export function getJsonObj(obj: WorkDeliveryStatus): WorkDeliveryStatus {
    return obj;
  }
  export function getDeserializedJsonObj(obj: WorkDeliveryStatus): WorkDeliveryStatus {
    return obj;
  }
}
