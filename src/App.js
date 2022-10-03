import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
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
          <Table></Table>
        </Route>
        <Route path="/charts">
          <h1>Chart Library Todo</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
