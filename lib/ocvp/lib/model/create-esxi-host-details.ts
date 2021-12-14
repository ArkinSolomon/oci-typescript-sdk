/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
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

/**
 * Details of the ESXi host to add to the SDDC.
 */
export interface CreateEsxiHostDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the SDDC to add the
   * ESXi host to.
   *
   */
  "sddcId": string;
  /**
    * A descriptive name for the ESXi host. It's changeable.
* Esxi Host name requirements are 1-16 character length limit, Must start with a letter, Must be English letters, numbers, - only, No repeating hyphens, Must be unique within the SDDC.
* <p>
If this attribute is not specified, the SDDC's `instanceDisplayNamePrefix` attribute is used
* to name and incrementally number the ESXi host. For example, if you're creating the fourth
* ESXi host in the SDDC, and `instanceDisplayNamePrefix` is `MySDDC`, the host's display
* name is `MySDDC-4`.
* <p>
Avoid entering confidential information.
* 
    */
  "displayName"?: string;
  /**
   * The billing option currently used by the ESXi host.
   * {@link #listSupportedSkus(ListSupportedSkusRequest) listSupportedSkus}.
   *
   */
  "currentSku"?: model.Sku;
  /**
   * The billing option to switch to after the existing billing cycle ends.
   * If `nextSku` is null or empty, `currentSku` continues to the next billing cycle.
   * {@link #listSupportedSkus(ListSupportedSkusRequest) listSupportedSkus}.
   *
   */
  "nextSku"?: model.Sku;
  /**
   * The availability domain to create the ESXi host in.
   * If keep empty, for AD-specific SDDC, new ESXi host will be created in the same availability domain;
   * for multi-AD SDDC, new ESXi host will be auto assigned to the next availability domain following evenly distribution strategy.
   *
   */
  "computeAvailabilityDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the esxi host that
   * is failed. It is an optional param, when user supplies this param, new Esxi
   * Host will be created to replace the failed one, and failedEsxiHostId field
   * will be udpated in the newly created EsxiHost.
   *
   */
  "failedEsxiHostId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateEsxiHostDetails {
  export function getJsonObj(obj: CreateEsxiHostDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateEsxiHostDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
