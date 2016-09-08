import ManageContainer from './containers/ManageContainer'
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {ReduxRouter} from 'redux-router'

const routes = <ReduxRouter>
	<Route path="/">
		<IndexRoute component={ManageContainer}></IndexRoute>
		<Route path="management" component={ManageContainer}></Route>
	</Route>

</ReduxRouter>

export default routes
