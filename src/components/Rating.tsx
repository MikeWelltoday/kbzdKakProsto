import React from 'react'

// !!! вместо типа можно указать
// ЗНАЧЕНИЕ
type RatingPropsType = {
	value: 1 | 2 | 3 | 4 | 5
}

const Rating = (props: RatingPropsType) => {
	return (
		<div>
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
		</div>
	)
}
export default Rating

type StarPropsType = {
	selected: boolean
}

function Star(props: StarPropsType) {
	if (props.selected) {
		return (
			<span>
				<b>Star </b>
			</span>
		)
	} else {
		return <span>Star </span>
	}
}
