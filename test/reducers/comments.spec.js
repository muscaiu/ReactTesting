import { expect } from '../test_helper'
import commentReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        console.log(commentReducer())
        //whatever the reducer returns to be an array
        expect(commentReducer()).to.be.instanceOf(Array)
        //OR better to check if the array is empty
        expect(commentReducer()).to.eql([]) //eql is for type compare
    })

    it('handles action of type SAVE_COMMENT', () => {
        const action = {type: SAVE_COMMENT, payload: 'new comment'}
        expect(commentReducer([], action)).to.eql(['new comment'])
    })
})
