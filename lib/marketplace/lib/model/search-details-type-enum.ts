/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * Possible values for the type of SearchDetails.
 * FreeText - A request containing arbitrary text that must be present in the resource.
 * Structured - A request that uses Search's structured query language to specify filter conditions to apply to search results.
 *
 **/
export enum SearchDetailsTypeEnum {
  FreeText = "FreeText",
  Structured = "Structured"
}

export namespace SearchDetailsTypeEnum {
  export function getJsonObj(obj: SearchDetailsTypeEnum): SearchDetailsTypeEnum {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SearchDetailsTypeEnum): SearchDetailsTypeEnum {
    return obj;
  }
}
