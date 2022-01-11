/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionTypes from "./action-types";
export import ActionTypes = ActionTypes.ActionTypes;
import * as AutoUpgradableConfig from "./auto-upgradable-config";
export import AutoUpgradableConfig = AutoUpgradableConfig.AutoUpgradableConfig;
import * as AvailabilityHistorySummary from "./availability-history-summary";
export import AvailabilityHistorySummary = AvailabilityHistorySummary.AvailabilityHistorySummary;
import * as AvailabilityStatus from "./availability-status";
export import AvailabilityStatus = AvailabilityStatus.AvailabilityStatus;
import * as CreateManagementAgentInstallKeyDetails from "./create-management-agent-install-key-details";
export import CreateManagementAgentInstallKeyDetails = CreateManagementAgentInstallKeyDetails.CreateManagementAgentInstallKeyDetails;
import * as Datatypes from "./datatypes";
export import Datatypes = Datatypes.Datatypes;
import * as DeployPluginsDetails from "./deploy-plugins-details";
export import DeployPluginsDetails = DeployPluginsDetails.DeployPluginsDetails;
import * as EditModes from "./edit-modes";
export import EditModes = EditModes.EditModes;
import * as InstallTypes from "./install-types";
export import InstallTypes = InstallTypes.InstallTypes;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as ManagementAgent from "./management-agent";
export import ManagementAgent = ManagementAgent.ManagementAgent;
import * as ManagementAgentAggregation from "./management-agent-aggregation";
export import ManagementAgentAggregation = ManagementAgentAggregation.ManagementAgentAggregation;
import * as ManagementAgentAggregationCollection from "./management-agent-aggregation-collection";
export import ManagementAgentAggregationCollection = ManagementAgentAggregationCollection.ManagementAgentAggregationCollection;
import * as ManagementAgentAggregationDimensions from "./management-agent-aggregation-dimensions";
export import ManagementAgentAggregationDimensions = ManagementAgentAggregationDimensions.ManagementAgentAggregationDimensions;
import * as ManagementAgentError from "./management-agent-error";
export import ManagementAgentError = ManagementAgentError.ManagementAgentError;
import * as ManagementAgentGroupBy from "./management-agent-group-by";
export import ManagementAgentGroupBy = ManagementAgentGroupBy.ManagementAgentGroupBy;
import * as ManagementAgentImage from "./management-agent-image";
export import ManagementAgentImage = ManagementAgentImage.ManagementAgentImage;
import * as ManagementAgentImageSummary from "./management-agent-image-summary";
export import ManagementAgentImageSummary = ManagementAgentImageSummary.ManagementAgentImageSummary;
import * as ManagementAgentInstallKey from "./management-agent-install-key";
export import ManagementAgentInstallKey = ManagementAgentInstallKey.ManagementAgentInstallKey;
import * as ManagementAgentInstallKeySummary from "./management-agent-install-key-summary";
export import ManagementAgentInstallKeySummary = ManagementAgentInstallKeySummary.ManagementAgentInstallKeySummary;
import * as ManagementAgentPlugin from "./management-agent-plugin";
export import ManagementAgentPlugin = ManagementAgentPlugin.ManagementAgentPlugin;
import * as ManagementAgentPluginAggregation from "./management-agent-plugin-aggregation";
export import ManagementAgentPluginAggregation = ManagementAgentPluginAggregation.ManagementAgentPluginAggregation;
import * as ManagementAgentPluginAggregationCollection from "./management-agent-plugin-aggregation-collection";
export import ManagementAgentPluginAggregationCollection = ManagementAgentPluginAggregationCollection.ManagementAgentPluginAggregationCollection;
import * as ManagementAgentPluginAggregationDimensions from "./management-agent-plugin-aggregation-dimensions";
export import ManagementAgentPluginAggregationDimensions = ManagementAgentPluginAggregationDimensions.ManagementAgentPluginAggregationDimensions;
import * as ManagementAgentPluginDetails from "./management-agent-plugin-details";
export import ManagementAgentPluginDetails = ManagementAgentPluginDetails.ManagementAgentPluginDetails;
import * as ManagementAgentPluginGroupBy from "./management-agent-plugin-group-by";
export import ManagementAgentPluginGroupBy = ManagementAgentPluginGroupBy.ManagementAgentPluginGroupBy;
import * as ManagementAgentPluginSummary from "./management-agent-plugin-summary";
export import ManagementAgentPluginSummary = ManagementAgentPluginSummary.ManagementAgentPluginSummary;
import * as ManagementAgentSummary from "./management-agent-summary";
export import ManagementAgentSummary = ManagementAgentSummary.ManagementAgentSummary;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationTypes from "./operation-types";
export import OperationTypes = OperationTypes.OperationTypes;
import * as PlatformTypes from "./platform-types";
export import PlatformTypes = PlatformTypes.PlatformTypes;
import * as SetAutoUpgradableConfigDetails from "./set-auto-upgradable-config-details";
export import SetAutoUpgradableConfigDetails = SetAutoUpgradableConfigDetails.SetAutoUpgradableConfigDetails;
import * as UpdateManagementAgentDetails from "./update-management-agent-details";
export import UpdateManagementAgentDetails = UpdateManagementAgentDetails.UpdateManagementAgentDetails;
import * as UpdateManagementAgentInstallKeyDetails from "./update-management-agent-install-key-details";
export import UpdateManagementAgentInstallKeyDetails = UpdateManagementAgentInstallKeyDetails.UpdateManagementAgentInstallKeyDetails;
import * as WorkDeliveryStatus from "./work-delivery-status";
export import WorkDeliveryStatus = WorkDeliveryStatus.WorkDeliveryStatus;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
