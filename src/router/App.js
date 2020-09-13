import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout/Layout'
import { GlobalStyle } from '../globalStyle'
import { Portfolio } from '../pages/Portfolio'
import { Education } from '../pages/Education'
import { NotFound } from '../pages/NotFound'

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/education" component={Education} />
						<Route exact path="/education" component={Education} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</Router>
		</>
	)
}
