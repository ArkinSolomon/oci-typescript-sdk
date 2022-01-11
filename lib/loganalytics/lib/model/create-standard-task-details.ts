/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Details for creating a scheduled task.
 * The client must fully specify the details.
 * Not supported for TaskType ACCELERATION.
 *
 */
export interface CreateStandardTaskDetails extends model.CreateScheduledTaskDetails {
  /**
   * Task type.
   */
  "taskType": model.TaskType;
  /**
   * Schedules, typically a single schedule.
   * Note there may only be a single schedule for SAVED_SEARCH and PURGE scheduled tasks.
   *
   */
  "schedules": Array<model.Schedule>;
  "action": model.PurgeAction | model.StreamAction;

  "kind": string;
}

export namespace CreateStandardTaskDetails {
  export function getJsonObj(obj: CreateStandardTaskDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateScheduledTaskDetails.getJsonObj(obj) as CreateStandardTaskDetails)),
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.Schedule.getJsonObj(item);
            })
          : undefined,
        "action": obj.action ? model.Action.getJsonObj(obj.action) : undefined
      }
    };

    return jsonObj;
  }
  export const kind = "STANDARD";
  export function getDeserializedJsonObj(
    obj: CreateStandardTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateScheduledTaskDetails.getDeserializedJsonObj(
            obj
          ) as CreateStandardTaskDetails)),
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.Schedule.getDeserializedJsonObj(item);
            })
          : undefined,
        "action": obj.action ? model.Action.getDeserializedJsonObj(obj.action) : undefined
      }
    };

    return jsonObj;
  }
}
