/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, {useContext, useState, useEffect, useRef} from 'react';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import {Image} from 'react-bootstrap';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import {useNavigator} from '@oracle-cx-commerce/react-components/link';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import styled from 'styled-components';
// import RFIDSessionTimeout from '../common/rfid-session-timeout';
import css from './styles.css';
import {getComponentData} from './selectors';
// import ADBMFavouriteIcon from '../adbm-favourite-icon';
import Sidebar from './Sidebar';
import {isEmptyObject} from '@oracle-cx-commerce/utils/generic';
const ADBMLeftNavigation = props => {
  const {
    firstName,
    lastName,
    pageType,
    route,
    secured,
    tokenExpires,
    orderId,
    numberOfItems,
    commerceItems,
    priceInfo,
    priceListGroup,
    isUserAuthenticated
  } = props;

  const [currentSelectionPage, setCurrentSelectionPage] = useState('');
  const [siteLanguages, setSiteLanguages] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [routeURL, setRouteURL] = useState('');
  const [geteventKey, setgeteventKey] = useState('');
  const {action} = useContext(StoreContext);
  const navigator = useNavigator();
  const store = useContext(StoreContext);

  /** Site Initial settings from props */
  const {additionalLanguages = [], page = '', currentSite, locale, state} = props;
  const [open, setOpen] = useState(false);
  const [selectedLangauage, setSelectedLanguage] = useState('English');
  const {textLanguage} = props;
  /**
   * site settings plain object
   */
  const siteData = {};
  siteData.selectedSiteId = currentSite.id;
  siteData.selectedLocale = locale;
  siteData.selectedAdditionalLanguages = additionalLanguages;
  siteData.defaultLanguage = additionalLanguages.find(language => language.localeId === currentSite.defaultLocaleId);

  /**
   * component's state constants
   */
  const [siteSettings, setSiteSettings] = useState(siteData);

  useEffect(() => {
    if (siteSettings) {
      const temp = [];
      siteSettings.selectedAdditionalLanguages.map(lang => {
        temp.push({
          text: lang.displayName,
          key: lang.localeId,
          name: lang.name,
          // onClick: handleRedirect,
          onClick: () => handleSubmitForm(lang.name),
          onKeyPress: () => handleSubmitForm(lang.name),
          index: lang.localeId
        });
      });
      setSiteLanguages(temp);
    }
  }, []);

  useEffect(() => {
    additionalLanguages.forEach(element => {
      if (element.name === locale.replace('-', '_')) {
        setSelectedLanguage(element.displayName);
      }
    });
  }, [additionalLanguages, locale]);

  const handleSubmitForm = event => {
    const pathUrl = window.location.pathname.split('walmartrfid').pop();
    const newLocale = event;
    const oldLocale = state.clientRepository.context.global.locale.replace('-', '_');
    const page1 = pathUrl.indexOf(oldLocale) > -1 ? pathUrl.split(oldLocale).pop() : pathUrl;

    let url = '';
    if (oldLocale !== newLocale) {
      if (siteSettings.defaultLanguage.name !== newLocale) {
        url = `${location.protocol}//${location.hostname}${state.clientRepository.context.global.baseURI.replace(
          `${oldLocale}/`,
          ''
        )}${newLocale}${page1.charAt(0) === '/' ? page1 : `/${page1}`}`;
      } else {
        url = `${location.protocol}//${location.hostname}${state.clientRepository.context.global.baseURI.replace(
          `${oldLocale}/`,
          ''
        )}${page1.charAt(0) === '/' ? page1.substring(1) : `/${page1}`}`;
      }
    } else {
      url = `${location.protocol}//${location.hostname}${state.clientRepository.context.global.baseURI.replace(
        `${oldLocale}/`,
        ''
      )}${page1.charAt(0) === '/' ? page1.substring(1) : `/${page1}`}`;
    }
    const lastChar = url.slice(-1);
    if (lastChar === '/') {
      url = url.slice(0, -1);
    }
    setSiteSettings(prevState => ({
      ...prevState,
      selectedLocale: newLocale
    }));
    additionalLanguages.forEach(element => {
      if (element.name === newLocale) {
        setSelectedLanguage(element.displayName);
      }
    });
    window.location.assign(url);
  };

  const handleRedirect = e => {
    if (typeof window !== 'undefined') {
      const dataKey = e.target.parentElement.getAttribute('data-key');
      if (dataKey === 'dashboard') {
        setOpen(false);
        navigator('dashboard');
      }
      if (dataKey === 'shop') {
        setOpen(false);
        navigator('search?Ns=W22-RFID.x_itemCode');
      }
      if (dataKey === 'favourites') {
        setOpen(false);
        navigator('favourites');
      }
      if (dataKey === 'orders') {
        setOpen(false);
        navigator('online-orders');
      }
      if (dataKey === 'search') {
        setOpen(false);
        navigator('productsearch');
      }
      if (dataKey === 'cart') {
        navigator('cart');
        setOpen(false);
      }
      if (dataKey === 'orders') {
        setOpen(false);
        navigator('online-orders');
      }
      if (dataKey === 'contactus') {
        setOpen(false);
        navigator('contactus', {target: '_blank'});
      }
      if (dataKey === 'shipping-policy') {
        setOpen(false);
        navigator('shipping-policy');
      }
      if (dataKey === 'terms-and-conditions') {
        setOpen(false);
        navigator('terms-and-conditions', {target: '_blank'});
      }
      if (dataKey === 'faq') {
        setOpen(false);
        navigator('faq');
      }
      if (dataKey === 'howtovideos') {
        setOpen(false);
        navigator('howtovideos');
      }
      if (dataKey === 'savedcart') {
        setOpen(false);
        navigator('savedcart');
      }
      if (dataKey === 'cookiepolicy') {
        window.open('https://www.averydennison.com/content/corp/na/en/home/cookie-policy.html', '_blank');
      }
      if (dataKey === 'gdpr-statement') {
        window.open('https://www.averydennison.com/content/corp/na/en/home/gdpr-statement.html', '_blank');
      }
      if (dataKey === 'profile-2') {
        setOpen(false);
        navigator('account-settings');
      }
      if (dataKey === 'profile-3') {
        setOpen(false);
        action('logout').then(response => {
          if (response.ok) {
            navigator('home');
          }
        });
      }
      if (dataKey === 'profile-1') {
        setOpen(false);
        navigator('account-address-book');
      }
    }
  };

  //   useEffect(() => {
  //     if (isUserAuthenticated) {
  //       action('getCurrentProfile')
  //         .then(response => {})
  //         .catch(err => {
  //           console.log(err);
  //         });
  //       action('getCart', {})
  //         .then(response => {
  //           console.log(response);
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     }
  //   }, [isUserAuthenticated, orderId]);

  useEffect(() => {
    // updateRouteURL()
    setRouteURL(route?.replace('/', ''));
    setCurrentSelectionPage(localStorage.getItem('currentSelection'));
  }, [route]);
  const primaryItems = [
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            numberOfItems !== undefined && Object.keys(commerceItems).length >= 1
              ? routeURL === 'dashboard'
                ? 'dash-icon-red'
                : 'dash-empty-full'
              : routeURL === 'dashboard'
              ? 'dash-icon-red'
              : 'dash-empty-full'
          }`}
        ></div>
      ),
      text: props.labelDashboard,
      subMenuPlacement: 'left-start',
      index: 'dashboard',
      selected: false,
      onClick: handleRedirect
    },
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            // (numberOfItems != undefined && Object.keys(commerceItems).length >= 1) ?
            //     routeURL === "search" ? 'shop-icon-red' : 'shop-empty-full' : routeURL === "search" ? 'shop-icon-red' : 'shop-empty-full'
            routeURL === 'search' || routeURL === 'product' ? 'shop-icon-red' : 'shop-empty-full'
          }`}
        ></div>
      ),
      text: props.labelShop,
      index: 'shop',
      subMenuPlacement: 'left-start',
      onClick: handleRedirect,
      className: routeURL === 'search' || routeURL === 'product' ? 'item-selected-red' : 'item-text'
    },
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            numberOfItems !== undefined && Object.keys(commerceItems).length >= 1
              ? routeURL === 'favourites'
                ? 'fav-icon-red'
                : 'fav-empty-full'
              : routeURL === 'favourites'
              ? 'fav-icon-red'
              : 'fav-empty-full'
          }`}
        ></div>
      ),
      text: props.labelFavorites,
      index: 'favourites',
      subMenuPlacement: 'left-start',
      onClick: handleRedirect
    }
  ];
  const secondaryItems = [
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            numberOfItems !== undefined && Object.keys(commerceItems).length >= 1
              ? routeURL === 'productsearch'
                ? 'search-icon-red'
                : 'search-empty-full'
              : routeURL === 'productsearch'
              ? 'search-icon-red'
              : 'search-empty-full'
          }`}
        ></div>
      ),
      text: props.labelSearch,
      index: 'search',
      subMenuPlacement: 'left-end',
      onClick: handleRedirect
    },
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            numberOfItems !== undefined && Object.keys(commerceItems).length >= 1
              ? routeURL === 'online-orders' ||
                routeURL.includes('order-details') ||
                routeURL.includes('order-item-details')
                ? 'order-icon-red'
                : 'order-empty-full'
              : routeURL === 'online-orders' ||
                routeURL.includes('order-details') ||
                routeURL.includes('order-item-details')
              ? 'order-icon-red'
              : 'order-empty-full'
          }`}
        ></div>
      ),
      text: props.labelOrders,
      subMenuPlacement: 'left-end',
      index: 'orders',
      onClick: handleRedirect
    },
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            numberOfItems !== undefined && Object.keys(commerceItems).length >= 1
              ? routeURL === 'cart' ||
                routeURL === 'checkout' ||
                routeURL.includes('checkout-order-confirmation') ||
                routeURL === 'checkout-shipment-items-details' ||
                routeURL === 'checkout-shipment-items' ||
                routeURL === 'empty_cart'
                ? ' cart-icon-full-red'
                : ' cart-icon-full'
              : routeURL === 'cart' ||
                routeURL === 'checkout' ||
                routeURL.includes('checkout-order-confirmation') ||
                routeURL === 'checkout-shipment-items-details' ||
                routeURL === 'checkout-shipment-items' ||
                routeURL === 'empty_cart'
              ? ' cart-icon-empty-red'
              : ' cart-icon-empty'
          }`}
        ></div>
      ),
      onClick: handleRedirect,
      text: props.labelShoppingCart,
      subMenuPlacement: 'left-end',
      index: 'cart'
    },
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            numberOfItems !== undefined && Object.keys(commerceItems).length >= 1
              ? routeURL === 'contactus' ||
                routeURL === 'faq' ||
                routeURL === 'howtovideos' ||
                routeURL === 'terms-and-conditions' ||
                routeURL === 'shipping-policy'
                ? 'help-icon-red'
                : 'help-icon'
              : routeURL === 'contactus' ||
                routeURL === 'faq' ||
                routeURL === 'howtovideos' ||
                routeURL === 'terms-and-conditions' ||
                routeURL === 'shipping-policy'
              ? 'help-icon-red'
              : 'help-icon'
          }`}
        ></div>
      ),
      text: props.labelGetHelp,
      subMenuPlacement: 'left-end',
      index: 'help',
      childrenItems: [
        {
          text: props.labelContactUs,
          index: 'contactus',
          onClick: handleRedirect
        },
        {
          text: props.labelFAQ,
          index: 'faq',
          onClick: handleRedirect
        },
        {
          text: props.labelQuick,
          index: 'howtovideos',
          onClick: handleRedirect
        },
        {
          className: 'itemsub-help',
          text: props.labelTermsConditions,
          index: 'terms-and-conditions',
          onClick: handleRedirect
        },
        {
          className: 'itemsub-help',
          text: props.labelShippingPolicy,
          index: 'shipping-policy',
          onClick: handleRedirect
        },
        {
          className: 'itemsub-help',
          text: props.labelCookiePolicy,
          index: 'cookiepolicy',
          onClick: handleRedirect
        },
        {
          className: 'itemsub-help',
          text: props.labelGDPR,
          index: 'gdpr-statement',
          onClick: handleRedirect
        }
      ]
    },
    {
      icon: <div className={`icon-filter navigation-icon leftnav-languages`}></div>,
      text: props.labelLanguages,
      subMenuPlacement: 'left-start',
      index: 'languages',
      onClick: handleRedirect,
      childrenItems: siteLanguages
    },
    {
      icon: (
        <div
          className={`icon-filter navigation-icon ${
            numberOfItems != undefined && Object.keys(commerceItems).length >= 1
              ? routeURL === 'account-address-book' ||
                routeURL === 'edit-account-address' ||
                routeURL === 'account-settings' ||
                routeURL === 'savedcart'
                ? 'profile-icon-red'
                : 'profile-icon'
              : routeURL === 'account-address-book' ||
                routeURL === 'edit-account-address' ||
                routeURL === 'account-settings' ||
                routeURL === 'savedcart'
              ? 'profile-icon-red'
              : 'profile-icon'
          }`}
        ></div>
      ),
      text: `${firstName} ${lastName}`,
      subMenuPlacement: 'left-end',
      onClick: handleRedirect,
      index: 'profile',
      childrenItems: [
        {
          text: props.labelSavedCarts,
          onClick: handleRedirect,
          index: 'savedcart'
        },
        {
          text: props.labelAddressBook,
          onClick: handleRedirect,
          index: 'profile-1'
        },
        {
          text: props.labelAcount,
          onClick: handleRedirect,
          index: 'profile-2'
        },
        {
          text: props.labelLogout,
          onClick: handleRedirect,
          index: 'profile-3'
        }
      ]
    }
  ];

  return (
    <Styled id="ADBMLeftNavigation" css={css}>
      <Sidebar
        open={open}
        setOpen={setOpen}
        menuText="menu"
        backButtonText="Back"
        primaryItems={primaryItems}
        secondaryItems={secondaryItems}
        firstName={firstName}
        lastName={lastName}
      />
      {secured && <RFIDSessionTimeout timeout={tokenExpires} {...props} />}
    </Styled>
  );
};
export default connect(getComponentData)(ADBMLeftNavigation);
