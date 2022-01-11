/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The details of the contents of the certificate and certificate metadata.
 */
export interface UpdateCertificateConfigDetails {
  /**
   * A name for the certificate version. When the value is not null, a name is unique across versions of a given certificate.
   */
  "versionName"?: string;
  /**
   * The rotation state of the certificate. The default is `CURRENT`, meaning that the certificate is currently in use. A certificate version
   * that you mark as `PENDING` is staged and available for use, but you don't yet want to rotate it into current, active use. For example,
   * you might update a certificate and mark its rotation state as `PENDING` if you haven't yet updated the certificate on the target system.
   *
   */
  "stage"?: UpdateCertificateConfigDetails.Stage;

  "configType": string;
}

export namespace UpdateCertificateConfigDetails {
  export enum Stage {
    Current = "CURRENT",
    Pending = "PENDING"
  }

  export function getJsonObj(obj: UpdateCertificateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "IMPORTED":
          return model.UpdateCertificateByImportingConfigDetails.getJsonObj(
            <model.UpdateCertificateByImportingConfigDetails>(<object>jsonObj),
            true
          );
        case "ISSUED_BY_INTERNAL_CA":
          return model.UpdateCertificateIssuedByInternalCaConfigDetails.getJsonObj(
            <model.UpdateCertificateIssuedByInternalCaConfigDetails>(<object>jsonObj),
            true
          );
        case "MANAGED_EXTERNALLY_ISSUED_BY_INTERNAL_CA":
          return model.UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails.getJsonObj(
            <model.UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails>(
              (<object>jsonObj)
            ),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCertificateConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configType" in obj && obj.configType) {
      switch (obj.configType) {
        case "IMPORTED":
          return model.UpdateCertificateByImportingConfigDetails.getDeserializedJsonObj(
            <model.UpdateCertificateByImportingConfigDetails>(<object>jsonObj),
            true
          );
        case "ISSUED_BY_INTERNAL_CA":
          return model.UpdateCertificateIssuedByInternalCaConfigDetails.getDeserializedJsonObj(
            <model.UpdateCertificateIssuedByInternalCaConfigDetails>(<object>jsonObj),
            true
          );
        case "MANAGED_EXTERNALLY_ISSUED_BY_INTERNAL_CA":
          return model.UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails.getDeserializedJsonObj(
            <model.UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails>(
              (<object>jsonObj)
            ),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configType);
      }
    }
    return jsonObj;
  }
}
