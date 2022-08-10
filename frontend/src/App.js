import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SingleArticle from "./components/SingleArticle";
import AddArticle from './components/AddArticle';
import WrongPlace from "./components/WrongPlace";
import EditArticle from './components/EditArticle'
import HomePage from "./components/HomePage";
import AddComment from "./components/AddComment";
import EditComment from "./components/EditComment";
import Footer from "./components/Footer";
import * as sessionActions from './store/session'
import { loadArticlesThunk } from "./store/article";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(loadArticlesThunk());
  }, [dispatch])

  const articles = useSelector(state => state.article.entries)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/signup' exact={true}>
            <SignupFormPage />
          </Route>
          <Route path='/articles/new' exact={true}>
            <AddArticle isLoaded={isLoaded}/>
          </Route>
          <Route path='/articles/:articleId/comments/new' exact={true}>
            <AddComment isLoaded={isLoaded}/>
          </Route>
          <Route path='/articles/:articleId/comments/:commentId/edit' exact={true}>
            <EditComment isLoaded={isLoaded}/>
          </Route>
          <Route path='/articles/:id/edit' exact={true}>
            <EditArticle isLoaded={isLoaded} articles={articles}/>
          </Route>
          <Route path='/articles/:id' exact={true}>
            <SingleArticle />
          </Route>
          <Route path='/' exact={true}>
            <HomePage />
          </Route>
          <WrongPlace />
        </Switch>
      )}
      <Footer />
    </>
  )
}

export default App;
