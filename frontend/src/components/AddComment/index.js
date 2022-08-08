import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentThunk } from '../../store/comment'
import WrongPlace from '../WrongPlace';

const AddComment = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory()
    const articleId = useParams().articleId
    const [errors, setErrors] = useState([])
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const newComment = {
            article_id: articleId,
            content: content
        }

        setContent('')

        const toAddComment = async () => {
            let { returnComment, response } = await dispatch(addCommentThunk(newComment)).catch(
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

export default AddComment;