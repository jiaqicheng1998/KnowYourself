import { csrfFetch } from './csrf';

const LOAD_COMMENTS = 'comments/loadComments';
const ADD_COMMENT = 'comments/addComment';
const PUT_COMMENT = 'comments/putComment';
const DELETE_COMMENT = 'comments/deleteComment';

export const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments: comments
    };
};

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment: comment
    };
};

export const putComment = (comment) => {
    return {
        type: PUT_COMMENT,
        comment: comment
    };
};

export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        id: id
    };
};

//thunk
export const loadCommentsThunk = () => async (dispatch) => {
    const response = await fetch('/api/comments');
    const comments = await response.json();
    dispatch(loadComments(comments));
};

export const addCommentThunk = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    const returnComment = await response.json();
    dispatch(addComment(returnComment));
    return {returnComment, response};
};

export const putCommentThunk = (payload, id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    })

    const data = await response.json();
    dispatch(putComment(data));
    return response;
}

export const deleteCommentThunk = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })

    const message = await response.json();
    dispatch(deleteComment(id));
    return message;
}

//reducer
const initialState = { entries: {}, isLoading: true };

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            const newState = {...state, entries: {...state.entries}}
            action.comments.forEach(comment => {
                newState.entries[comment.id] = comment
            })
            return newState;
        case ADD_COMMENT:
            const newState_add = {...state, entries: {...state.entries}};
            newState_add.entries[action.comment.id] = action.comment;
            return newState_add;
        case PUT_COMMENT:
            const newState_put = {...state, entries: {...state.entries}};
            newState_put.entries[action.comment.id] = action.comment;
            return newState_put;
        case DELETE_COMMENT:
            const entries_to_delete = {...state.entries};
            delete entries_to_delete[action.id];
            return {...state, entries: entries_to_delete}
        default:
            return state;
    }
}

export default commentReducer;