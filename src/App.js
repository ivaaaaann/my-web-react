import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GrowthPath from "./components/GrowthPath/GrowthPath";
import LoadingTitle from "./components/LoadingTitle";
import HeroPage from "./page/Hero/HeroPage";
import ProfilePage from "./page/Profile/ProfilePage";
import GrowPathPage from "./page/GrowthPath/GrowPathPage";
import ProjectPage from "./page/Project/ProjectPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <LoadingTitle />
          <HeroPage />
          <GrowPathPage />
          <ProfilePage />
          <ProjectPage />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
