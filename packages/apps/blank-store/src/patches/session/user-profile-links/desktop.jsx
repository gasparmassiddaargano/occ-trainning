/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import React, {useCallback, useEffect, useRef, useState} from 'react';

import CaretDownIcon from '@oracle-cx-commerce/react-components/icons/caret-down';
import {MenuMobileContext} from '@oracle-cx-commerce/react-widgets/common/menu-mobile/context';
import Popover from '@oracle-cx-commerce/react-components/popover';
import PropTypes from 'prop-types';
import Styled from '@oracle-cx-commerce/react-components/styled';
import UserIcon from '@oracle-cx-commerce/react-components/icons/user';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import css from '@oracle-cx-commerce/react-widgets/session/user-profile-links/desktop.css';
import {getAuthenticatedStatus} from '@oracle-cx-commerce/react-widgets/session/user-profile-links/selectors';
import UserProfileLinksMobile from '@oracle-cx-commerce/react-widgets/session/user-profile-links/mobile';

const initialModalView = {
  show: false
};

/**
 * Following User Profile Links Desktop Widget will render the links according to the widget component settings.
 *
 * @param props
 */

const UserProfileLinksDesktop = props => {
  const [modalView, setModalView] = useState(initialModalView);

  const userProfileLinksRef = useRef();

  const handleClick = useCallback(e => {
    if (!userProfileLinksRef.current.contains(e.target)) {
      setModalView({
        show: false
      });
    }
  }, []);

  // Signifies whether the menu sidebar is visible to the user
  const isVisible = useCallback(() => {
    return modalView;
  }, [modalView]);

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const onUserProfileClick = useCallback(() => {
    setModalView({
      show: modalView.show ? false : true
    });
  }, [modalView.show]);

  return (
    <Styled id="UserProfileLinksDesktop" css={css}>
      <div
        ref={userProfileLinksRef}
        className="UserProfileLinksDesktop"
        onKeyPress={onUserProfileClick}
        onClick={onUserProfileClick}
        role="button"
        tabIndex="0"
      >
        <div>
          <span className="UserProfileLinksDesktop_UserIcon">
            <UserIcon />
          </span>
          <span className="UserProfileLinksDesktop__CaretIcon">
            <CaretDownIcon />
          </span>
          <div>
            <Popover show={modalView.show}>
              {
                <MenuMobileContext.Provider value={{isVisible}}>
                  <UserProfileLinksMobile {...props} />
                </MenuMobileContext.Provider>
              }
            </Popover>
          </div>
        </div>
      </div>
    </Styled>
  );
};

UserProfileLinksDesktop.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  isB2BUser: PropTypes.bool.isRequired,
  isDelegatedAdmin: PropTypes.bool.isRequired,
  anonymousPagesDisplayNameAndURL: PropTypes.string,
  authenticatedPagesDisplayNameAndURL: PropTypes.string,
  delegatedAdminUserDisplayNameAndURL: PropTypes.string,
  b2bAuthenticatedPagesDisplayNameAndURL: PropTypes.string,
  approverUserDisplayNameAndURL: PropTypes.string,
  navigationOrientation: PropTypes.string,
  displayIcons: PropTypes.bool
};

UserProfileLinksDesktop.defaultProps = {
  anonymousPagesDisplayNameAndURL: "[{'0':'','1':'','2':''}]",
  authenticatedPagesDisplayNameAndURL: "[{'0':'','1':'','2':''}]",
  delegatedAdminUserDisplayNameAndURL: "[{'0':'','1':'','2':''}]",
  b2bAuthenticatedPagesDisplayNameAndURL: "[{'0':'','1':'','2':''}]",
  approverUserDisplayNameAndURL: "[{'0':'','1':'','2':''}]",
  navigationOrientation: 'vertical',
  displayIcons: true
};
export default connect(getAuthenticatedStatus)(UserProfileLinksDesktop);
