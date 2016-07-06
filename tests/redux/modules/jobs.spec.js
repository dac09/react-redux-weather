import reducer, { initialState } from 'redux/modules/Jobs'

describe('(Redux) Jobs', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
