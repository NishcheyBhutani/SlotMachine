import React from 'react';
import SlotM from './SlotMach';



const App = () => {
  return (
    <>
      <h1 className="heading_style">
        π°Welcome to <span style={{ fontWeight: 'bold' }}>Slot Machine Game
   </span>
   π°</h1>

      <SlotM x='π' y='π' z='π' />
      <SlotM x='π' y='π' z='π' />
      <SlotM x='π¦' y='π¦' z='π¦' />
      <SlotM x='π' y='π' z='π¦' />



    </>
  );
}

export default App;