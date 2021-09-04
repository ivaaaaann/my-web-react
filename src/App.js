import "./App.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentContainer from "./components/ContentContainer";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import GrowthPath from "./components/GrowthPath";
import LoadingTitle from "./components/LoadingTitle";
import HeroPage from "./page/Hero/HeroPage";

const App = () => {
  return (
    <Router>  
      <Switch>
      <Route exact path="/">
        <Navigation />
        <LoadingTitle />
        <HeroPage/>
        <Profile/>
        <ContentContainer/>
        <GrowthPath/>
        <Footer/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
