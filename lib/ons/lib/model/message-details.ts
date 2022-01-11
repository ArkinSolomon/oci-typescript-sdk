/**
 * Notifications API
 * Use the Notifications API to broadcast messages to distributed components by topic, using a publish-subscribe pattern.
For information about managing topics, subscriptions, and messages, see [Notifications Overview](/iaas/Content/Notification/Concepts/notificationoverview.htm).

 * OpenAPI spec version: 20181201
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
 * The content of the message to be published.
 *
 */
export interface MessageDetails {
  /**
   * The title of the message to be published. Avoid entering confidential information.
   */
  "title"?: string;
  /**
   * The body of the message to be published.
   * Avoid entering confidential information.
   *
   */
  "body": string;
}

export namespace MessageDetails {
  export function getJsonObj(obj: MessageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MessageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
