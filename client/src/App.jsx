import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (<>
    {/* <Navbar/> */}
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/ürünler" component={Products} />
      </Switch>
    </Router>
    {/* <Footer/> */}
    </>
  )
}

export default App;
