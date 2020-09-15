import React from 'react'
import { Slideritem } from './styles.js'
export const SliderItem = ({ data }) => {

	const { Icon } = data
	return (
		<Slideritem color={data.color}>
			<Icon size={150} />
		</Slideritem>
	)
}