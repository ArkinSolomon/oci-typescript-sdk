/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
 * talk to an administrator. If you are an administrator who needs to write policies to give users access, see
 * [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 *
 */
export interface CommitMultipartUploadDetails {
  /**
   * The part numbers and entity tags (ETags) for the parts to be committed.
   */
  "partsToCommit": Array<model.CommitMultipartUploadPartDetails>;
  /**
   * The part numbers for the parts to be excluded from the completed object.
   * Each part created for this upload must be in either partsToExclude or partsToCommit, but cannot be in both.
   *
   */
  "partsToExclude"?: Array<number>;
}

export namespace CommitMultipartUploadDetails {
  export function getJsonObj(obj: CommitMultipartUploadDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "partsToCommit": obj.partsToCommit
          ? obj.partsToCommit.map(item => {
              return model.CommitMultipartUploadPartDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CommitMultipartUploadDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "partsToCommit": obj.partsToCommit
          ? obj.partsToCommit.map(item => {
              return model.CommitMultipartUploadPartDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
