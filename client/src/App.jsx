import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (<>
    
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/urunler" component={Products} />
      </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default App;
