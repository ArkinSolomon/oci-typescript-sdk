/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Cleanup Exadata Fleet Update Action details.
 * For a 'DB' Collection, Cleanup Action will attempt to remove unused source DBHomes for a completed Maintenance Cycle.
 *
 */
export interface CleanupAction extends model.FsuAction {
  /**
   * OCID identifier for the Exadata Fleet Update Cycle the Action will be part of.
   *
   */
  "fsuCycleId": string;
  /**
   * OCID identifier for the Exadata Fleet Update Action.
   *
   */
  "relatedFsuActionId"?: string;
  "scheduleDetails"?: model.StartTimeScheduleDetails;
  "progress"?: model.FsuActionProgressDetails;

  "type": string;
}

export namespace CleanupAction {
  export function getJsonObj(obj: CleanupAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FsuAction.getJsonObj(obj) as CleanupAction)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? model.ScheduleDetails.getJsonObj(obj.scheduleDetails)
          : undefined,
        "progress": obj.progress
          ? model.FsuActionProgressDetails.getJsonObj(obj.progress)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "CLEANUP";
  export function getDeserializedJsonObj(obj: CleanupAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FsuAction.getDeserializedJsonObj(obj) as CleanupAction)),
      ...{
        "scheduleDetails": obj.scheduleDetails
          ? model.ScheduleDetails.getDeserializedJsonObj(obj.scheduleDetails)
          : undefined,
        "progress": obj.progress
          ? model.FsuActionProgressDetails.getDeserializedJsonObj(obj.progress)
          : undefined
      }
    };

    return jsonObj;
  }
}
