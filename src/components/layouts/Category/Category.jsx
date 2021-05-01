import { useState } from 'react';
import { Card } from 'react-bootstrap';

import data from '../../Data/data.json';
// import CategoryCard from '../../UI/Cards/ResponsiveCardOffers/CategoryCard';
// import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';

import './category.css'

function Category() {
  const [quantityPortal, setQuantityPortal] = useState(0);  // eslint-disable-line
  const [quantityPortazo, setQuantityPortazo] = useState(0);  // eslint-disable-line

  return (
    <>
      <section>
        <div>
          <Card className="summary-section">
            <h1>Resumen</h1>
            <div>
              <h1>{data.slides[0].title}</h1>
              <h2>{quantityPortal}</h2>
              {data.slides[0].cost * quantityPortal}
            </div>
            <div>
              <h1>{data.slides[1].title}</h1>
              <h2>{quantityPortazo}</h2>
              {data.slides[1].cost * quantityPortazo}
            </div>
          </Card>
        </div>
      </section>
      <div className="category">
        <Card className="card-category">
          <div>
            <h3>{data.slides[0].title}</h3>
            <h2>{data.slides[0].cost}</h2>
            <input onChange={(event) => setQuantityPortal(event.target.value)} placeholder="cantidad" />
            <h1>{quantityPortal}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[1].title}</h3>
            <h2>{data.slides[1].cost}</h2>
            <input onChange={(event) => setQuantityPortazo(event.target.value)} placeholder="cantidad" />
            <h1>{quantityPortazo}</h1>
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
