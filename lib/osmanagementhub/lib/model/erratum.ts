/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Details about the erratum.
 */
export interface Erratum {
  /**
   * Advisory name.
   */
  "name": string;
  /**
   * Summary description of the erratum.
   */
  "synopsis"?: string;
  /**
   * Date the erratum was issued, as described
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeIssued"?: Date;
  /**
   * Details describing the erratum.
   */
  "description"?: string;
  /**
   * Most recent date the erratum was updated, as described
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Type of the erratum.
   */
  "classificationType"?: model.ClassificationTypes;
  /**
   * Information specifying from where the erratum was release.
   */
  "from"?: string;
  /**
   * Information describing how the erratum can be resolved.
   */
  "solution"?: string;
  /**
   * Information describing how to find more information about. the erratum.
   */
  "references"?: string;
  /**
   * List of CVEs applicable to this erratum.
   */
  "relatedCves"?: Array<string>;
  /**
   * List of repository identifiers.
   */
  "repositories"?: Array<string>;
  /**
   * List of Packages affected by this erratum.
   */
  "packages"?: Array<model.SoftwarePackageSummary>;
  /**
   * List of affected OS families.
   */
  "osFamilies"?: Array<model.OsFamily>;
  /**
   * The severity for a security advisory, otherwise, null.
   */
  "advisorySeverity"?: model.AdvisorySeverity;
}

export namespace Erratum {
  export function getJsonObj(obj: Erratum): object {
    const jsonObj = {
      ...obj,
      ...{
        "packages": obj.packages
          ? obj.packages.map(item => {
              return model.SoftwarePackageSummary.getJsonObj(item);
            })
          : undefined,
        "osFamilies": obj.osFamilies
          ? obj.osFamilies.map(item => {
              return model.OsFamily.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Erratum): object {
    const jsonObj = {
      ...obj,
      ...{
        "packages": obj.packages
          ? obj.packages.map(item => {
              return model.SoftwarePackageSummary.getDeserializedJsonObj(item);
            })
          : undefined,
        "osFamilies": obj.osFamilies
          ? obj.osFamilies.map(item => {
              return model.OsFamily.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
