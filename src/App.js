import Header from "./common/header/Header.jsx"
import Card from "./pages/home/components/Card.jsx"
import Cart from "pages/cart/Cart.jsx";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Cart />
    </div>
  );
}

export default App;