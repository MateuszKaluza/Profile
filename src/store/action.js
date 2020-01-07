import * as actionTypes from './actionTypes';

export const increnmentLikes = () => ({
    type: actionTypes.INCREMENT_LIKES
});

export const decrementLikes = () => ({
    type: actionTypes.DECREMENT_LIKES
});

export const follow = () => ({
    type: actionTypes.FOLLOW
});

export const unfollow = () => ({
    type: actionTypes.UNFOLLOW
});

export  const addCommnet = (newComment) => {
    return {
        type: actionTypes.ADD_COMMNET,
        newComment
    }
};