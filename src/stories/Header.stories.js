import React from 'react'
import { addDecorator } from '@storybook/react'

import { Header } from '../components/Header/Header'
import { MemoryRouter } from 'react-router-dom'
export default {
  title: 'Example/Header',
  component: Header,
}
addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))
const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
