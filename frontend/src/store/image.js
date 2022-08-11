import { csrfFetch } from './csrf';

const LOAD_IMAGES = '/images/loadImages';
const ADD_IMAGE = '/images/addImage';

export const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        images: images
    };
};

export const addImage = (image) => {
    return {
        type: ADD_IMAGE,
        image: image
    }
}

//thunk
export const loadImagesThunk = () => async (dispatch) => {
    const response = await fetch('/api/images');
    const images = await response.json();
    dispatch(loadImages(images));
}

export const addImageThunk = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/images', {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    const returnImage = await response.json();
    dispatch(addImage(returnImage))
    return {returnImage};
}

//reducer 
const initialState = { entries: {}, isLoading: true };

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMAGES:
            const newState = { ...state, entries: { ...state.entries } }
            action.images.forEach(image => {
                newState.entries[image.id] = image
            })
            return newState;
        case ADD_IMAGE:
            const newState_add = {...state, entries: {...state.entries}};
            newState_add.entries[action.image.id] = action.image;
            return newState_add;
        default:
            return state;
    }
}

export default imageReducer;