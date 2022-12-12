import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import Link from '@oracle-cx-commerce/react-components/link';
import MyMenu from '../my-menu-horizontal';
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */

import css from './styles.css';
import LoginForm from '../../../patches/session/login/component';

const MyLogin = props => {

 const properties = 
 { 
  "textCreateAnAccount": 'Create account',
  "labelEmail": 'email',
  "textForgottenPassword": 'forgot password',
  "actionLogin": 'login',
  "labelPassword": 'password',
  "inProgress":'in progress',
  "alertLoginUnSuccessful":'Login Unsucessful',
  "authenticated": 'authenticate' 
 };


  return (
  <>
  <Styled id="MyLogin" css={css}>
      <MyMenu />
    </Styled>
   <LoginForm {...properties} />
  </>
  );
};

export default MyLogin;
