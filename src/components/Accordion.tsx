import React from 'react'

type TitlePropsType = {
	title: string
	collapsed?: boolean
}

const Accordion = (props: TitlePropsType) => {
	return (
		<div>
			{props.collapsed === true ? (
				<div>
					<AccordionTitle title={props.title} />
					<AccordionBody />
				</div>
			) : (
				<h1>NO</h1>
			)}
		</div>
	)
}
export default Accordion

function AccordionTitle(props: TitlePropsType) {
	return <h2>{props.title}</h2>
}

function AccordionBody() {
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}
