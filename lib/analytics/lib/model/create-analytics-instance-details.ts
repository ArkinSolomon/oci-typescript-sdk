/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Input payload to create an Anaytics instance.
 *
 */
export interface CreateAnalyticsInstanceDetails {
  /**
   * The name of the Analytics instance. This name must be unique in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * Optional description.
   *
   */
  "description"?: string;
  /**
   * The OCID of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * Analytics feature set.
   *
   */
  "featureSet": model.FeatureSet;
  "capacity": model.Capacity;
  /**
   * The license used for the service.
   *
   */
  "licenseType": model.LicenseType;
  /**
   * Email address receiving notifications.
   *
   */
  "emailNotification"?: string;
  "networkEndpointDetails"?: model.PrivateEndpointDetails | model.PublicEndpointDetails;
  /**
   * IDCS access token identifying a stripe and service administrator user.
   *
   */
  "idcsAccessToken"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
}

export namespace CreateAnalyticsInstanceDetails {
  export function getJsonObj(obj: CreateAnalyticsInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getJsonObj(obj.capacity) : undefined,

        "networkEndpointDetails": obj.networkEndpointDetails
          ? model.NetworkEndpointDetails.getJsonObj(obj.networkEndpointDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAnalyticsInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getDeserializedJsonObj(obj.capacity) : undefined,

        "networkEndpointDetails": obj.networkEndpointDetails
          ? model.NetworkEndpointDetails.getDeserializedJsonObj(obj.networkEndpointDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
