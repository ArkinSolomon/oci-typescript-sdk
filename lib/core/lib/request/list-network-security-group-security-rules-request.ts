/**
 *
 *
 * OpenAPI spec version: 20160918
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
export interface ListNetworkSecurityGroupSecurityRulesRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security group.
   */
  "networkSecurityGroupId": string;
  /**
   * Direction of the security rule. Set to `EGRESS` for rules that allow outbound IP packets,
   * or `INGRESS` for rules that allow inbound IP packets.
   *
   */
  "direction"?: ListNetworkSecurityGroupSecurityRulesRequest.Direction;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated
* \"List\" call. For important details about how pagination works, see
* [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `50`
* 
 */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\"
   * call. For important details about how pagination works, see
   * [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The field to sort by.
   */
  "sortBy"?: ListNetworkSecurityGroupSecurityRulesRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListNetworkSecurityGroupSecurityRulesRequest.SortOrder;
}

export namespace ListNetworkSecurityGroupSecurityRulesRequest {
  export enum Direction {
    Egress = "EGRESS",
    Ingress = "INGRESS"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
