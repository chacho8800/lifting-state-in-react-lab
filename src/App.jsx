// components
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
// css
import './App.css';

// npm modules
import { useState } from 'react';

const App = () => {

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [ingredient, setIngredient] = useState(availableIngredients)
  const [burgerStack, setBurgerStack] = useState([])

  const addToBurger = (item) => {
    setBurgerStack([...burgerStack, item])
  }

  const removeFromBurger = (index) => {
    const newStack = [...burgerStack]
    newStack.splice(index, 1)
    setBurgerStack(newStack)
  }
 
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        < IngredientList title="Ingredient List" ingredient={ingredient} addToBurger={addToBurger}/>
        < BurgerStack title="Burger Stack" burgerStack={burgerStack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
