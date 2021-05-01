import { useState } from 'react';

import data from '../../Data/data.json';
import CategoryCard from '../../UI/Cards/ResponsiveCardOffers/CategoryCard';
import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';

import './category.css'

function Category() {
  const [quantity, setTitle] = useState('');  // eslint-disable-line

  return (
    <div className="category">
      {data.slides.map((item) => (
        <div key={item.id}>
          <CategoryCard
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
    </div>
  );
}

export default Category;
/*
function Category() {
  const [quantity, setTitle] = useState('');  // eslint-disable-line

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="simple-slider">
      <Slider {...settings}>
      {data.slides.map((item) => (
        <div key={item.id}>
          <CategoryCard
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

export default Category;
*/
