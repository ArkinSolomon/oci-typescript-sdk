/**
 * DataLabelingService API
 * A description of the DataLabelingService API
 * OpenAPI spec version: 20211001
 *
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
import { DataLabelingManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DataLabelingManagementWaiter {
  public constructor(
    private client: DataLabelingManagementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDataset till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatasetResponse | null (null in case of 404 response)
   */
  public async forDataset(
    request: serviceRequests.GetDatasetRequest,
    ...targetStates: models.Dataset.LifecycleState[]
  ): Promise<serviceResponses.GetDatasetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDataset(request),
      response => targetStates.includes(response.dataset.lifecycleState!),
      targetStates.includes(models.Dataset.LifecycleState.Deleted)
    );
  }

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
