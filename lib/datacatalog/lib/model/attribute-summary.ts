/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of an entity attribute.
 */
export interface AttributeSummary {
  /**
   * Unique attribute key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Optional user friendly business name of the attribute. If set, this supplements the harvested display name of the object.
   */
  "businessName"?: string;
  /**
   * Detailed description of the attribute.
   */
  "description"?: string;
  /**
   * The unique key of the parent entity.
   */
  "entityKey"?: string;
  /**
   * Unique external key of this attribute in the external source system.
   */
  "externalKey"?: string;
  /**
   * Max allowed length of the attribute value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "length"?: number;
  /**
   * Position of the attribute in the record definition. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "position"?: number;
  /**
   * Precision of the attribute value usually applies to float data type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "precision"?: number;
  /**
   * Scale of the attribute value usually applies to float data type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scale"?: number;
  /**
   * Property that identifies if this attribute can be assigned null values.
   */
  "isNullable"?: boolean;
  /**
   * URI to the attribute instance in the API.
   */
  "uri"?: string;
  /**
   * State of the attribute.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time the attribute was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * Data type of the attribute as defined in the external source system.
   */
  "externalDataType"?: string;
  /**
   * The type of the attribute. Type keys can be found via the '/types' endpoint.
   */
  "typeKey"?: string;
  /**
   * The minimum count for the number of instances of a given type stored in this collection type attribute,applicable if this attribute is a complex type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minCollectionCount"?: number;
  /**
   * The maximum count for the number of instances of a given type stored in this collection type attribute,applicable if this attribute is a complex type.
   * For type specifications in systems that specify only \"capacity\" without upper or lower bound , this property can also be used to just mean \"capacity\".
   * Some examples are Varray size in Oracle , Occurs Clause in Cobol , capacity in XmlSchemaObjectCollection , maxOccurs in  Xml , maxItems in Json
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxCollectionCount"?: number;
  /**
   * Entity key that represents the datatype of this attribute , applicable if this attribute is a complex type.
   */
  "datatypeEntityKey"?: string;
  /**
   * External entity key that represents the datatype of this attribute , applicable if this attribute is a complex type.
   */
  "externalDatatypeEntityKey"?: string;
  /**
   * Attribute key that represents the parent attribute of this attribute , applicable if the parent attribute is of complex datatype.
   */
  "parentAttributeKey"?: string;
  /**
   * External attribute key that represents the parent attribute  of this attribute , applicable if the parent attribute is of complex type.
   */
  "externalParentAttributeKey"?: string;
  /**
   * Full path of the attribute.
   */
  "path"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertyGetUsage>;
  /**
   * Rule types associated with attribute.
   */
  "associatedRuleTypes"?: Array<AttributeSummary.AssociatedRuleTypes>;
  /**
   * Whether a column is derived or not.
   */
  "isDerivedAttribute"?: boolean;
  /**
   * The last time that any change was made to the attribute. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * A map of maps that contains the properties which are specific to the attribute type. Each attribute type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * attributes have required properties within the \"default\" category.
   * Example: `{\"properties\": { \"default\": { \"key1\": \"value1\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace AttributeSummary {
  export enum AssociatedRuleTypes {
    Primarykey = "PRIMARYKEY",
    Foreignkey = "FOREIGNKEY",
    Uniquekey = "UNIQUEKEY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AttributeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertyGetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AttributeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertyGetUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
