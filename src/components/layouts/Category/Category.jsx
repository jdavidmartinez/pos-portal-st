import { useState } from 'react';
import { Card } from 'react-bootstrap';

import data from '../../Data/data.json';
// import CategoryCard from '../../UI/Cards/ResponsiveCardOffers/CategoryCard';
// import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';

import './category.css'

function Category() {
  const [quantity, setQuantity] = useState(0);  // eslint-disable-line

  return (
    <>
      <div className="category">
        <Card className="card-category">
          <div>
            <h3>{data.slides[0].title}</h3>
            <h2>{data.slides[0].cost}</h2>
            <input onChange={(event) => setQuantity(event.target.value)} placeholder="cantidad" />
            <h1>{quantity}</h1>
          </div>
        </Card>
      </div>
    </>
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
