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
  const [quantityHJunior, setQuantityHJunior] = useState(0);  // eslint-disable-line
  let Portal = data.slides[0].cost * quantityPortal; // eslint-disable-line
  let Portazo = data.slides[1].cost * quantityPortazo; // eslint-disable-line
  let HPollo = data.slides[3].cost * quantityHPollo; // eslint-disable-line
  let Ranchera = data.slides[2].cost * quantityRanchera; // eslint-disable-line
  let Nortena = data.slides[4].cost * quantityNortena; // eslint-disable-line
  let Cheese = data.slides[5].cost * quantityCheese;// eslint-disable-line
  let Arepa = data.slides[6].cost * quantityArepa;// eslint-disable-line
  let HJunior = data.slides[7].cost * quantityHJunior; // eslint-disable-line

  return (
    <>
      <section className="general-section">
        <div>
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
                <h1>{quantityHJunior}</h1>
              </div>
            </Card>
          </div>
          <div className="category-others">
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
                <h1>{quantityHJunior}</h1>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <Card className="summary-section">
            <h1>Resumen</h1>
            {quantityPortal > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[0].title}</h1>
                <h2>{quantityPortal}</h2>
                {Portal}
              </div> : null }
              {quantityPortazo > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[1].title}</h1>
                <h2>{quantityPortazo}</h2>
                {Portazo}
              </div> : null }
              {quantityRanchera > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[2].title}</h1>
                <h2>{quantityRanchera}</h2>
                {Ranchera}
              </div> : null }
              {quantityHPollo > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[3].title}</h1>
                <h2>{quantityHPollo}</h2>
                {HPollo}
              </div> : null }
              {quantityNortena > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[4].title}</h1>
                <h2>{quantityNortena}</h2>
                {Nortena}
              </div> : null }
              {quantityCheese > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[5].title}</h1>
                <h2>{quantityCheese}</h2>
                {Cheese}
              </div> : null }
              {quantityArepa > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[6].title}</h1>
                <h2>{quantityArepa}</h2>
                {Arepa}
              </div> : null }
              {quantityHJunior > 0 ?  // eslint-disable-line
              <div>  { /* eslint-disable-line */ }
                <h1>{data.slides[7].title}</h1>
                <h2>{quantityHJunior}</h2>
                {HJunior}
              </div> : null }
            <div>
              Total :
              {Portal + Portazo + HPollo + Ranchera + Nortena + Cheese + Arepa + HJunior}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Category;
