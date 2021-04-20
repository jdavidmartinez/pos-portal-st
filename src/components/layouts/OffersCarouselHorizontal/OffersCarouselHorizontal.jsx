import { Component } from 'react';
import Carousel from 'react-elastic-carousel';

import OffersCardJob from '../../UI/Cards/OffersCardJob/OffersCardJob';
import offerIcon from '../../../assets/icons/svg/offer-programmer-icon.svg';
import data from '../../Data/data.json';

class OffersCarouselHorizontal extends Component {
    state = { // eslint-disable-line
      items: data.slides
    }

    render() {
      const { items } = this.state;
      return (
        <Carousel enableAutoPlay autoPlaySpeed={1500}>
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
/*
 class Archive extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: data,
      category: ""
    };
    this.filterHandler = this.filterHandler.bind(this);
  }
  {
        "title": "Desarrollador",
        "id": "desarrollador",
        "companie": "Perfiltic",
        "salary": "$5.000.000",
        "description": "!BUSCAMOS¡ profesor en Lenguaje GO",
        "offerIcon":"../../../assets/icons/svg/offer-programmer-icon.svg",
        "offerVactNumber": "Vact#52",
        "offerNumber": "01",
        "offerRigthImg": "/static/media/../Cards/OfferRigthCardJob/OfferRigthCardJob",
      },
*/
