import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import SchoolActivities from './sub_pages/News/SchoolActivities';
import SchoolNews from './sub_pages/News/SchoolNews';
import NotFound from './NotFound';

function News() {
  return (
    <>
          <Router>
              <Switch>
                        <Route path={'/news'} exact >
                          <Redirect to={'/news/school_news'}/>
                        </Route>
                        <Route path="/news/school_news" component={SchoolNews}   exact/>
                        <Route path="/news/school_activities" component={SchoolActivities}   exact/>
                      <Route path="*" component={NotFound}  />
                </Switch>
          </Router>
    
    
    
    </>
  )
}

export default News