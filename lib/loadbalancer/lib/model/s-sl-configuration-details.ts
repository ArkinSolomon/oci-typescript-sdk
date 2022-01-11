/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The load balancer's SSL handling configuration details.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface SSLConfigurationDetails {
  /**
    * The maximum depth for peer certificate chain verification.
* <p>
Example: `3`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "verifyDepth"?: number;
  /**
    * Whether the load balancer listener should verify peer certificates.
* <p>
Example: `true`
* 
    */
  "verifyPeerCertificate"?: boolean;
  /**
    * Ids for OCI certificates service CA or CA bundles for the load balancer to trust.
* <p>
Example: `[ocid1.cabundle.oc1.us-ashburn-1.amaaaaaaav3bgsaagl4zzyqdop5i2vuwoqewdvauuw34llqa74otq2jdsfyq]`
* 
    */
  "trustedCertificateAuthorityIds"?: Array<string>;
  /**
    * Ids for OCI certificates service certificates. Currently only a single Id may be passed.
* <p>
Example: `[ocid1.certificate.oc1.us-ashburn-1.amaaaaaaav3bgsaa5o2q7rh5nfmkkukfkogasqhk6af2opufhjlqg7m6jqzq]`
* 
    */
  "certificateIds"?: Array<string>;
  /**
    * A friendly name for the certificate bundle. It must be unique and it cannot be changed.
* Valid certificate bundle names include only alphanumeric characters, dashes, and underscores.
* Certificate bundle names cannot contain spaces. Avoid entering confidential information.
* <p>
Example: `example_certificate_bundle`
* 
    */
  "certificateName"?: string;
  /**
    * A list of SSL protocols the load balancer must support for HTTPS or SSL connections.
* <p>
The load balancer uses SSL protocols to establish a secure connection between a client and a server. A secure
* connection ensures that all data passed between the client and the server is private.
* <p>
The Load Balancing service supports the following protocols:
* <p>
*  TLSv1
* *  TLSv1.1
* *  TLSv1.2
* <p>
If this field is not specified, TLSv1.2 is the default.
* <p>
**Warning:** All SSL listeners created on a given port must use the same set of SSL protocols.
* <p>
**Notes:**
* <p>
*  The handshake to establish an SSL connection fails if the client supports none of the specified protocols.
* *  You must ensure compatibility between the specified SSL protocols and the ciphers configured in the cipher
*    suite.
* *  For all existing load balancer listeners and backend sets that predate this feature, the `GET` operation
*    displays a list of SSL protocols currently used by those resources.
* <p>
example: `[\"TLSv1.1\", \"TLSv1.2\"]`
* 
    */
  "protocols"?: Array<string>;
  /**
    * The name of the cipher suite to use for HTTPS or SSL connections.
* <p>
If this field is not specified, the default is `oci-default-ssl-cipher-suite-v1`.
* <p>
**Notes:**
* <p>
*  You must ensure compatibility between the specified SSL protocols and the ciphers configured in the cipher
*    suite. Clients cannot perform an SSL handshake if there is an incompatible configuration.
* *  You must ensure compatibility between the ciphers configured in the cipher suite and the configured
*    certificates. For example, RSA-based ciphers require RSA certificates and ECDSA-based ciphers require ECDSA
*    certificates.
* *  If the cipher configuration is not modified after load balancer creation, the `GET` operation returns
*    `oci-default-ssl-cipher-suite-v1` as the value of this field in the SSL configuration for existing listeners
*    that predate this feature.
* *  If the cipher configuration was modified using Oracle operations after load balancer creation, the `GET`
*    operation returns `oci-customized-ssl-cipher-suite` as the value of this field in the SSL configuration for
*    existing listeners that predate this feature.
* *  The `GET` operation returns `oci-wider-compatible-ssl-cipher-suite-v1` as the value of this field in the SSL
*    configuration for existing backend sets that predate this feature.
* *  If the `GET` operation on a listener returns `oci-customized-ssl-cipher-suite` as the value of this field,
*    you must specify an appropriate predefined or custom cipher suite name when updating the resource.
* *  The `oci-customized-ssl-cipher-suite` Oracle reserved cipher suite name is not accepted as valid input for
*    this field.
* <p>
example: `example_cipher_suite`
* 
    */
  "cipherSuiteName"?: string;
  /**
   * When this attribute is set to ENABLED, the system gives preference to the server ciphers over the client
   * ciphers.
   * <p>
   **Note:** This configuration is applicable only when the load balancer is acting as an SSL/HTTPS server. This
   *           field is ignored when the `SSLConfiguration` object is associated with a backend set.
   *
   */
  "serverOrderPreference"?: SSLConfigurationDetails.ServerOrderPreference;
}

export namespace SSLConfigurationDetails {
  export enum ServerOrderPreference {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
  }

  export function getJsonObj(obj: SSLConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SSLConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
