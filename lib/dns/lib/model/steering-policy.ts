/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A DNS steering policy.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface SteeringPolicy {
  /**
   * The OCID of the compartment containing the steering policy.
   */
  "compartmentId"?: string;
  /**
   * A user-friendly name for the steering policy. Does not have to be unique and can be changed.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The Time To Live (TTL) for responses from the steering policy, in seconds.
   * If not specified during creation, a value of 30 seconds will be used.
   *
   */
  "ttl"?: number;
  /**
    * The OCID of the health check monitor providing health data about the answers of the
* steering policy. A steering policy answer with `rdata` matching a monitored endpoint
* will use the health data of that endpoint. A steering policy answer with `rdata` not
* matching any monitored endpoint will be assumed healthy.
* <p>

* **Note:** To use the Health Check monitoring feature in a steering policy, a monitor
* must be created using the Health Checks service first. For more information on how to
* create a monitor, please see [Managing Health Checks](https://docs.cloud.oracle.com/iaas/Content/HealthChecks/Tasks/managinghealthchecks.htm).
* 
    */
  "healthCheckMonitorId"?: string;
  /**
    * A set of predefined rules based on the desired purpose of the steering policy. Each
* template utilizes Traffic Management's rules in a different order to produce the desired
* results when answering DNS queries.
* <p>

* **Example:** The `FAILOVER` template determines answers by filtering the policy's answers
* using the `FILTER` rule first, then the following rules in succession: `HEALTH`, `PRIORITY`,
* and `LIMIT`. This gives the domain dynamic failover capability.
* <p>

* It is **strongly recommended** to use a template other than `CUSTOM` when creating
* a steering policy.
* <p>

* All templates require the rule order to begin with an unconditional `FILTER` rule that keeps
* answers contingent upon `answer.isDisabled != true`, except for `CUSTOM`. A defined
* `HEALTH` rule must follow the `FILTER` rule if the policy references a `healthCheckMonitorId`.
* The last rule of a template must must be a `LIMIT` rule. For more information about templates
* and code examples, see [Traffic Management API Guide](https://docs.cloud.oracle.com/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm).
* <p>
**Template Types**
* <p>
* `FAILOVER` - Uses health check information on your endpoints to determine which DNS answers
* to serve. If an endpoint fails a health check, the answer for that endpoint will be removed
* from the list of available answers until the endpoint is detected as healthy.
* <p>

* * `LOAD_BALANCE` - Distributes web traffic to specified endpoints based on defined weights.
* <p>

* * `ROUTE_BY_GEO` - Answers DNS queries based on the query's geographic location. For a list of geographic
* locations to route by, see [Traffic Management Geographic Locations](https://docs.cloud.oracle.com/iaas/Content/TrafficManagement/Reference/trafficmanagementgeo.htm).
* <p>

* * `ROUTE_BY_ASN` - Answers DNS queries based on the query's originating ASN.
* <p>

* * `ROUTE_BY_IP` - Answers DNS queries based on the query's IP address.
* <p>

* * `CUSTOM` - Allows a customized configuration of rules.
* 
    */
  "template"?: SteeringPolicy.Template;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The set of all answers that can potentially issue from the steering policy.
   *
   */
  "answers"?: Array<model.SteeringPolicyAnswer>;
  /**
    * The series of rules that will be processed in sequence to reduce the pool of answers
* to a response for any given request.
* <p>

* The first rule receives a shuffled list of all answers, and every other rule receives
* the list of answers emitted by the one preceding it. The last rule populates the
* response.
* 
    */
  "rules"?: Array<model.SteeringPolicyRule>;
  /**
   * The canonical absolute URL of the resource.
   */
  "self"?: string;
  /**
   * The OCID of the resource.
   */
  "id"?: string;
  /**
   * The date and time the resource was created, expressed in RFC 3339 timestamp format.
   * <p>
   **Example:** `2016-07-22T17:23:59:60Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The current state of the resource.
   */
  "lifecycleState"?: SteeringPolicy.LifecycleState;
}

export namespace SteeringPolicy {
  export enum Template {
    Failover = "FAILOVER",
    LoadBalance = "LOAD_BALANCE",
    RouteByGeo = "ROUTE_BY_GEO",
    RouteByAsn = "ROUTE_BY_ASN",
    RouteByIp = "ROUTE_BY_IP",
    Custom = "CUSTOM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SteeringPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "answers": obj.answers
          ? obj.answers.map(item => {
              return model.SteeringPolicyAnswer.getJsonObj(item);
            })
          : undefined,
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.SteeringPolicyRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
