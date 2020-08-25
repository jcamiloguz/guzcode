import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import '../assets/styles/App.scss'

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  )
}
