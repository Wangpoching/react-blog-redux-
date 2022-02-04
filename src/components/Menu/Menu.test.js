import { Provider } from 'react-redux'
import Menu from './Menu'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([thunk])
let store

describe('Menu Component Login', () => {
  beforeEach(() => {
    store = mockStore({
      user: {
        currentUser: '123',
        loading: false
      },
    })
  })

  test('Menu should have Home text', () => {
    render(
      <Provider store={store}>
        <Router>
          <Menu showMenu={true} setShowMenu={jest.fn()}/>
        </Router>
      </Provider>)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
  test('Menu should have Logout text if login', () => {
    render(
      <Provider store={store}>
        <Router>
          <Menu showMenu={true} setShowMenu={jest.fn()}/>
        </Router>
      </Provider>)
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })
  test('Menu click logout should call setShowMenu With false', () => {
    const setShowMenu = jest.fn()
    render(
      <Provider store={store}>
        <Router>
          <Menu showMenu={true} setShowMenu={setShowMenu}/>
        </Router>
      </Provider>)
    userEvent.click(screen.getByText('Logout'))
    expect(setShowMenu).toHaveBeenCalledWith(false)
  })
})

describe('Menu Component Logout', () => {
  beforeEach(() => {
    store = mockStore({
      user: {
        currentUser: null,
        loading: false
      },
    })
  })
  test('Menu should have Login text if logout', () => {
    render(
      <Provider store={store}>
        <Router>
          <Menu showMenu={true} setShowMenu={jest.fn()}/>
        </Router>
      </Provider>)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})



