import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk } from '../../store/article';
import './SingleArticle.css';
import { NavLink, useHistory } from 'react-router-dom';

const SingleArticle = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(loadArticlesThunk());
    }, [])

    const articles = useSelector(state => state.article.entries)

    const articleId = useParams().id
    const article = articles[articleId]

    return (
        <div>
            <h1>{article?.title}</h1>
            <p>{article?.content}</p>
        </div>
    )
}

export default SingleArticle;