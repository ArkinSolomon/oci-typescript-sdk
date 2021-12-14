/**
 * Billing Center Gateway API
 * This site describes all the Rest endpoints of Billing Center Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
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
 * Invoice list elements
 */
export interface InvoiceSummary {
  /**
   * Invoice identifier
   */
  "invoiceId": string;
  /**
   * Invoice external reference
   */
  "invoiceNumber"?: string;
  /**
   * PC invoice identifier
   */
  "internalInvoiceId"?: string;
  /**
   * Is credit card payment eligible
   */
  "isCreditCardPayable"?: boolean;
  /**
   * Invoice status
   */
  "invoiceStatus"?: InvoiceSummary.InvoiceStatus;
  /**
   * Type of invoice
   */
  "invoiceType"?: InvoiceSummary.InvoiceType;
  /**
   * Is the invoice has been already payed
   */
  "isPaid"?: boolean;
  /**
   * Whether invoice can be payed
   */
  "isPayable"?: boolean;
  /**
   * Invoice amount Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmount"?: number;
  /**
   * Invoice amount due Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountDue"?: number;
  /**
   * Invoice amount credit Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountCredited"?: number;
  /**
   * Invoice amount adjust Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountAdjusted"?: number;
  /**
   * Invoice amount applied Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountApplied"?: number;
  /**
   * Due date of invoice amount
   */
  "timeInvoiceDue"?: Date;
  /**
   * Is the last payment failed
   */
  "isPaymentFailed"?: boolean;
  /**
   * Invoice amount in dispute Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invoiceAmountInDispute"?: number;
  /**
   * Invoice reference number
   */
  "invoiceRefNumber"?: string;
  /**
   * Invoice PO number
   */
  "invoicePoNumber"?: string;
  /**
   * Date of invoice
   */
  "timeInvoice"?: Date;
  "currency"?: model.Currency;
  /**
   * Is emailing pdf allowed
   */
  "isPdfEmailAvailable"?: boolean;
  /**
   * Is view access allowed
   */
  "isDisplayViewPdf"?: boolean;
  /**
   * Is pdf download access allowed
   */
  "isDisplayDownloadPdf"?: boolean;
  "lastPaymentDetail"?:
    | model.OtherPaymentDetail
    | model.PaypalPaymentDetail
    | model.CreditCardPaymentDetail;
  /**
   * Name of the bill to customer
   */
  "partyName"?: string;
  /**
   * List of subscription identifiers
   */
  "subscriptionIds"?: Array<string>;
}

export namespace InvoiceSummary {
  export enum InvoiceStatus {
    Open = "OPEN",
    PastDue = "PAST_DUE",
    PaymentSubmitted = "PAYMENT_SUBMITTED",
    Closed = "CLOSED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum InvoiceType {
    Hardware = "HARDWARE",
    Subscription = "SUBSCRIPTION",
    Support = "SUPPORT",
    License = "LICENSE",
    Education = "EDUCATION",
    Consulting = "CONSULTING",
    Service = "SERVICE",
    Usage = "USAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InvoiceSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency ? model.Currency.getJsonObj(obj.currency) : undefined,

        "lastPaymentDetail": obj.lastPaymentDetail
          ? model.PaymentDetail.getJsonObj(obj.lastPaymentDetail)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InvoiceSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "currency": obj.currency ? model.Currency.getDeserializedJsonObj(obj.currency) : undefined,

        "lastPaymentDetail": obj.lastPaymentDetail
          ? model.PaymentDetail.getDeserializedJsonObj(obj.lastPaymentDetail)
          : undefined
      }
    };

    return jsonObj;
  }
}
