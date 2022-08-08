import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticlesThunk, deleteArticleThunk } from '../../store/article';
import { loadCommentsThunk, deleteCommentsThunk, addComment, addCommentThunk } from '../../store/comment'
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

    const articles = useSelector(state => state.article.entries);
    const comments = useSelector(state => state.comment.entries);
    const user = useSelector(state => state.session.user);
    const articleId = useParams().id;
    const article = articles[articleId];
    const selectedComments = Object.values(comments).filter(comment => comment.article_id == articleId);
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);

    const handleClick = () => {
        dispatch(deleteArticleThunk(articleId));

        history.push('/');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const newComment = {
            article_id: articleId,
            content: content
        }

        setContent('')

        const toAddComment = async () => {
            let {returnComment, response} = await dispatch(addCommentThunk(newComment)).catch(
                async (response) => {
                    const data = await response.json();
                    if (data && data.errors) {
                        setErrors(data.errors)
                    }
                }
            )

            if (response) {
                history.push(`/articles/${articleId}`)
            }
        }
        await toAddComment();
        
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
            <div className='add-comment'>
                <form onSubmit={handleSubmit}>
                    <label>Content:</label>
                    <textarea
                        type='text'
                        onChange={(e) => setContent(e.target.value)}
                        name='content'
                        placeholder='your thoughts are valuable to us!'
                    ></textarea>
                    <button type='submit'>Add Comment</button>
                </form>
            </div>
            <div>
                {Object.values(comments).map((comment) => (
                    <div className='ind-comment' key={comment?.id}>
                        <p>{comment.User?.username || user.username}</p>
                        <p>{comment?.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleArticle;