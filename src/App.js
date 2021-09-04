import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentContainer from "./components/ContentContainer";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import GrowthPath from "./components/GrowthPath/GrowthPath";
import LoadingTitle from "./components/LoadingTitle";
import HeroPage from "./page/Hero/HeroPage";
import ProfilePage from "./page/Profile/ProfilePage";
import GrowPathPage from "./page/GrowthPath/GrowPathPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <LoadingTitle />
          <HeroPage />
          <ProfilePage />
          <ContentContainer />
          <GrowPathPage />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
