import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk, deleteArticleThunk } from '../../store/article';
import { loadCommentsThunk, deleteCommentsThunk} from '../../store/comment'
import './SingleArticle.css';
import { NavLink, useHistory } from 'react-router-dom';

const SingleArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(loadArticlesThunk());
        dispatch(loadCommentsThunk());
    }, [])

    const articles = useSelector(state => state.article.entries)
    const comments = useSelector(state => state.comment.entries)
    const user = useSelector(state => state.session.user);
    const articleId = useParams().id
    const article = articles[articleId]
    const selectedComments = Object.values(comments).filter(comment => comment.article_id == articleId)
    console.log(selectedComments)

    const handleClick = () => {
        dispatch(deleteArticleThunk(articleId));

        history.push('/');
    }

    return (
        <div>
            <h1>{article?.title}</h1>
            <p>{article?.content}</p>
            {user?.id === article?.user_id && (
                <div>
                    <NavLink to={`/articles/${articleId}/edit`}>
                        <i className="fa-solid fa-pen-to-square" />
                    </NavLink>
                    <span onClick={handleClick}>
                        <i className="fa-solid fa-trash-can" />
                    </span>
                </div>
            )}
            <div>
                {Object.values(comments).map((comment) => (
                    <div className='ind-comment' key={comment?.id}>
                        <p>{comment.User?.username}</p>
                        <p>{comment?.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleArticle;