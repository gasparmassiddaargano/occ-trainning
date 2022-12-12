import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import MyMenu from '../my-menu-horizontal';
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */

import css from './styles.css';
import ProfileRegistration from '../../../patches/profile/profile-registration/component';

const MyProfileRegistration = props => {

 const properties = 
 { 
  "alertAccountCreated"  : "Account was created",
  "headingCreateAnAccount" : "Create an account",
  "actionCreateAnAccount": "Creare an Account",
  "alertCreateProfileEmailSentSuccessful": "Email sent to profile created",
  "alertCreateProfileSuccessful": "Profile was created successful",
  "labelEmailAddress":"Email Address ",
  "labelEmailUpdates":"Email Update",
  "labelFirstName":"First Name",
  "labelGdprConsentGranted":" GRP consent",
  "requireGDPRP13nConsent":true,
  "labelLastName":"Last Name",
  "textLogIn":"Login",
  "labelNo":"No",
  "labelPassword":"Password",
  "labelPasswordConfirm":"Confirm Password",
  "alertPasswordNotMatched":"Password No Matched"
 };

return (
  <>
  <MyMenu />
  <ProfileRegistration {...properties} />
  </>
  );
};

export default MyProfileRegistration;