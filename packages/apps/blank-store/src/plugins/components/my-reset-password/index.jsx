import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import MyMenu from '../my-menu-horizontal';
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */

import css from './styles.css';
import ProfileResetPassword from '../../../patches/profile/profile-reset-password/component';

const MyResetPassword = props => {

 const properties = 
 { 
  "labelEmail":"Your email",
  "textPasswordResetHelper":"Reset your user",
  "headingResetPassword":"Reset password page",
  "alertResetPasswordFailure":"Error requesting reset password",
  "alertResetPasswordSuccessful":"Success check your email for instructions",
  "buttonResendPasswordRequest":"Re send password request",
  "buttonSubmit":"Submit request"
 };

return (
  <Styled id="MyResetPassword" css={css}>
  <MyMenu />
   <ProfileResetPassword {...properties} />
   </Styled>
  );
};

export default MyResetPassword;