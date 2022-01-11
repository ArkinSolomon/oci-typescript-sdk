/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Reserved for future use.
 */
export interface CreateLimitItemDetails extends model.CreateItemDetails {
  /**
   * The limit of the resource currently available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "currentLimit"?: number;
  /**
   * The current usage of the resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "currentUsage"?: number;
  /**
   * Reserved for future use. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "requestedLimit"?: number;
  /**
   * The current status of the request.
   */
  "limitStatus"?: CreateLimitItemDetails.LimitStatus;

  "type": string;
}

export namespace CreateLimitItemDetails {
  export enum LimitStatus {
    Approved = "APPROVED",
    PartiallyApproved = "PARTIALLY_APPROVED",
    NotApproved = "NOT_APPROVED"
  }

  export function getJsonObj(obj: CreateLimitItemDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateItemDetails.getJsonObj(obj) as CreateLimitItemDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "limit";
  export function getDeserializedJsonObj(
    obj: CreateLimitItemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateItemDetails.getDeserializedJsonObj(obj) as CreateLimitItemDetails)),
      ...{}
    };

    return jsonObj;
  }
}
