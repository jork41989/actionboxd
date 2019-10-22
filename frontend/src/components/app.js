import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';


import MainPage from './main/main_page';
import ProfileContainer from './profile/profile_container';
import '../App.css'
import './graphik-cufonfonts-webfont/style.css'

import MoviesIndexContainer from './movies/movies_index_container';


const App = () => (
  <div className={'mainDiv'}>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <Route exact path ="/movies" component={MoviesIndexContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
     
    </Switch>
    <Modal />
  </div>
);

export default App;