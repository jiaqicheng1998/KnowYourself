import { csrfFetch } from './csrf';

const LOAD_IMAGES = '/images/loadImages';

export const loadImages = (images) => {
    return {
        type: LOAD_IMAGES,
        images: images
    };
};

//thunk
export const loadImagesThunk = () => async (dispatch) => {
    const response = await fetch('/api/images');
    const images = await response.json();
    dispatch(loadImages(images));
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
        default:
            return state;
    }
}

export default imageReducer;