/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details for the report schedule.
 */
export interface ScheduleReportDetails {
  /**
   * The name of the report to be scheduled
   */
  "displayName"?: string;
  /**
    * Schedule to generate the report periodically in the specified format:
* <version-string>;<version-specific-schedule>
* <p>
Allowed version strings - \"v1\"
* v1's version specific schedule -<ss> <mm> <hh> <day-of-week> <day-of-month>
* Each of the above fields potentially introduce constraints. A workrequest is created only
* when clock time satisfies all the constraints. Constraints introduced:
* 1. seconds = <ss> (So, the allowed range for <ss> is [0, 59])
* 2. minutes = <mm> (So, the allowed range for <mm> is [0, 59])
* 3. hours = <hh> (So, the allowed range for <hh> is [0, 23])
* 4. <day-of-week> can be either '*' (without quotes or a number between 1(Monday) and 7(Sunday))
* No constraint introduced when it is '*'. When not, day of week must equal the given value
* 5. <day-of-month> can be either '*' (without quotes or a number between 1 and 28)
* No constraint introduced when it is '*'. When not, day of month must equal the given value
* 
    */
  "schedule": string;
  /**
   * Specifies the format of report to be excel or pdf
   */
  "mimeType": ScheduleReportDetails.MimeType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment
   * in which the resource should be created.
   *
   */
  "compartmentId": string;
  "reportDetails": model.ScheduleAuditReportDetails;
}

export namespace ScheduleReportDetails {
  export enum MimeType {
    Pdf = "PDF",
    Xls = "XLS"
  }

  export function getJsonObj(obj: ScheduleReportDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "reportDetails": obj.reportDetails
          ? model.ReportDetails.getJsonObj(obj.reportDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduleReportDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "reportDetails": obj.reportDetails
          ? model.ReportDetails.getDeserializedJsonObj(obj.reportDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
