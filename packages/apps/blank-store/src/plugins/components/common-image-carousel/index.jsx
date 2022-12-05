/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import React from 'react';
import {TOTAL_NUMBER_OF_IMAGES} from './settings';
import css from './styles.css';
import GenericCarousel from '@oracle-cx-commerce/react-components/generic-carousel';
import Image from '@oracle-cx-commerce/react-widgets/common/image/component';
import PropTypes from 'prop-types';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {isMobile} from '@oracle-cx-commerce/commerce-utils/selector';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';

// This component displays image carousel with hero images.
const CommImageCarousel = props => {
  const {isAutoSlide = false, autoSlideInterval = 3000} = props;

  const mobile = useSelector(isMobile);

  //slide details from widget settings.
  const heroImages = [];

  for (let index = 1; index <= TOTAL_NUMBER_OF_IMAGES; index++) {
    if (props[`slideMedia-${index}`] && props[`slideMedia-${index}`].src) {
      heroImages.push({
        media: props[`slideMedia-${index}`],
        mediaAlt: props[`slideMediaAlt-${index}`],
        mediaLink: props[`slideMediaLink-${index}`],
        mediaLinkBehavior: props[`slideMediaLinkBehavior-${index}`],
        mediaTitle: props[`slideMediaTitle-${index}`]
      });
    }
  }

  // Don't display component when no image is selected
  if (heroImages.length === 0) {
    return null;
  }

  const slides = [];

  for (let index = 0; index < heroImages.length; index++) {
    slides.push(<Image {...heroImages[index]} />);
  }

  return (
    <Styled id="ImageCarousel" css={css}>
      {slides.length > 0 && (
        <div className="ImageCarousel">
          <GenericCarousel
            slides={slides}
            isAutoSlide={isAutoSlide}
            autoSlideInterval={autoSlideInterval}
            mobile={mobile}
            itemsPerSlide={1}
            showIndicator={true}
          />
        </div>
      )}
    </Styled>
  );
};

CommImageCarousel.propTypes = {
  /** Flag used to determine if the slides to translate automatically*/
  isAutoSlide: PropTypes.bool,

  /** Interval time to translate slide if the auto slide is true */
  autoSlideInterval: PropTypes.string,

  /* Below set of properties are related to image slide 1. 
  The same set are the properties for the 5 image slides with the suffix of slide number */

  /* Title value of the image 1 in the slide */
  'slideTitle-1': PropTypes.string,
  /* Media and source value of the image 1 in the slide */
  'slideMedia-1': PropTypes.shape(PropTypes.object.isRequired).isRequired,
  /* Alt text value of the image 1 in the slide */
  'slideMediaAlt-1': PropTypes.string,
  /* Media title value of the image 1 in the slide */
  'slideMediaTitle-1': PropTypes.string,
  /* Media Link value of the image 1 in the slide */
  'slideMediaLink-1': PropTypes.string,
  /*Property which defines if image to open in same window or a new window */
  'slideMediaLinkBehavior-1': PropTypes.string
};

CommImageCarousel.defaultProps = {
  isAutoSlide: true,
  autoSlideInterval: '3',
  'slideTitle-1': '',
  'slideMediaAlt-1': '',
  'slideMediaTitle-1': '',
  'slideMediaLink-1': '',
  'slideMediaLinkBehavior-1': ''
};
export default CommImageCarousel;
