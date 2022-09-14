import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk } from "../../store/article";
import { loadResultsThunk } from '../../store/result';
import WrongPlace from '../WrongPlace';
import './Profile.css'

const Profile = ({ isLoaded }) => {
    const userId = useParams().id
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const articles = useSelector(state => state.article.entries)
    const results = useSelector(state => state.result.entries)
    const ownArticles = Object.values(articles).filter(article => article.user_id === parseInt(userId))
    const ownResults = Object.values(results).filter(result => result.user_id === parseInt(userId))
    const [showArticle, setShowArticle] = useState(true)
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        dispatch(loadArticlesThunk());
        dispatch(loadResultsThunk());
    }, [dispatch])

    const showArticleButton = () => {
        setShowArticle(true)
        setShowResult(false)
    }

    const showResultButton = () => {
        setShowArticle(false)
        setShowResult(true)
    }

    const getContent = (str) => {
        let arr = str.split(' &nbsp;')
        return arr.filter(a => a.length > 300)[0]
    }

    return (
        isLoaded && sessionUser?.id === parseInt(userId) ? (
            <div className='profile-page'>
                <div className='profile-top'>
                    <div className="profile-pic" style={{ backgroundImage: `url(${sessionUser?.profile_pic})` }}></div>
                    <div className='name-and-bio'>
                        <p className='profile-username'>{sessionUser?.username}</p>
                        <p>{sessionUser?.bio}</p>
                    </div>
                </div>
                <div className='profile-bottom'>
                    <div className="profile-left">
                        <div className={showArticle ? "curr-selected-profile" : "non-select-profile"} onClick={showArticleButton}>Your Articles</div>
                        <div className={showResult ? "curr-selected-profile" : "non-select-profile"} onClick={showResultButton}>Your Results</div>
                    </div>
                    <div className='profile-right'>
                        {showArticle && ownArticles?.map((article) => (
                            <NavLink to={`/articles/${article.id}`} key={article.id}>
                                <div className='ind-profile-card'>
                                    <p className='profile-title'>{article.title}</p>
                                    <p className='profile-time'>Posted at: {article.createdAt.slice(0, 10)}</p>
                                    <p className='profile-des'>{getContent(article.content).slice(0, 100)}...</p>
                                </div>
                            </NavLink>
                        ))}
                        {showResult && ownResults?.map((result) => (
                            <NavLink to={`/results/${result.id}`} key={result.id}>
                                <div className='ind-profile-card'>
                                    <p className='profile-title'>{result.title}</p>
                                    <p className='profile-time'>Tested at: {result.createdAt.slice(0, 10)}</p>
                                    <p className='profile-des'>{result.result.slice(0, 100)}...</p>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div >
        )
        :
        (<WrongPlace />)
    )
}

export default Profile