/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import {PAGE_REGISTRATION_LINK, PAGE_RESET_PASSWORD_LINK} from '@oracle-cx-commerce/commerce-utils/constants';
import React, {useState, useCallback, useContext} from 'react';

import Alert from '@oracle-cx-commerce/react-components/alert';
import EmailIcon from '@oracle-cx-commerce/react-components/icons/email';
import Form from '@oracle-cx-commerce/react-components/form';
import Link from '@oracle-cx-commerce/react-components/link';
import PasswordIcon from '@oracle-cx-commerce/react-components/icons/password';
import Styled from '@oracle-cx-commerce/react-components/styled';
import css from './styles.css';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';



const LoginForm = props => {
  const {
    id,
    headingReturningCustomer,
    textCreateAnAccount,
    labelEmail,
    textForgottenPassword,
    actionLogin,
    login: softLoginEmail,
    labelPassword,
    inProgress,
    setInProgress,
    alertEnterVerificationCode,
    textAccountWithNoContractError,
    alertLoginUnSuccessful,
    authenticated,
    setShowVerifyIdentityForm
  } = props;

  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const {action, getState} = useContext(StoreContext);

  /**
   * login action success callback
   */
  const onOk = useCallback(() => {
    const state = getState();
  
  }, []);

  /**
   * login action failure callback
   */
  const onNotOk = useCallback(
    ({error = {}}) => {
      if (error.code === 500) {
        action('notify', {level: 'error', message: error.message});
      } else if (error.errorCode === '60011') {
        setLoginErrorMessage(textAccountWithNoContractError);
      } else {
        setLoginErrorMessage(error.message === 'unauthorized_client' ? alertLoginUnSuccessful : error.message);
      }
    },
    [action, alertLoginUnSuccessful, textAccountWithNoContractError]
  );

  return (
    <Styled id="LoginForm" css={css}>
      <div className="Login">
        <h1><br/></h1>
        <Form action="login" onOk={onOk} onNotOk={onNotOk} setInProgress={setInProgress} noValidate>
          <input type="hidden" name="rememberUserEmail" value="true" />
          {loginErrorMessage && <Alert id="Login__Alert" type="error" message={loginErrorMessage} />}

          <div>
            <label htmlFor={`username-${id}`}>{labelEmail}</label>
            <div className="Login__EmailField">
              <EmailIcon className="Login__EmailIcon" />
              <input id={`username-${id}`} type="email" name="username" defaultValue={softLoginEmail} required />
              <span className="validationMessage"></span>
            </div>
          </div>
          <div>
            <label htmlFor={`password-${id}`}>{labelPassword}</label>
            <div className="Login__PasswordField">
              <PasswordIcon className="Login__PasswordIcon" />
              <input id={`password-${id}`} type="password" name="password" required />
              <span className="validationMessage"></span>
            </div>
          </div>
          <div className="Login__ForgotPassword">
            <Link className="Login__ForgotPassword__Link" href={PAGE_RESET_PASSWORD_LINK}>
              {textForgottenPassword}
            </Link>
          </div>
          <div>
            <button className='btn btn-principal' type="submit" disabled={inProgress}>
              {actionLogin}
            </button>
          </div>
        </Form>
        <Link href={PAGE_REGISTRATION_LINK} className="button secondary Login__LinkToCreateAccount">
          {textCreateAnAccount}
        </Link>
      </div>
    </Styled>
  );
};

export default LoginForm;