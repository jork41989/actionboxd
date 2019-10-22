import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';


import MainPage from './main/main_page';
import ProfileContainer from './profile/profile_container';
import '../App.css'
import './graphik-cufonfonts-webfont/style.css'


const App = () => (
  <div className={'mainDiv'}>
    <div className={'NavDivWidth'}>
    <NavBarContainer />
    </div>
    <div className={'body'}> 
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />


      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
     
    </Switch>
    <Modal />
    </div>
  </div>
);

export default App;