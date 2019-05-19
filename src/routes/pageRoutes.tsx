import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'

const PageRoutes = () => {
  return (
		<Switch>
      <Route path='/' component={Home}></Route>
    </Switch>
  )
}

export default PageRoutes;
