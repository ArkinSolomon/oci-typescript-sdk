/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20210930
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information to be updated.
 */
export interface UpdateVirtualDeploymentDetails {
  /**
    * Description of the resource. It can be changed after creation.
* Avoid entering confidential information.
* <p>
Example: `This is my new resource`
* 
    */
  "description"?: string;
  "serviceDiscovery"?: model.DnsServiceDiscoveryConfiguration;
  /**
   * The listeners for the virtual deployment.
   */
  "listeners"?: Array<model.VirtualDeploymentListener>;
  "accessLogging"?: model.AccessLoggingConfiguration;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateVirtualDeploymentDetails {
  export function getJsonObj(obj: UpdateVirtualDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceDiscovery": obj.serviceDiscovery
          ? model.ServiceDiscoveryConfiguration.getJsonObj(obj.serviceDiscovery)
          : undefined,
        "listeners": obj.listeners
          ? obj.listeners.map(item => {
              return model.VirtualDeploymentListener.getJsonObj(item);
            })
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getJsonObj(obj.accessLogging)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateVirtualDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceDiscovery": obj.serviceDiscovery
          ? model.ServiceDiscoveryConfiguration.getDeserializedJsonObj(obj.serviceDiscovery)
          : undefined,
        "listeners": obj.listeners
          ? obj.listeners.map(item => {
              return model.VirtualDeploymentListener.getDeserializedJsonObj(item);
            })
          : undefined,
        "accessLogging": obj.accessLogging
          ? model.AccessLoggingConfiguration.getDeserializedJsonObj(obj.accessLogging)
          : undefined
      }
    };

    return jsonObj;
  }
}
