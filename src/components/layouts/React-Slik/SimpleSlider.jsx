import Slider from 'react-slick';

import data from '../../Data/data.json';
import OffersCardJob from '../../UI/Cards/OffersCardJob/OffersCardJob';
import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';
import offerRigthImg from '../../../assets/img/offers/offerImage1.jpg';

import './simple-slider.css'

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="simple-slider">
      <h2> Single Item</h2>
      <Slider {...settings}> 
      {data.slides.map((item) => (
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
              <img src={offerRigthImg}></img>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
