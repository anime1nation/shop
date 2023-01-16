import Header from "./common/header/Header.jsx"
import "./App.css";
import Routes from "./Routers";


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Card /> */}
      <Routes/>
      {/* <Cart /> */}
    </div>
  );
}

export default App;