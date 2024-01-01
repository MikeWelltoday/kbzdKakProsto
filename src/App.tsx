import React from 'react'
import './App.css'

// components
import Accordion from './components/Accordion'
import Rating from './components/Rating'

// function
function App() {
	console.log('rendering => App')
	return (
		<div className='App'>
			<PageTitle title='This is AppComponent' />
			Article 1
			<Rating value={1} />
			<Accordion title='#Menu' collapsed={true} />
			Article 2
			<Rating value={1} />
			<Accordion title='#Users' collapsed={true} />
		</div>
	)
}

export default App

type PageTitleType = {
	title: string
}

function PageTitle(props: PageTitleType) {
	return <h1>{props.title}</h1>
}
