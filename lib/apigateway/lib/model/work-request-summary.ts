/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * A summary of the work request.
 */
export interface WorkRequestSummary {
  /**
   * The type of the work request.
   */
  "operationType": string;
  /**
   * The status of the work request.
   */
  "status": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the resource.
   *
   */
  "workRequestId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the
   * resource is created.
   *
   */
  "compartmentId": string;
  /**
   * Percentage of the request completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the request was created, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the request was started, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the request was finished, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
