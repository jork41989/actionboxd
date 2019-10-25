import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import Search from './search/search_bar';


import MainPage from './main/main_page';
import ProfileContainer from './profile/profile_container';
import '../App.css'
import './graphik-cufonfonts-webfont/style.css'
import './tiempos-headline-cufonfonts-webfont/style.css'

import MoviesIndexContainer from './movies/movies_index_container';
import MoviesShowContainer from './movies/movies_show_container';


const App = () => (
  <div className={'mainDiv'}>
    <div className={'NavDivWidth'}>
    <NavBarContainer />
    </div>
    <div>
      <Search />
    </div>
    <div className={'body'}> 
    <Switch>
      <Route exact path="/" component={MoviesIndexContainer} />
      <Route exact path ="/movies/:movieId" component={MoviesShowContainer} />
      <Route path='/users/:id' component={ProfileContainer} />
     
    </Switch>
    <Modal />
    </div>
  </div>
);

export default App;