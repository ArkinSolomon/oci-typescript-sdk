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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { ObjectStorageClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ObjectStorageWaiter {
  public constructor(
    private client: ObjectStorageClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
