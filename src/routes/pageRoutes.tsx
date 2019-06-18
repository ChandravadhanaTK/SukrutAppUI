import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Todos from '../containers/Todos'
import Dashboard from '../containers/Dashboard'

const PageRoutes = () => {
  return (
		<Switch>
      <Route path='/' component={Home} exact></Route>
      <Route path='/todos' component={Todos}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
    </Switch>
  )
}

export default PageRoutes;
