/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import * as resourceBundle from '@oracle-cx-commerce/resources';

import {buildResources} from '@oracle-cx-commerce/resources/utils';
import config from './config';

const widgetResourceKeys = [
  'headingVerifyIdentity',
  'headingReturningCustomer',
  'textCreateAnAccount',
  'labelEmail',
  'textForgottenPassword',
  'textResendVerificationCode',
  'textVerificationCode',
  'textRememberThisDevice',
  'alertEnterVerificationCode',
  'alertResendOTP',
  'actionLogin',
  'alertLoginSuccessful',
  'alertLoginUnSuccessful',
  'alertLoginOTPIncorrect',
  'alertLoginUnsuccessful',
  'labelPassword',
  'headingEmailMarketingPreferences',
  'textConfirmEmailAndMarkatingPreference',
  'labelShowPersonalizationConsent',
  'labelGetMarketingMails',
  'buttonContinue',
  'buttonSubmit',
  'textAccountWithNoContractError',
  'actionBackToLogin'
];

export const Login = {
  packageId: '@oracle-cx-commerce/react-widgets',
  resources: buildResources(resourceBundle, widgetResourceKeys),
  config
};