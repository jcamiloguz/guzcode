import React from 'react'
import { Container, Wrapper } from './styles'
import { SliderItem } from '../SliderItem/SliderItem'
export const Slider = ({ state }) => {
	const { items } = state
	return (
		<Container>
			<Wrapper>
				{items.map(item => {
					return (
						<SliderItem key={item.id} data={item} >
						</SliderItem>

					)
				})}
			</Wrapper>
		</Container>
	)

}