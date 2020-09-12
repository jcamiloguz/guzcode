import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout/Layout'
import { GlobalStyle } from '../globalStyle'
import { Portfolio } from '../pages/Portfolio'

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/portfolio" component={Portfolio} />
					</Switch>
				</Layout>
			</Router>
		</>
	)
}
