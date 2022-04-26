/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations in Cloud Guard from any region.

 * OpenAPI spec version: 20200131
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
 * Sighting summary Definition.
 */
export interface SightingSummary {
  /**
   * Unique identifier for finding event
   */
  "id": string;
  /**
   * Compartment Id where the resource is created
   */
  "compartmentId": string;
  /**
   * Problem Id to which the Sighting is associated
   */
  "problemId"?: string;
  /**
   * Unique identifier for principal actor
   */
  "actorPrincipalId"?: string;
  /**
   * Name of the principal actor
   */
  "actorPrincipalName"?: string;
  /**
   * Type of the principal actor
   */
  "actorPrincipalType"?: string;
  /**
   * Unique identifier of the rule
   */
  "detectorRuleId": string;
  /**
   * ClassificationStatus of the sighting event
   */
  "classificationStatus": model.ClassificationStatus;
  /**
   * Identifier for the sighting type
   */
  "sightingType": string;
  /**
   * Name of the sighting type
   */
  "sightingTypeDisplayName": string;
  /**
   * Name of the Mitre att&ck tactic
   */
  "tacticName": string;
  /**
   * Name of the Mitre att&ck technique
   */
  "techniqueName": string;
  /**
   * Score for the sighting Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sightingScore": number;
  /**
   * Severity of the sighting
   */
  "severity": model.Severity;
  /**
   * Confidence of the sighting
   */
  "confidence": model.Confidence;
  /**
   * The date and time the sighting was first detected. Format defined by RFC3339.
   */
  "timeFirstDetected": Date;
  /**
   * The date and time the sighting was last detected. Format defined by RFC3339.
   */
  "timeLastDetected": Date;
  /**
   * Regions involved in the sighting
   */
  "regions": Array<string>;
}

export namespace SightingSummary {
  export function getJsonObj(obj: SightingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SightingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
