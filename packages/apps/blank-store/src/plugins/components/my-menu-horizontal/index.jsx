/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import React,{useEffect,useState} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {t} from '@oracle-cx-commerce/utils/generic';
import css from './styles.css';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import Link from '@oracle-cx-commerce/react-components/link';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';
import {useNavigator} from '@oracle-cx-commerce/react-components/link';

const MyMenu = props => {

const goToPage = useNavigator();
const [activemenu,setActiveMenu] = useState("home");

const changeMenu =(menu) => {
  
  console.log(menu);

  if (menu === "home"){
      setActiveMenu("home");
      goToPage("home");
    }
  if (menu === "login"){
      setActiveMenu("login");
      goToPage("login");
  }
}
    return (      
    <Styled id="MyMenu" css={css}>
    <div className="MyMenu">  
    <ul className="MyMenu__ul">
      <li className="MyMenu__li"><Link href="./home"  className="active" >Home</Link></li>
      <li className="MyMenu__li"><Link href="./">Dashboard</Link></li>
      <li className="MyMenu__li"><Link href="./login" onClick={(e)=>{ goToPage("login"); }} >Login</Link></li>
    </ul>
    </div>
    </Styled>
    ); 
};

export default MyMenu;