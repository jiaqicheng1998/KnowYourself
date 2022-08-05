import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk, deleteArticleThunk } from '../../store/article';
import './SingleArticle.css';
import { NavLink, useHistory } from 'react-router-dom';

const SingleArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(loadArticlesThunk());
    }, [])

    const articles = useSelector(state => state.article.entries)
    const user = useSelector(state => state.session.user);
    const articleId = useParams().id
    const article = articles[articleId]

    const handleClick = () => {
        dispatch(deleteArticleThunk(articleId));

        history.push('/');
    }

    return (
        <div>
            <h1>{article?.title}</h1>
            <p>{article?.content}</p>
            <NavLink to={`/articles/${articleId}/edit`}>
                <i className="fa-solid fa-pen-to-square" />
            </NavLink>
            <span onClick={handleClick}>
                <i className="fa-solid fa-trash-can" />
            </span>
        </div>
    )
}

export default SingleArticle;