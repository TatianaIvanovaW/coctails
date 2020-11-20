import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoctailsList from "./pages/CoctailsList";
import CoctailPage from "./pages/CoctailPage";
import SearchPage from "./pages/SearchPaage";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/home/:list/:coctail" component={CoctailPage} />
        <Route path="/home/:list" component={CoctailsList} />
        <Route path="/search/:params" component={SearchPage} />
        <Route path="/search" component={SearchPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
