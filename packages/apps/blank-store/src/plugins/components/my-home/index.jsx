/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import React from 'react';
import Link from '@oracle-cx-commerce/react-components/link';
import {useNavigator} from '@oracle-cx-commerce/react-components/link';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {t} from '@oracle-cx-commerce/utils/generic';
import css from './styles.css';
import MyMenu from '../my-menu-horizontal';
import CommImageCarousel from '../common-image-carousel';
 
const Home = props => {
  const {helloWorld,home} = props;

  const goToPage = useNavigator();
  
  const goTologin = () => {
    goToPage("login");
  }

  return (
    <div>
    <Styled id="Home" css={css}>
     <MyMenu />
     <div>This is the home</div>
     <CommImageCarousel />
    </Styled>
    </div>
  );
};

export default Home;