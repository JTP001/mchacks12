import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <MyNavbar />
      <h1>
        McHacks 12 group project
      </h1>

      <p>This website is currently unfinished.</p>
      <Button as="a" variant="primary">Click me</Button>
    </Fragment>
  );
}

export default App;
