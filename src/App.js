import React from 'react';
import CardGroup from './components/card-group';
import Navbar from './components/navbar';
import MyState from './components/my-state';
import Things from './components/things';
import RandomImage from './components/randomImage';
import BoxGroup from './components/box-group';
import MainForm from './components/forms';

import './App.css';
import RegisterForm from './components/register';
import PraticeEffect from './components/praticeEffect';


export default function App() {
  return (
    <div>
      <Navbar />
      <PraticeEffect />
      <RegisterForm />
      <MainForm />
      <BoxGroup />
      <CardGroup />
      <MyState />
      <RandomImage />
      <Things />
    </div>
  )
};
