/**
 *
 *
 * OpenAPI spec version: 20180115
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

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dns/PatchZoneRecords.ts.html |here} to see how to use PatchZoneRecordsRequest.
 */
export interface PatchZoneRecordsRequest extends common.BaseRequest {
  /**
   * The name or OCID of the target zone.
   */
  "zoneNameOrId": string;
  /**
   * The operations describing how to modify the collection of records.
   *
   */
  "patchZoneRecordsDetails": model.PatchZoneRecordsDetails;
  /**
   * The `If-Match` header field makes the request method conditional on the
   * existence of at least one current representation of the target resource,
   * when the field-value is `*`, or having a current representation of the
   * target resource that has an entity-tag matching a member of the list of
   * entity-tags provided in the field-value.
   *
   */
  "ifMatch"?: string;
  /**
   * The `If-Unmodified-Since` header field makes the request method
   * conditional on the selected representation's last modification date being
   * earlier than or equal to the date provided in the field-value.  This
   * field accomplishes the same purpose as If-Match for cases where the user
   * agent does not have an entity-tag for the representation.
   *
   */
  "ifUnmodifiedSince"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need
   * to contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Specifies to operate only on resources that have a matching DNS scope.
   *
   */
  "scope"?: model.Scope;
  /**
   * The OCID of the view the resource is associated with.
   */
  "viewId"?: string;
  /**
   * The OCID of the compartment the resource belongs to.
   */
  "compartmentId"?: string;
}
