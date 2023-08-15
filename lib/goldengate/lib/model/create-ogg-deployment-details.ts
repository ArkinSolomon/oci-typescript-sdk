/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Deployment Data for creating an OggDeployment
 *
 */
export interface CreateOggDeploymentDetails {
  /**
   * The name given to the GoldenGate service deployment.
   * The name must be 1 to 32 characters long, must contain only alphanumeric characters and must start with a letter.
   *
   */
  "deploymentName": string;
  /**
   * The type of credential store for OGG.
   *
   */
  "credentialStore"?: model.CredentialStore;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Identity Domain when IAM credential store is used.
   *
   */
  "identityDomainId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Secret where the deployment password is stored.
   *
   */
  "passwordSecretId"?: string;
  /**
   * The GoldenGate deployment console username.
   *
   */
  "adminUsername"?: string;
  /**
   * The password associated with the GoldenGate deployment console username.
   * The password must be 8 to 30 characters long and must contain at least 1 uppercase, 1 lowercase, 1 numeric,
   * and 1 special character. Special characters such as '$', '^', or '?' are not allowed.
   * This field will be deprecated and replaced by \"passwordSecretId\".
   *
   */
  "adminPassword"?: string;
  /**
   * A PEM-encoded SSL certificate.
   *
   */
  "certificate"?: string;
  /**
   * A PEM-encoded private key.
   *
   */
  "key"?: string;
  /**
   * Version of OGG
   *
   */
  "oggVersion"?: string;
}

export namespace CreateOggDeploymentDetails {
  export function getJsonObj(obj: CreateOggDeploymentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOggDeploymentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
