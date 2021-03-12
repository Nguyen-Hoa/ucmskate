import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import SkaterMap from './components/skater-map/SkaterMap';
import SpringHome from './components/homepage/SpringHome';

// Test Components
// import Home from './components/homepage/Home';
// import SpringTest from './components/spring-test/SpringTest';
// import CheckinForm from './components/check-in-form/CheckinForm';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import IconRadioGroup from './components/icon-radio-group/IconRadioGroup';
// import { bobcat_cute, bobcat_head } from './assets/img';

import './css/App.css';
// import { Spring } from 'react-spring/renderprops';

export default function App() {

  return(
    <BrowserRouter className="App">
      <Switch>
        <Route exact path='/' component={SpringHome}/>
        
        <Route exact path='/whoisskating' 
          render={() => (
            <Layout>
              <SkaterMap/>
            </Layout>
          )}
        />
        
      </Switch>
    </BrowserRouter>
  );
}

