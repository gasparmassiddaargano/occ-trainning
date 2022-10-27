import {
  getCurrentProfile,
  isAuthenticated,
  getCurrentOrder,
  getPage,
  getSessionContext,
  getGlobalContext,
  getRequestContext,
  getSite,
  getSites
} from '@oracle-cx-commerce/commerce-utils/selector';

export const getComponentData = state => {
  const {firstName, lastName} = getCurrentProfile(state);
  const {pageType, route, secured} = getPage(state);
  const currentPage = getPage(state);
  const {tokenExpires} = getSessionContext(state);
  const {id: orderId, numberOfItems, commerceItems, priceInfo} = getCurrentOrder(state);
  const isUserAuthenticated = isAuthenticated(state);
  const currentSite = getSite(state);
  const {additionalLanguages, priceListGroupList} = currentSite;
  const {priceListGroup, locale} = getGlobalContext(state);
  const {page} = getRequestContext(state);
  const allSites = getSites(state);

  return {
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
    isUserAuthenticated,
    additionalLanguages,
    allSites,
    page,
    currentSite,
    locale,
    priceListGroupList,
    state,
    currentPage
  };
};

export const getSiteData = state => {
  const currentSite = getSite(state);
  const {additionalLanguages, priceListGroupList} = currentSite;
  const {priceListGroup, locale} = getGlobalContext(state);
  const {page} = getRequestContext(state);
  const allSites = getSites(state);

  return {
    additionalLanguages,
    allSites,
    priceListGroup,
    page,
    currentSite,
    locale,
    priceListGroupList,
    state
  };
};
