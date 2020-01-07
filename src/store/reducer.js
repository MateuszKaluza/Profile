import * as actionsTypes from './actionTypes';

const initialState = {
    likes: 121,
    followers: 4433,
    comments: [
        { text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium sem ut dignissim egestas. ' },
        { text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium sem ut dignissim egestas. ' },
        { text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium sem ut dignissim egestas. ' },
        { text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium sem ut dignissim egestas. ' }
    ]
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
        case actionsTypes.ADD_COMMNET:
            return { ...state, comments: state.comments.concat(action.newComment)};
        default:
            return state;
    }
};

export default reducer;