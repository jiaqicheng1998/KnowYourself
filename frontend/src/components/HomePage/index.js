import React, { useEffect, useState } from "react";
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
    const [showArticle, setShowArticle] = useState(true)
    const [showTest, setShowTest] = useState(false)
    const tests = {
        1: {id: 1, title: "The 'Blob Tree' Test", content: "Reveal your personality by select a character on the tree", img_url: "https://themindsjournal.com/wp-content/uploads/2017/12/blob.jpg"},
        2: {id: 2, title: "test2", content: "this is test2", img_url: "https://i.graphicmama.com/blog/wp-content/uploads/2018/06/18080741/Flat-Design-Character-flat-and-outline.jpg"}
    }

    const showArticleButton = () => {
        setShowArticle(true)
        setShowTest(false)
    }

    const showTestButton = () => {
        setShowArticle(false)
        setShowTest(true)
    }

    const getContent = (str) => {
        let arr = str.split(' &nbsp;')
        return arr.filter(a => a.length > 300)[0]
    }

    return (
        <div className="homepage">
            <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
            <div className="selection-bar">
                <div className={showArticle ? "curr-selected" : "non-select"} onClick={showArticleButton}>Articles</div>
                <div className={showTest ? "curr-selected" : "non-select"} onClick={showTestButton}>Tests</div>
            </div>
            <div className="articles-container">
                {showArticle && Object.values(articles).map((article) => (
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
                {showTest && Object.values(tests).map((test) => (
                    <NavLink to={`/tests/${test.id}`} key={test.id}>
                        <div>
                            <p>{test.title}</p>
                            <p>{test.content}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default HomePage;