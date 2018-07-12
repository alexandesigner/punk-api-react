/* eslint-disable no-undef */
import configureStore from 'redux-mock-store' // ES6 modules

const middlewares = []
const mockStore = configureStore(middlewares)

const resetState = () => ({ type: 'RESET_STATE' })

describe('Actions', () => {
  it('should dispatch action reset state', () => {
    // Initialize mockstore with empty state
    const initialState = {}

    // MockStor in initialState
    const store = mockStore(initialState)

    // Dispatch the action
    store.dispatch(resetState())

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const expectedPayload = { type: 'RESET_STATE' }
    expect(actions).toEqual([expectedPayload])
    expect(actions).toMatchSnapshot()
  })
})
