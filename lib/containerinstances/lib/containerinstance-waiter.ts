/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
import { ContainerInstanceClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ContainerInstanceWaiter {
  public constructor(
    private client: ContainerInstanceClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forContainer till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetContainerResponse | null (null in case of 404 response)
   */
  public async forContainer(
    request: serviceRequests.GetContainerRequest,
    ...targetStates: models.Container.LifecycleState[]
  ): Promise<serviceResponses.GetContainerResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getContainer(request),
      response => targetStates.includes(response.container.lifecycleState!),
      targetStates.includes(models.Container.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forContainerInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetContainerInstanceResponse | null (null in case of 404 response)
   */
  public async forContainerInstance(
    request: serviceRequests.GetContainerInstanceRequest,
    ...targetStates: models.ContainerInstance.LifecycleState[]
  ): Promise<serviceResponses.GetContainerInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getContainerInstance(request),
      response => targetStates.includes(response.containerInstance.lifecycleState!),
      targetStates.includes(models.ContainerInstance.LifecycleState.Deleted)
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
