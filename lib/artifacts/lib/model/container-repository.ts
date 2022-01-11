/**
 * Container Images API
 * API covering the [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as container images and repositories.

 * OpenAPI spec version: 20160918
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
 * Container repository metadata.
 */
export interface ContainerRepository {
  /**
   * The OCID of the compartment in which the container repository exists.
   */
  "compartmentId": string;
  /**
   * The id of the user or principal that created the resource.
   */
  "createdBy": string;
  /**
   * The container repository name.
   */
  "displayName": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the container repository.
* <p>
Example: `ocid1.containerrepo.oc1..exampleuniqueID`
* 
    */
  "id": string;
  /**
   * Total number of images. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "imageCount": number;
  /**
   * Whether the repository is immutable. Images cannot be overwritten in an immutable repository.
   */
  "isImmutable": boolean;
  /**
   * Whether the repository is public. A public repository allows unauthenticated access.
   */
  "isPublic": boolean;
  /**
   * Total number of layers. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "layerCount": number;
  /**
   * Total storage in bytes consumed by layers. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "layersSizeInBytes": number;
  /**
   * The current state of the container repository.
   */
  "lifecycleState": ContainerRepository.LifecycleState;
  "readme"?: model.ContainerRepositoryReadme;
  /**
   * An RFC 3339 timestamp indicating when the repository was created.
   */
  "timeCreated": Date;
  /**
   * An RFC 3339 timestamp indicating when an image was last pushed to the repository.
   */
  "timeLastPushed"?: Date;
  /**
   * Total storage size in GBs that will be charged. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "billableSizeInGBs": number;
}

export namespace ContainerRepository {
  export enum LifecycleState {
    Available = "AVAILABLE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ContainerRepository): object {
    const jsonObj = {
      ...obj,
      ...{
        "readme": obj.readme ? model.ContainerRepositoryReadme.getJsonObj(obj.readme) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerRepository): object {
    const jsonObj = {
      ...obj,
      ...{
        "readme": obj.readme
          ? model.ContainerRepositoryReadme.getDeserializedJsonObj(obj.readme)
          : undefined
      }
    };

    return jsonObj;
  }
}
