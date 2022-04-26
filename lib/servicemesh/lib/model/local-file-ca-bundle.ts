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
 * CA Bundle from the filesystem.
 */
export interface LocalFileCaBundle extends model.CaBundle {
  /**
   * Name of the secret.
   * For Kubernetes this will be the name of an opaque Kubernetes secret with key ca.crt.
   * For other platforms the secret must be mounted at: /etc/oci/secrets/${secretName}/ca.crt
   *
   */
  "secretName"?: string;

  "type": string;
}

export namespace LocalFileCaBundle {
  export function getJsonObj(obj: LocalFileCaBundle, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.CaBundle.getJsonObj(obj) as LocalFileCaBundle)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "LOCAL_FILE";
  export function getDeserializedJsonObj(
    obj: LocalFileCaBundle,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CaBundle.getDeserializedJsonObj(obj) as LocalFileCaBundle)),
      ...{}
    };

    return jsonObj;
  }
}
