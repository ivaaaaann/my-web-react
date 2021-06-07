import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import ContentContainer from "./components/ContentContainer";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import GrowthPath from "./components/GrowthPath";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Title} />
      <Route path="/" exact={true} component={Profile} />
      <Route path="/" exact={true} component={ContentContainer} />
      <Route path="/" exact={true} component={GrowthPath} />
      <Route path="/" exact={true} component={Footer} />
    </HashRouter>
  );
}

export default App;