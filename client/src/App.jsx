import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Doors from "./pages/Doors";
import Lamine from "./pages/Lamine";
import Laminant from "./pages/Laminant";
import Skirts from "./pages/Skirts";
import ScrollToTop from "./scrollToTop";

function App() {
  return (<>
    
    <Router>
    <Navbar/>
      <ScrollToTop />
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/urunler" component={Products} />
        <Route exact path ="/hakkimizda" component={Aboutus} />
        <Route exact path ="/iletisim" component={Contact} />
        <Route exact path ="/urunler" component={Products}/>
        <Route exact path ="/urunler/kapilar" component={Doors}/>
        <Route exact path ="/urunler/lamineler" component={Lamine}/>
        <Route exact path ="/urunler/laminantlar" component={Laminant}/>
        <Route exact path ="/urunler/supurgelikler" component={Skirts}/>
      </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default App;
