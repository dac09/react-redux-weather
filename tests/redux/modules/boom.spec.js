import reducer, { initialState } from 'redux/modules/Boom'

describe('(Redux) Boom', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
