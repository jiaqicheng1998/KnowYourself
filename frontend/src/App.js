import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SingleArticle from "./components/SingleArticle";
import AddArticle from './components/AddArticle';
import WrongPlace from "./components/WrongPlace";
import * as sessionActions from './store/session'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/articles/new'>
            <AddArticle isLoaded={isLoaded}/>
          </Route>
          <Route path='/articles/:id'>
            <SingleArticle />
          </Route>
          <WrongPlace />
        </Switch>
      )}
    </>
  )
}

export default App;
