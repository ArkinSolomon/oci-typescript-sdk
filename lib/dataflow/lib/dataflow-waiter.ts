/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DataFlowClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DataFlowWaiter {
  public constructor(
    private client: DataFlowClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forApplication till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetApplicationResponse | null (null in case of 404 response)
   */
  public async forApplication(
    request: serviceRequests.GetApplicationRequest,
    ...targetStates: models.ApplicationLifecycleState[]
  ): Promise<serviceResponses.GetApplicationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getApplication(request),
      response => targetStates.includes(response.application.lifecycleState!),
      targetStates.includes(models.ApplicationLifecycleState.Deleted)
    );
  }

  /**
   * Waits forPool till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPoolResponse | null (null in case of 404 response)
   */
  public async forPool(
    request: serviceRequests.GetPoolRequest,
    ...targetStates: models.PoolLifecycleState[]
  ): Promise<serviceResponses.GetPoolResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getPool(request),
      response => targetStates.includes(response.pool.lifecycleState!),
      targetStates.includes(models.PoolLifecycleState.Deleted)
    );
  }

  /**
   * Waits forPrivateEndpoint till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPrivateEndpointResponse | null (null in case of 404 response)
   */
  public async forPrivateEndpoint(
    request: serviceRequests.GetPrivateEndpointRequest,
    ...targetStates: models.PrivateEndpointLifecycleState[]
  ): Promise<serviceResponses.GetPrivateEndpointResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getPrivateEndpoint(request),
      response => targetStates.includes(response.privateEndpoint.lifecycleState!),
      targetStates.includes(models.PrivateEndpointLifecycleState.Deleted)
    );
  }

  /**
   * Waits forRun till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRunResponse
   */
  public async forRun(
    request: serviceRequests.GetRunRequest,
    ...targetStates: models.RunLifecycleState[]
  ): Promise<serviceResponses.GetRunResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getRun(request),
      response => targetStates.includes(response.run.lifecycleState!)
    );
  }

  /**
   * Waits forStatement till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetStatementResponse
   */
  public async forStatement(
    request: serviceRequests.GetStatementRequest,
    ...targetStates: models.StatementLifecycleState[]
  ): Promise<serviceResponses.GetStatementResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getStatement(request),
      response => targetStates.includes(response.statement.lifecycleState!)
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
