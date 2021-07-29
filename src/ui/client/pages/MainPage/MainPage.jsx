import React, { Component } from 'react';
import img from '@/images/images.png';
import './MainPage.scss';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Main page <img className='client__img' src={img} alt=""/></h1>
      </div>
    );
  }
}


export default MainPage;
