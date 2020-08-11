/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details about the ticket created.
 */
export interface Ticket {
  /**
   * Unique identifier for the ticket.
   */
  "ticketNumber"?: string;
  /**
   * The severity assigned to the ticket.
   */
  "severity": Ticket.Severity;
  /**
   * The list of resources associated with the ticket.
   */
  "resourceList"?: Array<model.Resource>;
  /**
   * The title of the ticket.
   */
  "title": string;
  /**
   * The description of the issue addressed in the ticket.
   */
  "description": string;
  /**
   * The time when the ticket was created, in milliseconds since epoch time.
   */
  "timeCreated"?: number;
  /**
   * The time when the ticket was updated, in milliseconds since epoch time.
   */
  "timeUpdated"?: number;
  /**
   * The current state of the ticket.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Additional information about the current `lifecycleState`.
   */
  "lifecycleDetails"?: model.LifecycleDetails;
}

export namespace Ticket {
  export enum Severity {
    Highest = "HIGHEST",
    High = "HIGH",
    Medium = "MEDIUM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Ticket): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceList": obj.resourceList
          ? obj.resourceList.map(item => {
              return model.Resource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
