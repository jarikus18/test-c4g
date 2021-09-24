import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Dashboard from 'containers/Dashboard'
import { configureStore } from 'store/configureStore'
import './assets/style/index.scss'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
