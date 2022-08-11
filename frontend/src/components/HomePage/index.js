import React, { useEffect } from "react";
import banner from './banner.png';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk } from "../../store/article";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticlesThunk());
    }, [dispatch])
    const articles = useSelector(state => state.article.entries);

    const getContent = (str) => {
        let arr = str.split(' &nbsp;')
        return arr.filter(a => a.length > 300)[0]
    }

    return (
        <div className="homepage">
            <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
            <div className="articles-container">
                {Object.values(articles).map((article) => (
                    <NavLink to={`/articles/${article.id}`} key={article.id}>
                        <div className="ind-article-card">
                            <div className="ind-article-card-left">
                                <p className="title">{article?.title}</p>
                                <div className="name-and-profile">
                                    <div className="user-icon" style={{ backgroundImage: `url(${article?.User.profile_pic})` }}></div>
                                    <p>{article?.User.username}</p>
                                </div>
                                <p>{getContent(article?.content)?.slice(0, 260)}...</p>
                            </div>
                            <div className="img-left" style={{ backgroundImage: `url(${article.img_url})` }}></div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default HomePage;