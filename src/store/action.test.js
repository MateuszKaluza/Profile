import * as action from './action';
import * as actionTypes from './actionTypes';

describe('actions', () => {
    it('should create an action to increment likes', () => {
        //given
        const expectedAction = { type: actionTypes.INCREMENT_LIKES };

        //when
        const resultAction  = action.increnmentLikes();

        //then
        expect(resultAction).toEqual(expectedAction);
    });

    it('should create an action to decrement likes', () => {
        //given
        const expectedAction = { type: actionTypes.DECREMENT_LIKES };

        //when
        const resultAction  = action.decrementLikes();

        //then
        expect(resultAction).toEqual(expectedAction);
    });
});