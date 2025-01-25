import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import MyNavbar from './components/MyNavbar';
import Main from './components/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <Main />
    </Fragment>
  );
}

export default App;
