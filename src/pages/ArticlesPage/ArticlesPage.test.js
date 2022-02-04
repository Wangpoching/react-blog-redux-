import { Provider } from 'react-redux'
import ArticlesPage from './ArticlesPage'
import Article from '../../components/Article'
import Loading from '../../components/Loading'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import { scrollTop } from '../../utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([thunk])
let store

describe('Menu Component Login', () => {
  beforeEach(() => {
    store = mockStore({
      user: {
        loading: false,
        currentUser: null,
        error: null,
        detail: {
          name: null,
          email: null,
          description: null,
          loading: false,
          didInvalidate: false,
          error: null
        }
      },
      article: {
        manyArticles: {
          articles: [],
          currentPage: 1,
          totalAmount: 0,
          loading: false,
          didInvalidate: false,
          error: null
        },
        searchArticles: {
          articles: [],
          currentPage: 1,
          totalAmount: 0,
          loading: false,
          error: null
        },
        singleArticle: {
          article: null,
          loading: false,
          didInvalidate: false,
          error: null
        }
      }
    })
  })

  test('Menu should have Home text', () => {
    fetchMock.getOnce('https://react-blog.bocyun.tw/v1?page=1&limit=5', {
      {
        success: true,
        data: [{
          id: 1,
          name: '測試',
          authorUid: 123,
          title: '測試',
          content:　'測試',
          plainContent: '測試',
          createdAt: '2022-02-05'
        }]
      }
    })
    const getArticlesIfNeeded = (dispatch) => {

    }
    render(
      <Provider store={store}>
        <Router>
          <ArticlesPage />
        </Router>
      </Provider>)
    expect(screen.getByTestId('spin-element')).toBeInTheDocument()
  })
})


