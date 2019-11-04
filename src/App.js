import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
// import 'bootstrap/dist/css/bootstrap.css';
// import NavBar from './components/common/navbar';

function App() {
  return (
    <Router>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to={'/'} className='navbar-brand'>
            MERN CRUD
          </Link>

          <div className='navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to={'/create'} className='nav-link'>
                  Create
                </Link>
              </li>

              <li className='nav-item'>
                <Link to={'/index'} className='nav-link'>
                  Index
                </Link>
              </li>

              <li className='nav-item'>
                <Link to={'/edit'} className='nav-link'>
                  Edit
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br></br>
        <p>Welcome to MERN CRUD</p>

        <Switch>
          <Route exact path='/create' component={Create} />
          <Route exact path='/edit:id' component={Edit} />
          <Route exact path='/index' component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
