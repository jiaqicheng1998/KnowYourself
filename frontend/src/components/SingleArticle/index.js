import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk, deleteArticleThunk } from '../../store/article';
import { loadCommentsThunk, deleteCommentThunk } from '../../store/comment'
import './SingleArticle.css';
import { NavLink, useHistory } from 'react-router-dom';
import parse from 'html-react-parser'

const SingleArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(loadArticlesThunk());
        dispatch(loadCommentsThunk());
    }, [])

    const articles = useSelector(state => state.article.entries);
    const comments = useSelector(state => state.comment.entries);
    const user = useSelector(state => state.session.user);
    const articleId = useParams().id;
    const article = articles[articleId];
    const selectedComments = Object.values(comments).filter(comment => comment.article_id == articleId);

    const handleClick = () => {
        dispatch(deleteArticleThunk(articleId));

        history.push('/');
    }

    return (
        <div className='sigle-article-page'>
            <div className='title-and-button'>
                <h1>{article?.title}</h1>
                {user?.id === article?.user_id && (
                    <div className='edit-and-del-article'>
                        <div className="edit-article">
                            <NavLink to={`/articles/${articleId}/edit`}>
                                <i className="fa-solid fa-pen-to-square fa-xl" />
                            </NavLink>
                        </div>
                        <div className="edit-article">
                            <span onClick={handleClick}>
                                <i className="fa-solid fa-trash-can fa-xl" />
                            </span>
                        </div>
                    </div>
                )}
            </div>
            <div className="name-and-profile-article">
                <div className="user-icon" style={{ backgroundImage: `url(${article?.User?.profile_pic})` }}></div>
                <p>{article?.User?.username}</p>
            </div>
            <div className="banner-article" style={{ backgroundImage: `url(${article?.img_url})` }}></div>
            {article?.content && (
                <p>{parse(article?.content)}</p>
            )}
            <div>
                <NavLink to={`/articles/${articleId}/comments/new`}>
                    <button>Add comment</button>
                </NavLink>
            </div>
            <div>
                {Object.values(selectedComments).map((comment) => (
                    <div className='ind-comment' key={comment?.id}>
                        <p>{comment.User?.username || user.username}</p>
                        <p>{comment?.content}</p>
                        {user?.id === comment?.user_id && (
                            <div>
                                <NavLink to={`/articles/${articleId}/comments/${comment.id}/edit`}>
                                    <i className="fa-solid fa-pen-to-square" />
                                </NavLink>
                                <span
                                    onClick={
                                        async (e) => {
                                            e.preventDefault();
                                            await dispatch(deleteCommentThunk(comment.id))
                                                .then(() => dispatch(loadCommentsThunk()))
                                        }
                                    }
                                >
                                    <i className="fa-solid fa-trash-can" />
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleArticle;