/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
 * The type of document.
 **/
export enum DocumentType {
  Invoice = "INVOICE",
  Receipt = "RECEIPT",
  Resume = "RESUME",
  TaxForm = "TAX_FORM",
  DriverLicense = "DRIVER_LICENSE",
  Passport = "PASSPORT",
  BankStatement = "BANK_STATEMENT",
  Check = "CHECK",
  Payslip = "PAYSLIP",
  Others = "OTHERS",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DocumentType {
  export function getJsonObj(obj: DocumentType): DocumentType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DocumentType): DocumentType {
    return obj;
  }
}
