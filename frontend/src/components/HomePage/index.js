import React, { useEffect } from "react";
import banner from './banner.png';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk } from "../../store/article";
import { loadImagesThunk } from "../../store/image";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadArticlesThunk());
        dispatch(loadImagesThunk());
    }, [dispatch])
    const articles = useSelector(state => state.article.entries);
    const images = useSelector(state => state.image.entries);

    const getFirstImage = (article_id) => {
        return Object.values(images).filter(image => image.article_id === article_id)[0]
    }

    console.log(getFirstImage(2))

    return (
        <div className="homepage">
            <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
            <div className="articles-container">
                {Object.values(articles).map((article) => (
                    <NavLink to={`/articles/${article.id}`}>
                        <div className="ind-article-card">
                            <div className="ind-article-card-left">
                                <p className="title">{article?.title}</p>
                                <div className="name-and-profile">
                                    <div className="user-icon" style={{ backgroundImage: `url(${article?.User.profile_pic})` }}></div>
                                    <p>{article?.User.username}</p>
                                </div>
                                <p>{article?.content.slice(0, 300)}...</p>
                            </div>
                            <div className="img-left" style={{ backgroundImage: `url(${getFirstImage(article.id)?.img_url})` }}></div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default HomePage;