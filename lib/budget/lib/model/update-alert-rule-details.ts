/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts.
 * OpenAPI spec version: 20190111
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
 * The update alert rule details.
 */
export interface UpdateAlertRuleDetails {
  /**
   * The name of the alert rule.
   */
  "displayName"?: string;
  /**
   * Type of alert. Valid values are ACTUAL (the alert will trigger based on actual usage) or
   * FORECAST (the alert will trigger based on predicted usage).
   *
   */
  "type"?: model.AlertType;
  /**
   * The threshold for triggering the alert expressed as a whole number or decimal value.
   * If thresholdType is ABSOLUTE, threshold can have at most 12 digits before the decimal point and up to 2 digits after the decimal point.
   * If thresholdType is PERCENTAGE, the maximum value is 10000 and can have up to 2 digits after the decimal point.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "threshold"?: number;
  /**
   * The type of threshold.
   */
  "thresholdType"?: model.ThresholdType;
  /**
   * The audience that will receive the alert when it triggers. If you need to clear out this value, please pass in an empty string instead of null.
   */
  "recipients"?: string;
  /**
   * The description of the alert rule
   */
  "description"?: string;
  /**
   * The message to be delivered to the recipients when alert is triggered
   */
  "message"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateAlertRuleDetails {
  export function getJsonObj(obj: UpdateAlertRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAlertRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
