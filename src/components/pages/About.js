import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Desk from    './sub_pages/About/PrincipalsDesk'
import Resources from    './sub_pages/About/HumanResources'

import NotFound from './NotFound';
import Contact from './sub_pages/About/Contact';

function About() {
  return (
    <>
     <Router>
          <Switch>
                    <Route path={'/about'} exact >
                      <Redirect to={'/about/principal'}/>
                    </Route>
                    <Route path="/about/principal" component={Desk}   exact/>
                    <Route path="/about/hrm" component={Resources}   exact/>
                    <Route path="/about/contact" component={Contact}   exact/>

                  <Route path="*" component={NotFound}  />
            </Switch>
      </Router>
    
    
    </>
  )
}

export default About