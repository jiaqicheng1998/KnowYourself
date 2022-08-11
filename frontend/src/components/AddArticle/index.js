import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticleThunk } from '../../store/article';
import { useParams, useHistory } from 'react-router-dom';
import WrongPlace from '../WrongPlace';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
            let { returnArticle, response } = await dispatch(addArticleThunk(newArticle)).catch(
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
            <div className='add-article-page'>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <form className="add-article-form" onSubmit={handleSubmit}>
                    <div className='two-input'>
                        <input
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                            className="article-title-input"
                            value={title}
                            name='title'
                            placeholder='Title'
                        />
                    </div>
                    <button className="new-article-submit" type='submit'><i class="fa-solid fa-paper-plane fa-lg"></i></button>
                </form>

                <div className='editor'>
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setContent(data)
                        }}
                    />
                </div>
                <p>{content}</p>
            </div>
        )
            :
            (<WrongPlace />)
    )
}

export default AddArticle;