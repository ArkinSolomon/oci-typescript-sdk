/**
 * Identity Service
 * API for the Identity Dataplane
 * OpenAPI spec version: v1
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

export interface ValidAuthenticateUserResult {
  /**
   * The tenant name.
   */
  "tenantInput": string;
  /**
   * The user name.
   */
  "userInput": string;
  /**
   * The resolved principal.
   */
  "resolvedPrincipal": model.AuthenticationPrincipal;
}

export namespace ValidAuthenticateUserResult {
  export function getJsonObj(obj: ValidAuthenticateUserResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "resolvedPrincipal": obj.resolvedPrincipal
          ? model.AuthenticationPrincipal.getJsonObj(obj.resolvedPrincipal)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ValidAuthenticateUserResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "resolvedPrincipal": obj.resolvedPrincipal
          ? model.AuthenticationPrincipal.getDeserializedJsonObj(obj.resolvedPrincipal)
          : undefined
      }
    };

    return jsonObj;
  }
}
