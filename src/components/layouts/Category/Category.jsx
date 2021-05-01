import { useState } from 'react';
import { Card } from 'react-bootstrap';

import data from '../../Data/data.json';
// import CategoryCard from '../../UI/Cards/ResponsiveCardOffers/CategoryCard';
// import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';

import './category.css'

function Category() {
  const [quantityPortal, setQuantityPortal] = useState(0);  // eslint-disable-line
  const [quantityPortazo, setQuantityPortazo] = useState(0);  // eslint-disable-line
  const [quantityRanchera, setQuantityRanchera] = useState(0);  // eslint-disable-line
  const [quantityHPollo, setQuantityHPollo] = useState(0);  // eslint-disable-line
  const [quantityNortena, setQuantityNortena] = useState(0);  // eslint-disable-line
  const [quantityCheese, setQuantityCheese] = useState(0);  // eslint-disable-line
  const [quantityArepa, setQuantityArepa] = useState(0);  // eslint-disable-line
  const [quantityHJunion, setQuantityHJunior] = useState(0);  // eslint-disable-line

  return (
    <>
      <section>
        <div>
          <Card className="summary-section">
            <h1>Resumen</h1>
            {quantityPortal > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[0].title}</h1>
                <h2>{quantityPortal}</h2>
                {data.slides[0].cost * quantityPortal}
              </div> : null }
              {quantityPortazo > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[1].title}</h1>
                <h2>{quantityPortazo}</h2>
                {data.slides[1].cost * quantityPortazo}
              </div> : null }
              {quantityRanchera > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[2].title}</h1>
                <h2>{quantityRanchera}</h2>
                {data.slides[2].cost * quantityRanchera}
              </div> : null }
              {quantityHPollo > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[3].title}</h1>
                <h2>{quantityHPollo}</h2>
                {data.slides[3].cost * quantityHPollo}
              </div> : null }
              {quantityNortena > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[4].title}</h1>
                <h2>{quantityNortena}</h2>
                {data.slides[4].cost * quantityNortena}
              </div> : null }
              {quantityCheese > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[5].title}</h1>
                <h2>{quantityCheese}</h2>
                {data.slides[5].cost * quantityCheese}
              </div> : null }
              {quantityArepa > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[6].title}</h1>
                <h2>{quantityArepa}</h2>
                {data.slides[6].cost * quantityArepa}
              </div> : null }
              {quantityHJunion > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[7].title}</h1>
                <h2>{quantityHJunion}</h2>
                {data.slides[7].cost * quantityHJunion}
              </div> : null }
          </Card>
        </div>
      </section>
      <div className="category">
        <Card className="card-category">
          <div>
            <h3>{data.slides[0].title}</h3>
            <h2>{data.slides[0].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityPortal(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityPortal}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[1].title}</h3>
            <h2>{data.slides[1].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityPortazo(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityPortazo}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[2].title}</h3>
            <h2>{data.slides[2].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityRanchera(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityRanchera}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[3].title}</h3>
            <h2>{data.slides[3].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityHPollo(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityHPollo}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[4].title}</h3>
            <h2>{data.slides[4].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityNortena(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityNortena}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[5].title}</h3>
            <h2>{data.slides[5].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityCheese(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityCheese}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[6].title}</h3>
            <h2>{data.slides[6].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityArepa(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityArepa}</h1>
          </div>
        </Card>
        <Card className="card-category">
          <div>
            <h3>{data.slides[7].title}</h3>
            <h2>{data.slides[7].cost}</h2>
            <input
              className="category-place-holder"
              onChange={(event) => setQuantityHJunior(event.target.value)}
              placeholder="cantidad"
            />
            <h1>{quantityHJunion}</h1>
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
