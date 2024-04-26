

import image from './grocery.jpeg';
import './App.css';
import GroceryList from './GroceryList';
import GroceryImage from './GroceryImage';


function App() {
  const showAlert = () => {
    alert("Clicked");
  }
  return (
    <div>
     <img src={image} alt="grocery" width="300px" />
    <GroceryList />
    <GroceryImage />
    <button onClick={showAlert}>BUTTON</button>

    </div>
  );
}

export default App;
