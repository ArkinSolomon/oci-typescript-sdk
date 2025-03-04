/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Target of the access policy. This can either be the source or the destination of the traffic.
 */
export interface AccessPolicyTargetDetails {
  "type": string;
}

export namespace AccessPolicyTargetDetails {
  export function getJsonObj(obj: AccessPolicyTargetDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "EXTERNAL_SERVICE":
          return model.ExternalServiceAccessPolicyTargetDetails.getJsonObj(
            <model.ExternalServiceAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        case "VIRTUAL_SERVICE":
          return model.VirtualServiceAccessPolicyTargetDetails.getJsonObj(
            <model.VirtualServiceAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        case "ALL_VIRTUAL_SERVICES":
          return model.AllVirtualServicesAccessPolicyTargetDetails.getJsonObj(
            <model.AllVirtualServicesAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        case "INGRESS_GATEWAY":
          return model.IngressGatewayAccessPolicyTargetDetails.getJsonObj(
            <model.IngressGatewayAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AccessPolicyTargetDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "EXTERNAL_SERVICE":
          return model.ExternalServiceAccessPolicyTargetDetails.getDeserializedJsonObj(
            <model.ExternalServiceAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        case "VIRTUAL_SERVICE":
          return model.VirtualServiceAccessPolicyTargetDetails.getDeserializedJsonObj(
            <model.VirtualServiceAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        case "ALL_VIRTUAL_SERVICES":
          return model.AllVirtualServicesAccessPolicyTargetDetails.getDeserializedJsonObj(
            <model.AllVirtualServicesAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        case "INGRESS_GATEWAY":
          return model.IngressGatewayAccessPolicyTargetDetails.getDeserializedJsonObj(
            <model.IngressGatewayAccessPolicyTargetDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
