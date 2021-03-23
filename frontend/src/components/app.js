import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import { Helmet } from "react-helmet";




import ProfileContainer from './profile/profile_container';
import '../App.css'
import './graphik-cufonfonts-webfont/style.css'
import './tiempos-headline-cufonfonts-webfont/style.css'

import MoviesIndexContainer from './movies/movies_index_container';
import MoviesShowContainer from './movies/movies_show_container';
import ActorsShowContainer from './actors/actors_show_container';
import AdminPortalContainer from './admin-portal/admin_portal_container';
import Seo from './seo/seo';

// import SettingsContainer from './profile/settings_container';

const App = () => (
  <div className={"mainDiv"}>
   <Seo/>
    <div className={"NavDivWidth"}>
      <NavBarContainer />
    </div>
    <div className={"body"}>
      <Switch>
        <Route exact path="/" component={MoviesIndexContainer} />
        <Route exact path="/movies/:movieId" component={MoviesShowContainer} />
        <Route exact path="/actors/:actorId" component={ActorsShowContainer} />
        {/* <Route exact path="/users/:id/settings" component={SettingsContainer} /> */}
        <Route path="/users/:id" component={ProfileContainer} />
        <Route path="/admin" component={AdminPortalContainer} />
      </Switch>
      <Modal />
    </div>
  </div>
);

export default App;