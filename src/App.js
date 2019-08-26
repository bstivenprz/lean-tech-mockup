import React from 'react';

//Resources
import './App.css';
import Avatar from './img/avatar.png'
import DeliveryTruck from './img/delivery-truck.svg';
import './fonts/flaticon.css';
import Github from './img/github-icon.svg'

//Components
import ToggleSwitch from './components/ToggleSwitch.js';
import Card from './components/Card.js';

function App() {
  return (

    <div className="App">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-2">
            <div className="side-bar">
              <img className="avatar" src={Avatar} alt="Avatar"/>
              <div className="title">
                <p className="t-title"><i className="glyph-ico flaticon-invencion"/>Smart Filters</p>
              </div>
              <hr/>
              <div className="toggle-filters">
                <ToggleSwitch icon="toggle-icon glyph-icon flaticon-sale-tag"/>
                <ToggleSwitch icon="toggle-icon glyph-icon flaticon-pagina-diaria-del-calendario-en-el-dia-31"/>
                <ToggleSwitch icon="toggle-icon glyph-icon flaticon-corazon"/>
              </div>
              <hr/>
              <div className="status-sec">
                <p className="t-title">Status</p>
                <div className="form-group has-search">
                  <input className="form-control has-search" type="text" placeholder="&#xF002; Search"/>
                </div>
                <button className="btn btn-light text-uppercase">Delivered</button>
              </div>
            </div>
          </div>
          <div className="vl"></div>
          <div className="col">
            <nav className="navbar">
              <ul className="nav nav-fill w-100 bg-light">
                <li className="nav-item active">
                  <a href="https://google.com"><span className="glyph-icon flaticon-casa nav-icon"></span><p>Home</p></a>
                </li>
                <li className="nav-item">
                  <a href="https://google.com"><span className="glyph-icon flaticon-sobre nav-icon"></span><p>Messages</p></a>
                </li>
                <li className="nav-item">
                  <a href="https://google.com"><span className="glyph-icon flaticon-estrella nav-icon"></span><p>Wishlist</p></a>
                </li>
                <li className="nav-item">
                  <a href="https://google.com"><span className="glyph-icon flaticon-configuraciones nav-icon"></span><p>Settings</p></a>
                </li>
                <li className="nav-item">
                  <a href="https://google.com"><span className="glyph-icon flaticon-avatar nav-icon"></span><p>My Account</p></a>
                </li>
              </ul>
            </nav>
            <div className="row justify-content-end form-search">
              <div className="form-group has-search">
                <input className="form-control has-search" type="text" placeholder="&#xF002; Search"/>
              </div>
            </div>
            <Card />
            <Card />
            <Card />
          </div>
          <a className="buttom-float">
            <i className="fa fa-plus buttom-float-icon"/>
          </a>
        </div>
        <div className="row justify-content-center align-items-center">
          <img className="github-icon" src={Github} alt="Github Icon"/>
          <a className="github-account" href="#">bstivenprz</a>
        </div>
      </div>
    </div>

  );
}

export default App;
