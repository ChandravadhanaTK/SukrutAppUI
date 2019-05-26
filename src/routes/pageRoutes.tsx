import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Todos from '../containers/Todos'

const PageRoutes = () => {
  return (
		<Switch>
      <Route path='/' component={Home} exact></Route>
      <Route path='/todos' component={Todos}></Route>
    </Switch>
  )
}

export default PageRoutes;
