import * as action from './action';
import reducer from './reducer';

describe('reducer', () => {
    it('should return the intial state', () => {
        //given
        const expectedState = { likes: 121 };

        //when
        const initalState = reducer(undefined, {});

        //then
        expect(initalState).toEqual(expectedState);
    });

    it('should handle INCREMENT_LIKES', () => {
        //given 
        const expectedState = { likes: 122 };

        //when
        const resultState = reducer(undefined, action.increnmentLikes());

        //then
        expect(resultState).toEqual(expectedState);
    });

    it('should handle DECREMENT_LIKES', () => {
        //given 
        const expectedState = { likes: 120 };

        //when
        const resultState = reducer(undefined, action.decrementLikes());

        //then
        expect(resultState).toEqual(expectedState);
    });
});

