/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * The details required to update a private endpoint.
 *
 */
export interface UpdatePrivateEndpointDetails {
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly description. Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * A user-friendly name. It does not have to be unique. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * An array of DNS zone names.
   * Example: `[ \"app.examplecorp.com\", \"app.examplecorp2.com\" ]`
   *
   */
  "dnsZones"?: Array<string>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The maximum number of hosts to be accessed through the private endpoint. This value is used
   * to calculate the relevant CIDR block and should be a multiple of 256.  If the value is not a
   * multiple of 256, it is rounded up to the next multiple of 256. For example, 300 is rounded up
   * to 512.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxHostCount"?: number;
  /**
   * An array of network security group OCIDs.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * An array of fqdn/port pairs used to create private endpoint. Each object is a simple key-value pair with FQDN as key and port number as value.
   * [ { fqdn: \"scan1.oracle.com\", port: \"1521\"}, { fqdn: \"scan2.oracle.com\", port: \"1521\" } ]
   *
   */
  "scanDetails"?: Array<model.Scan>;
}

export namespace UpdatePrivateEndpointDetails {
  export function getJsonObj(obj: UpdatePrivateEndpointDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "scanDetails": obj.scanDetails
          ? obj.scanDetails.map(item => {
              return model.Scan.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdatePrivateEndpointDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "scanDetails": obj.scanDetails
          ? obj.scanDetails.map(item => {
              return model.Scan.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
