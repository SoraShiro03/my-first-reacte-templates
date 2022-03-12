import React from 'react';
import CardGroup from './components/card-group';
import Navbar from './components/navbar';
import MyState from './components/my-state';
import Things from './components/things';
import RandomImage from './components/randomImage';
import BoxGroup from './components/box-group';

import './App.css';


export default function App() {
  return (
    <div>
      <Navbar />
      <BoxGroup />
      <CardGroup />
      <MyState />
      <RandomImage />
      <Things />
    </div>
  )
};
