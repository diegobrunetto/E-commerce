import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInOutPage from './pages/sign-in-out/sign-in-out.component';

class App extends React.Component { 
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsuscribeFromAuth = null

  componentDidMount(){
    //this is an open call with firebase server
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)

    
    });
  } 

  componentWillUnmount(){
    // close the call with firebase when the app is closed
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SignInOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
