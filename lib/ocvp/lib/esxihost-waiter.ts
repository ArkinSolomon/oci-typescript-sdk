/**
 * Oracle Cloud VMware Solution API
 * Use this API to manage the Oracle Cloud VMware Solution.

 * OpenAPI spec version: 20200501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { EsxiHostClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class EsxiHostWaiter {
  public constructor(
    private client: EsxiHostClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forEsxiHost till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetEsxiHostResponse | null (null in case of 404 response)
   */
  public async forEsxiHost(
    request: serviceRequests.GetEsxiHostRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetEsxiHostResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getEsxiHost(request),
      response => targetStates.exists(response.esxiHost.lifecycleState),
      targetStates.includes(models.LifecycleStates.Deleted)
    );
  }
}
