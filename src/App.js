import { Route, Switch } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Cv from "./Pages/Cv";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cv" exact>
            <Cv />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
