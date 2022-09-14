import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk } from "../../store/article";
import { loadResultsThunk } from '../../store/result';

const Profile = () => {
    const userId = useParams().id
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const articles = useSelector(state => state.article.entries)
    const results = useSelector(state => state.result.entries)
    const ownArticles = Object.values(articles).filter(article => article.user_id == userId)
    const ownResults = Object.values(results).filter(result => result.user_id == userId)

    useEffect(() => {
        dispatch(loadArticlesThunk());
        dispatch(loadResultsThunk());
    }, [dispatch])
    
    return (
        <div>
            <p>{sessionUser?.username}</p>
            <div className="user-icon" style={{ backgroundImage: `url(${sessionUser?.profile_pic})` }}></div>
            <p>{sessionUser?.bio}</p>
            {ownArticles?.map((article) => (
                <div key={article.id}>
                    <p>{article.title}</p>
                    <p>Posted at: {article.createdAt.slice(0,10)}</p>
                </div>
            ))}
            {ownResults?.map((result) => (
                <div key={result.id}>
                    <p>{result.title}</p>
                    <p>Tested at: {result.createdAt.slice(0,10)}</p>
                </div>
            ))}
        </div>
    )
}

export default Profile