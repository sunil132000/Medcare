import "./styles.css";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import ISection from "./Components/ISection";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Section7 from "./Components/Section7";
import Section8 from "./Components/Section8";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <ISection />
      {/* <Switch>
        <Route path="/" component={Header}/>
      </Switch> */}
      {/* <Contact /> */}
      {/* <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          
        </Switch> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}
