import ReactDOM from 'react-dom'

import App from './App'

// eslint-disable-next-line no-console
console.log('version', process.env.REACT_APP_VERSION)

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App').default)
  })
}
