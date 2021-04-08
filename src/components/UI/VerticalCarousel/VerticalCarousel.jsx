/* Offers UI-Component */
import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import OffersCardJob from '../Cards/OffersCardJob/OffersCardJob';
import OfferRigthCardJob from '../Cards/OfferRigthCardJob/OfferRigthCardJob';
import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg'

import { ReactComponent as Next } from '../../../assets/icons/svg/chevronDown.svg';
import { ReactComponent as Prev } from '../../../assets/icons/svg/chevronUp.svg';

import './vertical-carousel.css';

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

const VerticalCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 3);

  // Used to determine the height/spacing of each item
  const itemHeight = 180;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => { // eslint-disable-line
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      }
      return -(data.length + activeIndex - itemIndex) * itemHeight;
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <div className="container">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick('prev')}
          >
            <Prev />
          </button>

          <div className="carousel">
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn('carousel-item', {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`
                    }}
                  >
                    <OffersCardJob
                      tittleOffer={item.title}
                      companie={item.companie}
                      salary={item.salary}
                      description={item.description}
                      offerIcon={offerIcon} // ERROR: identify how to call from data file
                      offerVactNumber={item.offerVactNumber}
                      offerNumber={item.offerNumber}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick('next')}
          >
            <Next />
          </button>
        </div>
        <div className="content">
          <OfferRigthCardJob
            tittleOffer={data[activeIndex].title}
            skillOffer={data[activeIndex].skills}
            whishedSkill={data[activeIndex].whishedSkill}
            backGround={data[activeIndex].backGround}
          />
        </div>
      </section>
    </div>
  );
};

VerticalCarousel.propTypes = {
  data:PropTypes.array.isRequired, // eslint-disable-line
};

export default VerticalCarousel;
/* <div className="content">
          <img
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.title}
          />
          <OfferRigthCardJob />
          <p>{data[activeIndex].content.copy}</p>
        </div> */
