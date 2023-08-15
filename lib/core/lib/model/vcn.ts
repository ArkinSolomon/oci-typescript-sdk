/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
* A virtual cloud network (VCN). For more information, see
* [Overview of the Networking Service](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/overview.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Vcn {
  /**
   * The list of BYOIPv6 prefixes required to create a VCN that uses BYOIPv6 ranges.
   *
   */
  "byoipv6CidrBlocks"?: Array<string>;
  /**
   * For an IPv6-enabled VCN, this is the list of Private IPv6 prefixes for the VCN's IP address space.
   *
   */
  "ipv6PrivateCidrBlocks"?: Array<string>;
  /**
    * Deprecated. The first CIDR IP address from cidrBlocks.
* <p>
Example: `172.16.0.0/16`
* 
    */
  "cidrBlock": string;
  /**
   * The list of IPv4 CIDR blocks the VCN will use.
   *
   */
  "cidrBlocks": Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the VCN.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default set of DHCP options.
   *
   */
  "defaultDhcpOptionsId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default route table.
   */
  "defaultRouteTableId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default security list.
   */
  "defaultSecurityListId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * A DNS label for the VCN, used in conjunction with the VNIC's hostname and
* subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC
* within this subnet (for example, `bminstance1.subnet123.vcn1.oraclevcn.com`).
* Must be an alphanumeric string that begins with a letter.
* The value cannot be changed.
* <p>
The absence of this parameter means the Internet and VCN Resolver will
* not work for this VCN.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* <p>
Example: `vcn1`
* 
    */
  "dnsLabel"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The VCN's Oracle ID ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
   */
  "id": string;
  /**
   * For an IPv6-enabled VCN, this is the list of IPv6 prefixes for the VCN's IP address space.
   * The prefixes are provided by Oracle and the sizes are always /56.
   *
   */
  "ipv6CidrBlocks"?: Array<string>;
  /**
   * The VCN's current state.
   */
  "lifecycleState": Vcn.LifecycleState;
  /**
    * The date and time the VCN was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * The VCN's domain name, which consists of the VCN's DNS label, and the
* `oraclevcn.com` domain.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* <p>
Example: `vcn1.oraclevcn.com`
* 
    */
  "vcnDomainName"?: string;
}

export namespace Vcn {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Vcn): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Vcn): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
