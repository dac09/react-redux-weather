import reducer, { initialState } from 'redux/modules/cities'

describe('(Redux) Cities', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
