/**
 *
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface UpdateAnnouncementUserStatusRequest extends common.BaseRequest {
  /**
   * The OCID of the announcement.
   */
  "announcementId": string;
  /**
   * The information to use to update the announcement's read status.
   */
  "statusDetails": model.AnnouncementUserStatusDetails;
  /**
   * The locking version, used for optimistic concurrency control.
   */
  "ifMatch"?: string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the complete request ID.
   *
   */
  "opcRequestId"?: string;
}
