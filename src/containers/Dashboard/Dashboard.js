import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import Sessions from './pages/Sessions'
import Customers from './pages/Customers'
import { Redirect, Route, Switch } from 'react-router-dom'

import { PAGE_PATHS } from 'constants/paths'
import { Layout } from 'components/Layout'
import NotFound from '../NotFound'

import { getStations } from 'store/thunk'

function Dashboard() {
  const dispatch = useDispatch()
  const data = useSelector(({ stations: { list, progress } }) => ({ list, progress }))

  useEffect(() => {
    dispatch(getStations())
  }, [dispatch])

  return (
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={`/${PAGE_PATHS.customers()}`} />} />
        <Route path={`/${PAGE_PATHS.customers()}`} render={() => <Customers {...data} />} exact />
        <Route path={`/${PAGE_PATHS.sessions()}`} render={() => <Sessions {...data} />} exact />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default Dashboard
