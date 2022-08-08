import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticleThunk } from '../../store/article';
import { useParams, useHistory } from 'react-router-dom';
import WrongPlace from '../WrongPlace';
import './AddArticle.css';

const AddArticle = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const newArticle = {
            title,
            content
        }

        setTitle('');
        setContent('');

        const toAddArticle = async () => {
            let {returnArticle, response} = await dispatch(addArticleThunk(newArticle)).catch(
                async (response) => {
                    const data = await response.json();
                    if (data && data.errors) {
                        setErrors(data.errors)
                    }
                }
            )

            if (response) {
                history.push(`/articles/${returnArticle.id}`)
            }
        }

        await toAddArticle();
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
                    <label>Title:</label>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name='title'
                        placeholder='Be clear and descriptive.'
                    />
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

export default AddArticle;