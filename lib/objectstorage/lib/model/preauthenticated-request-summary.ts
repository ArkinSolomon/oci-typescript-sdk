/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Get summary information about pre-authenticated requests.
 *
 */
export interface PreauthenticatedRequestSummary {
  /**
   * The unique identifier to use when directly addressing the pre-authenticated request.
   */
  "id": string;
  /**
   * The user-provided name of the pre-authenticated request.
   */
  "name": string;
  /**
   * The name of object that is being granted access to by the pre-authenticated request. This can be null and if it is,
   * the pre-authenticated request grants access to the entire bucket.
   *
   */
  "objectName"?: string;
  /**
   * Specifies whether a list operation is allowed on a PAR with accessType \"AnyObjectRead\" or \"AnyObjectReadWrite\".
   * Deny: Prevents the user from performing a list operation.
   * ListObjects: Authorizes the user to perform a list operation.
   *
   */
  "bucketListingAction"?: string;
  /**
   * The operation that can be performed on this resource.
   */
  "accessType": PreauthenticatedRequestSummary.AccessType;
  /**
   * The expiration date for the pre-authenticated request as per [RFC 3339](https://tools.ietf.org/html/rfc3339). After this date the pre-authenticated request will no longer be valid.
   *
   */
  "timeExpires": Date;
  /**
   * The date when the pre-authenticated request was created as per [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
}

export namespace PreauthenticatedRequestSummary {
  export enum AccessType {
    ObjectRead = "ObjectRead",
    ObjectWrite = "ObjectWrite",
    ObjectReadWrite = "ObjectReadWrite",
    AnyObjectWrite = "AnyObjectWrite",
    AnyObjectRead = "AnyObjectRead",
    AnyObjectReadWrite = "AnyObjectReadWrite",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PreauthenticatedRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
