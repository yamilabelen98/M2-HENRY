import React from 'react';

export default function Card(props) {
  //const {max, min, name, img, onClose}= props;
  //max={Cairns.main.temp_max}
          //min={Cairns.main.temp_min}
          //name={Cairns.name}
          //img={Cairns.weather[0].icon}
          //onClose={() => alert(Cairns.name)}
  // acá va tu código
  return (
  <div>
    <h3>{props.name}</h3>
<button onClick={props.onClose}>X</button>
<p><label>Max: </label>{props.max}</p>
<p><label>Min: </label>{props.min}</p>
<img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="clima"/>
  </div>
  )
};