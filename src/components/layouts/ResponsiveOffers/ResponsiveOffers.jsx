import Slider from 'react-slick';

import data from '../../Data/data.json';
import ResponsiveCardOffers from '../../UI/Cards/ResponsiveCardOffers/ResponsiveCardOffers';
import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';
// import offerRigthImg from '../../../assets/img/offers/offerImage1.jpg';

import './responsive-offers.css'

function ResponsiveOffers() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="simple-slider">
      <Slider {...settings}>  {/* eslint-disable-line */}
        {data.slides.map((item) => (
          <div key={item.id}>
            <ResponsiveCardOffers
              tittleOffer={item.title}
              companie={item.companie}
              cost={item.cost}
              description={item.description}
              offerIcon={offerIcon}
              offerVactNumber={item.offerVactNumber}
              offerNumber={item.offerNumber}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ResponsiveOffers;
/*
<div className="responsive-content-img">
              <img src={offerRigthImg} className="slide-image" alt="" />
            </div>
*/
