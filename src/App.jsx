import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopItemClass from "./ShopItemClass";
import ShopModel from "./models/ShopModel";

function App() {
  const item = ShopModel.items;

  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;
