import reducer, { initialState } from 'redux/modules/Weather'

describe('(Redux) Weather', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
