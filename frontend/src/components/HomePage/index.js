import React, { useEffect } from "react";
import banner from './banner.png';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk } from "../../store/article";
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticlesThunk());
    }, [])
    const articles = useSelector(state => state.article.entries);

    return (
        <div className="homepage">
            <div className="banner" style={{backgroundImage:`url(${banner})`}}></div>
            <div className="articles-container">
                {Object.values(articles).map((article) => (
                    <div className="ind-article-card">
                        <p>{article?.title}</p>
                        <p>{article?.content.slice(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;