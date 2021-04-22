/* OffersCarouselHorizontal /layout compimonent */
import { Component } from 'react';
import Carousel from 'react-elastic-carousel';
// import styled from 'styled-components'

import OffersCardJob from '../../UI/Cards/OffersCardJob/OffersCardJob';
import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';
import data from '../../Data/data.json';
import './offers-carousel-horizontal.css';

class OffersCarouselHorizontal extends Component {
    state = { // eslint-disable-line
      items: data.slides
    }

    render() {
      const { items } = this.state;
      return (
        <Carousel enableAutoPlay autoPlaySpeed={2000}>
          {items.map((item) => (
            <div key={item.id}>
              <OffersCardJob
                tittleOffer={item.title}
                companie={item.companie}
                salary={item.salary}
                description={item.description}
                offerIcon={offerIcon}
                offerVactNumber={item.offerVactNumber}
                offerNumber={item.offerNumber}
              />
            </div>
          ))}
        </Carousel>
      )
    }
}
export default OffersCarouselHorizontal;
