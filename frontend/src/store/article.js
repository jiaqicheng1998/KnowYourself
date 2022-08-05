import { csrfFetch } from './csrf';

const LOAD_ARTICLES = 'articles/loadArticles';
const ADD_ARTICLE = 'articles/addArticle';
const PUT_ARTICLE = 'articles/putArticle';
const DELETE_ARTICLE = 'articles/deleteArticle';

export const loadArticles = (articles) => {
    return {
        type: LOAD_ARTICLES,
        articles: articles
    };
};

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article: article
    };
};

export const putArticle = (article) => {
    return {
        type: PUT_ARTICLE,
        article: article
    };
};

export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        id: id 
    };
};

//thunk
export const loadArticlesThunk = () => async (dispatch) => {
    const response = await fetch('/api/articles');
    const articles = await response.json();
    dispatch(loadArticles(articles));
};

export const addArticleThunk = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/articles', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    const data = await response.json();
    dispatch(addArticle(data))
    return response;
}

export const putArticleThunk = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/articles/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(putArticle(data));
    return response;
}

export const deleteArticleThunk = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/articles/${id}`, {
        method: 'DELETE'
    })

    const message = await response.json();
    dispatch(deleteArticle(id));
    return message;
}

//reducer
const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            const newState = {...state, entries: {...state.entries}}
            action.articles.forEach(article => {
                newState.entries[article.id] = article
            })
            return newState;
        case ADD_ARTICLE:
            const newState_add = {...state, entries: {...state.entries}};
            newState_add.entries[action.article.id] = action.article;
            return newState_add;
        case PUT_ARTICLE:
            const newState_put = {...state, entries: {...state.entries}};
            newState_put.entries[action.article.id] = action.article;
            return newState_put;
        case DELETE_ARTICLE:
            const entries_to_delete = {...state.entries};
            delete entries_to_delete[action.id];
            return {...state, entries: entries_to_delete}
        default:
            return state;
    }
}

export default articleReducer;