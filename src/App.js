import React from 'react';
import CardGroup from './components/card-group';
import Navbar from './components/navbar';
import MyState from './components/my-state';
import Things from './components/things';
import './App.css';


export default function App() {
  return (
    <div>
      <Navbar />
      <CardGroup />
      <MyState />
      <Things />
    </div>
  )
};
