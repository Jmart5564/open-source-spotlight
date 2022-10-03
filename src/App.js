import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={Table}>
          <H1>This is a Table</H1>
          <Table />
        </Route>
        <Route path="/charts" component={Chart}>
          <H1>This is a Chart</H1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
