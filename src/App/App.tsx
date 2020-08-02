import React from 'react';
import Pokecard from '../components/Pokecard';

function App() {
  return (
    <Pokecard
      id={4}
      name="Charmander"
      type="fire"
      baseExperience={62}
    />
  );
}

export default App;
