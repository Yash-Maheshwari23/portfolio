import {Route,Switch} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/cv" exact>
            <Cv/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
