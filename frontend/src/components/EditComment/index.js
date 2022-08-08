import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { putCommentThunk } from '../../store/comment'
import WrongPlace from '../WrongPlace';

const EditComment = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comment.entries);
    const dispatch = useDispatch()
    const history = useHistory()
    const articleId = useParams().articleId
    const commentId = useParams().commentId
    const currComment = comments[commentId]
    const [errors, setErrors] = useState([])
    const [content, setContent] = useState(currComment?.content || "")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const newComment = {
            article_id: articleId,
            content: content
        }

        setContent('')

        const toUpdateComment = async () => {
            let response = await dispatch(putCommentThunk(newComment, commentId)).catch(
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
        await toUpdateComment();
    }
    return (
        isLoaded && sessionUser ? (
            <div>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <label>
                        Content:
                    </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        name='content'
                        placeholder='your thoughts are valuable to us!'
                    ></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
            :
            (<WrongPlace />)
    )
}

export default EditComment;