import React from 'react';
import './ToggleSwitch.css';

function ToggleSwitch(props) {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <i className={props.icon}></i>
        </div>
        <div className="col">
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
