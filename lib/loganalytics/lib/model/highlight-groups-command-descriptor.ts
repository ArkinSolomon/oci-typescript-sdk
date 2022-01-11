/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Command descriptor for querylanguage HIGHLIGHTGROUPS command.
 *
 */
export interface HighlightGroupsCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * User specified color to highlight matches with if found.
   *
   */
  "color"?: string;
  /**
   * User specified priority assigned to highlighted matches if found.
   *
   */
  "priority"?: string;
  /**
   * List of fields to search for terms or phrases to highlight.  If not specified all string fields are scanned.
   *
   */
  "matchOnly"?: Array<string>;
  /**
   * List of fields to search for terms or phrases to highlight.
   *
   */
  "fields"?: Array<string>;
  /**
   * List of terms or phrases to highlight if found.
   *
   */
  "keywords"?: Array<string>;
  /**
   * List of subQueries specified as highlightgroups command arguments
   *
   */
  "subQueries"?: Array<model.ParseQueryOutput>;

  "name": string;
}

export namespace HighlightGroupsCommandDescriptor {
  export function getJsonObj(
    obj: HighlightGroupsCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as HighlightGroupsCommandDescriptor)),
      ...{
        "subQueries": obj.subQueries
          ? obj.subQueries.map(item => {
              return model.ParseQueryOutput.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const name = "HIGHLIGHT_GROUPS";
  export function getDeserializedJsonObj(
    obj: HighlightGroupsCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(
            obj
          ) as HighlightGroupsCommandDescriptor)),
      ...{
        "subQueries": obj.subQueries
          ? obj.subQueries.map(item => {
              return model.ParseQueryOutput.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
