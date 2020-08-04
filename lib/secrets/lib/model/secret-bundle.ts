/**
 * Secrets
 * API for retrieving secrets from vaults.
 * OpenAPI spec version: 20190301
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The contents of the secret, properties of the secret (and secret version), and user-provided contextual metadata for the secret.
 *
 */
export interface SecretBundle {
  /**
   * The OCID of the secret.
   */
  "secretId": string;
  /**
   * The time when the secret bundle was created.
   */
  "timeCreated"?: Date;
  /**
   * The version number of the secret.
   */
  "versionNumber": number;
  /**
   * The name of the secret version. Labels are unique across the different versions of a particular secret.
   *
   */
  "versionName"?: string;
  "secretBundleContent"?: model.Base64SecretBundleContentDetails;
  /**
   * An optional property indicating when to delete the secret version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * An optional property indicating when the secret version will expire, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfExpiry"?: Date;
  /**
   * A list of possible rotation states for the secret version.
   */
  "stages"?: Array<SecretBundle.Stages>;
  /**
   * Customer-provided contextual metadata for the secret.
   *
   */
  "metadata"?: { [key: string]: any };
}

export namespace SecretBundle {
  export enum Stages {
    Current = "CURRENT",
    Pending = "PENDING",
    Latest = "LATEST",
    Previous = "PREVIOUS",
    Deprecated = "DEPRECATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecretBundle): object {
    const jsonObj = {
      ...obj,
      ...{
        "secretBundleContent": obj.secretBundleContent
          ? model.SecretBundleContentDetails.getJsonObj(obj.secretBundleContent)
          : undefined
      }
    };

    return jsonObj;
  }
}
