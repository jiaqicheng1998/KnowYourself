import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putArticleThunk } from '../../store/article';
import { useParams, useHistory } from 'react-router-dom';
import WrongPlace from '../WrongPlace';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditArticle = ({ isLoaded, articles }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const articleId = useParams().id;
    const sessionUser = useSelector(state => state.session.user);
    const currentArticle = articles[articleId];
    const [title, setTitle] = useState(currentArticle?.title || '');
    const [content, setContent] = useState(currentArticle?.content || '');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const newArticle = {
            title,
            content
        }

        const toUpdateArticle = async () => {
            let res = await dispatch(putArticleThunk(newArticle, articleId)).catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        setErrors(data.errors)
                    }
                }
            )
            console.log(res)

            if (res) {
                history.push(`/articles/${articleId}`);
            }
        }

        await toUpdateArticle();
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
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        id="article-title-input"
                        value={title}
                        name='title'
                        placeholder='Title'
                    />
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
            </div>
        )
            :
            (<WrongPlace />)
    )
}

export default EditArticle;