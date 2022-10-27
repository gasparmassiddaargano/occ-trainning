/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import React,{useEffect,useState} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {t} from '@oracle-cx-commerce/utils/generic';
import css from './styles.css';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import {connect} from '@oracle-cx-commerce/react-components/provider';


const Newcomponent = props => {
   
  return (
    <Styled id="HelloWorld" css={css}>
      <h4>New Component</h4>
      <div className="HelloWorld">new hello</div>
    </Styled>
  );
};

export default Newcomponent;
