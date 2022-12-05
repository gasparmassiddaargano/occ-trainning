/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import {PAGE_401_LINK, PAGE_HOME_LINK} from '@oracle-cx-commerce/commerce-utils/constants/page-links';
import React, {useContext, useEffect, useRef, useState} from 'react';

import Alert from '@oracle-cx-commerce/react-components/alert';
import LoginForm from './components/login-form';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import css from '@oracle-cx-commerce/react-widgets/session/login/styles.css';
import {getLoggedInData} from '@oracle-cx-commerce/react-widgets/session/login/selectors';
import {getPage} from '@oracle-cx-commerce/commerce-utils/selector';
import {getRedirect} from '@oracle-cx-commerce/utils/browser';
import {useNavigator} from '@oracle-cx-commerce/react-components/link';

/**
 * Displays a Login Form.
 * @param {*} props - includes labels of the input fields.
 * @param defaultLoginSuccessPage - default login success page.
 */
const Login = props => {
  const {
    authenticated,
    defaultLoginSuccessPage = PAGE_HOME_LINK,
    profileId
  } = props;

  const goToPage = useNavigator();
  const [inProgress, setInProgress] = useState(false);
 
  // profile update status
  const {getState} = useContext(StoreContext);

  //to check if b2b user visits page while already logged in.
  const loggedIn = useRef(authenticated);
 
  useEffect(() => {
    const state = getState();
    if (authenticated && profileId) {
      const {pageType} = getPage(state);
    }
  }, [
    authenticated,
    defaultLoginSuccessPage,
    profileId,
    getState,
    goToPage
  ]);

  return (
    <Styled id="Login" css={css}>
          <LoginForm
            {...props}
            inProgress={inProgress}
            setInProgress={setInProgress}
          ></LoginForm>
    </Styled>
  );
};

export default connect(getLoggedInData)(Login);