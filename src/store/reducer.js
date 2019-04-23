import * as actionsTypes from './actionTypes';

const initialState = {
    likes: 121,
    followers: 4433
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.INCREMENT_LIKES:
            return { ...state, likes: state.likes + 1 };
        case actionsTypes.DECREMENT_LIKES:
            return { ...state, likes: state.likes - 1 };
        case actionsTypes.FOLLOW:
            return { ...state, followers: state.followers + 1 };
        case actionsTypes.UNFOLLOW:
            return { ...state, followers: state.followers - 1 };
        default:
            return state;
    }
};

export default reducer;