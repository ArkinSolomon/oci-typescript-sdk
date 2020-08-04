/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
import { BlockchainPlatformClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class BlockchainPlatformWaiter {
  public constructor(
    private client: BlockchainPlatformClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forBlockchainPlatform till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBlockchainPlatformResponse | null (null in case of 404 response)
   */
  public async forBlockchainPlatform(
    request: serviceRequests.GetBlockchainPlatformRequest,
    ...targetStates: models.BlockchainPlatform.LifecycleState[]
  ): Promise<serviceResponses.GetBlockchainPlatformResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBlockchainPlatform(request),
      response => targetStates.exists(response.blockchainPlatform.lifecycleState),
      targetStates.includes(models.BlockchainPlatform.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forOsn till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOsnResponse
   */
  public async forOsn(
    request: serviceRequests.GetOsnRequest,
    ...targetStates: models.Osn.LifecycleState[]
  ): Promise<serviceResponses.GetOsnResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getOsn(request),
      response => targetStates.exists(response.osn.lifecycleState)
    );
  }

  /**
   * Waits forPeer till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPeerResponse
   */
  public async forPeer(
    request: serviceRequests.GetPeerRequest,
    ...targetStates: models.Peer.LifecycleState[]
  ): Promise<serviceResponses.GetPeerResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getPeer(request),
      response => targetStates.exists(response.peer.lifecycleState)
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
