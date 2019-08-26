import React from 'react';
import './Card.css';
import DeliveryTruck from '../img/delivery-truck.svg';

function Card(props) {
  return(
    <div className="row align-items-center delivery-info">
      <div className="col-md-1 ">
        <i className="delivery-icon-check glyp-icon flaticon-exito"/>
      </div>
      <div className="col-md-11 card-info">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-2 delivery-date">
            <p className="delivery-date">Monday<br/>10th 2:28<br/>PM</p>
          </div>
          <div className="vl-2"></div>
          <div className="col-md-3 d-flex justify-content-between align-items-center delivery-locations">
            <i className="glyph-icon flaticon-cursor"/>
            <div className="delivery-locations-text">
              <p>Houston, TX, 33619</p>
              <i className="glyph-icon flaticon-senal-de-flecha-hacia-abajo-para-navegar"></i>
              <p>Houston, TX, 33619</p>
            </div>
          </div>
          <div className="vl-2"></div>
          <div className="col-md-6 align-items-center">
            <img className="delivery-truck" src={DeliveryTruck} alt="Delivery Truck Icon"/>
            <span className="delivery-cost">$250.00</span>
            <div className="badge badge-danger p-3">1</div>
            <i className="glyph-icon flaticon-mas-boton-de-tres-puntos rotate-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
