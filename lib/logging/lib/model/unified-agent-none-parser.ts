/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, agent configurations, log data models,
continuous queries, and managed continuous queries.

For more information, see [Logging Overview](/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * This parser signifies a non-parser, and puts the entire log line in a message_key.
 */
export interface UnifiedAgentNoneParser extends model.UnifiedAgentParser {
  /**
   * Specifies the field name to contain logs.
   */
  "messageKey"?: string;

  "parserType": string;
}

export namespace UnifiedAgentNoneParser {
  export function getJsonObj(obj: UnifiedAgentNoneParser, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentParser.getJsonObj(obj) as UnifiedAgentNoneParser)),
      ...{}
    };

    return jsonObj;
  }
  export const parserType = "NONE";
  export function getDeserializedJsonObj(
    obj: UnifiedAgentNoneParser,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentParser.getDeserializedJsonObj(obj) as UnifiedAgentNoneParser)),
      ...{}
    };

    return jsonObj;
  }
}
