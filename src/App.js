import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={Table}>
          <Table />
        </Route>
        <Route path="/charts" component={Chart}>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
