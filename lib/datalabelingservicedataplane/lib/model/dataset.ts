/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
 * OpenAPI spec version: 20211001
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
 * A dataset is a logical collection of records. The dataset contains all the information necessary to describe a record's source, format, the type of annotations allowed for the record, and the labels allowed on annotations.
 *
 */
export interface Dataset {
  /**
   * The OCID of the Dataset.
   */
  "id": string;
  /**
   * A user-friendly display name for the resource.
   */
  "displayName"?: string;
  /**
   * The OCID of the compartment of the resource.
   */
  "compartmentId": string;
  /**
   * A user provided description of the dataset
   */
  "description"?: string;
  /**
   * The date and time the resource was created, in the timestamp format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was last updated, in the timestamp format defined by RFC3339.
   */
  "timeUpdated": Date;
  /**
   * The state of a dataset.
   * CREATING - The dataset is being created.  It will transition to ACTIVE when it is ready for labeling.
   * ACTIVE   - The dataset is ready for labeling.
   * UPDATING - The dataset is being updated.  It and its related resources may be unavailable for other updates until it returns to ACTIVE.
   * NEEDS_ATTENTION - A dataset updation operation has failed due to validation or other errors and needs attention.
   * DELETING - The dataset and its related resources are being deleted.
   * DELETED  - The dataset has been deleted and is no longer available.
   * FAILED   - The dataset has failed due to validation or other errors.
   *
   */
  "lifecycleState": Dataset.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, it can be used to provide actionable information for a resource in FAILED or NEEDS_ATTENTION state.
   */
  "lifecycleDetails"?: string;
  /**
   * The sub-state of the dataset.
   * IMPORT_DATASET - The dataset is being imported.
   *
   */
  "lifecycleSubstate"?: Dataset.LifecycleSubstate;
  /**
   * The annotation format name required for labeling records.
   */
  "annotationFormat": string;
  "datasetSourceDetails": model.ObjectStorageDatasetSourceDetails;
  "datasetFormatDetails":
    | model.ImageDatasetFormatDetails
    | model.DocumentDatasetFormatDetails
    | model.TextDatasetFormatDetails;
  "labelSet": model.LabelSet;
  "initialRecordGenerationConfiguration"?: model.InitialRecordGenerationConfiguration;
  "initialImportDatasetConfiguration"?: model.InitialImportDatasetConfiguration;
  /**
   * The labeling instructions for human labelers in rich text format
   */
  "labelingInstructions"?: string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The usage of system tag keys. These predefined keys are scoped to namespaces.
   * For example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: `{\"bar-key\": \"value\"}`
   *
   */
  "additionalProperties"?: { [key: string]: string };
}

export namespace Dataset {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    NeedsAttention = "NEEDS_ATTENTION",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleSubstate {
    ImportDataset = "IMPORT_DATASET",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Dataset): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetSourceDetails": obj.datasetSourceDetails
          ? model.DatasetSourceDetails.getJsonObj(obj.datasetSourceDetails)
          : undefined,
        "datasetFormatDetails": obj.datasetFormatDetails
          ? model.DatasetFormatDetails.getJsonObj(obj.datasetFormatDetails)
          : undefined,
        "labelSet": obj.labelSet ? model.LabelSet.getJsonObj(obj.labelSet) : undefined,
        "initialRecordGenerationConfiguration": obj.initialRecordGenerationConfiguration
          ? model.InitialRecordGenerationConfiguration.getJsonObj(
              obj.initialRecordGenerationConfiguration
            )
          : undefined,
        "initialImportDatasetConfiguration": obj.initialImportDatasetConfiguration
          ? model.InitialImportDatasetConfiguration.getJsonObj(
              obj.initialImportDatasetConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Dataset): object {
    const jsonObj = {
      ...obj,
      ...{
        "datasetSourceDetails": obj.datasetSourceDetails
          ? model.DatasetSourceDetails.getDeserializedJsonObj(obj.datasetSourceDetails)
          : undefined,
        "datasetFormatDetails": obj.datasetFormatDetails
          ? model.DatasetFormatDetails.getDeserializedJsonObj(obj.datasetFormatDetails)
          : undefined,
        "labelSet": obj.labelSet ? model.LabelSet.getDeserializedJsonObj(obj.labelSet) : undefined,
        "initialRecordGenerationConfiguration": obj.initialRecordGenerationConfiguration
          ? model.InitialRecordGenerationConfiguration.getDeserializedJsonObj(
              obj.initialRecordGenerationConfiguration
            )
          : undefined,
        "initialImportDatasetConfiguration": obj.initialImportDatasetConfiguration
          ? model.InitialImportDatasetConfiguration.getDeserializedJsonObj(
              obj.initialImportDatasetConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
