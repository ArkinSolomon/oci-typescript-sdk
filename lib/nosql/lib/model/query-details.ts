/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * All the information surrounding a query, including the query statement,
 * limits, consistency, and so forth.
 *
 */
export interface QueryDetails {
  /**
   * Compartment OCID, to provide context for a table name in
   * the given statement.
   *
   */
  "compartmentId": string;
  /**
   * A NoSQL SQL query statement; or a Base64-encoded prepared statement.
   *
   */
  "statement": string;
  /**
   * If true, the statement is a prepared statement.
   */
  "isPrepared"?: boolean;
  /**
   * Consistency requirement for a read operation.
   */
  "consistency"?: QueryDetails.Consistency;
  /**
   * A limit on the total amount of data read during this operation, in KB.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxReadInKBs"?: number;
  /**
   * A map of prepared statement variables to values.
   */
  "variables"?: { [key: string]: any };
  /**
   * Timeout setting for the query. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInMs"?: number;
}

export namespace QueryDetails {
  export enum Consistency {
    Eventual = "EVENTUAL",
    Absolute = "ABSOLUTE"
  }

  export function getJsonObj(obj: QueryDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
