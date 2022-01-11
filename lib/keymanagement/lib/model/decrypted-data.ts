/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface DecryptedData {
  /**
   * The decrypted data, expressed as a base64-encoded value.
   */
  "plaintext": string;
  /**
   * The checksum of the decrypted data.
   */
  "plaintextChecksum": string;
  /**
   * The OCID of the key used to encrypt the ciphertext.
   */
  "keyId"?: string;
  /**
   * The OCID of the key version used to encrypt the ciphertext.
   */
  "keyVersionId"?: string;
  /**
   * The encryption algorithm to use to encrypt and decrypt data with a customer-managed key
   * `AES_256_GCM` indicates that the key is a symmetric key that uses the Advanced Encryption Standard (AES) algorithm and
   * that the mode of encryption is the Galois/Counter Mode (GCM). `RSA_OAEP_SHA_1` indicates that the
   * key is an asymmetric key that uses the RSA encryption algorithm and uses Optimal Asymmetric Encryption Padding (OAEP).
   * `RSA_OAEP_SHA_256` indicates that the key is an asymmetric key that uses the RSA encryption algorithm with a SHA-256 hash
   * and uses OAEP.
   *
   */
  "encryptionAlgorithm"?: DecryptedData.EncryptionAlgorithm;
}

export namespace DecryptedData {
  export enum EncryptionAlgorithm {
    Aes256Gcm = "AES_256_GCM",
    RsaOaepSha1 = "RSA_OAEP_SHA_1",
    RsaOaepSha256 = "RSA_OAEP_SHA_256",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DecryptedData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DecryptedData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
