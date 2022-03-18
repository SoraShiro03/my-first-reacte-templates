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
import WindowTracker from './components/windowTracker';


export default function App() {
  const [show, setShow] = React.useState(true)

  function toggle() {
    setShow(prevState => !prevState)

  }
  //console.log(windowResizeValue, show)
  return (
    <div>
      <Navbar />
      <button onClick={toggle}>Show
        {show && <WindowTracker
          name="windowTracker"
          show={show}
        />}
      </button>
      {/* <PraticeEffect />
      <RegisterForm />
      <MainForm />
      <BoxGroup />
      <CardGroup />
      <MyState />
      <RandomImage />
      <Things /> */}
    </div>
  )
};
