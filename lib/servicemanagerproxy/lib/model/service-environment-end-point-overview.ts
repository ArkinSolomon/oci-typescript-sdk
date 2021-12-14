/**
 * Service Manager Proxy API
 * Use the Service Manager Proxy API to obtain information about SaaS environments provisioned by Service Manager. 
You can get information such as service types and service environment URLs.

 * OpenAPI spec version: 20210914
 * 
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
 * An overview of service environment endpoints.
 *
 */
export interface ServiceEnvironmentEndPointOverview {
  /**
   * Service environment endpoint type.
   */
  "environmentType": ServiceEnvironmentEndPointOverview.EnvironmentType;
  /**
   * Service environment instance URL.
   */
  "url": string;
  /**
   * Description of the environment link
   */
  "description"?: string;
}

export namespace ServiceEnvironmentEndPointOverview {
  export enum EnvironmentType {
    InstanceUrlProd = "INSTANCE_URL_PROD",
    InstanceUrlTest = "INSTANCE_URL_TEST",
    InstanceUrlDev = "INSTANCE_URL_DEV",
    Other = "OTHER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ServiceEnvironmentEndPointOverview): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ServiceEnvironmentEndPointOverview): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
