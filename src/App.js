import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Title} />
      <Route path="/" exact={true} component={ContentContainer} />
    </HashRouter>
  );
}

export default App;
