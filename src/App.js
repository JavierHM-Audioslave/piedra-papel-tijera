import history from "./Helpers/history";
import { Router, Switch, Route } from "react-router-dom";
import SelectionDashboard from './Components/SelectionDashboard';


const App = () => {


  return (

    <Router history={history}>
      <Switch>


        <Route exact path="/" component={SelectionDashboard} />
      </Switch>
    </Router>

  );
}

export default App;
