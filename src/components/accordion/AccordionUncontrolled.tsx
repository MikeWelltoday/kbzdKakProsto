import React, {JSX, useReducer, useState} from 'react'
import {reducer, TOGGLE_CONSTANT} from './reducer'

//===========================================================================================


//===========================================================================================


export const AccordionUncontrolled = () => {

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    function onClickHandler() {
        dispatch({type: TOGGLE_CONSTANT})
    }

    const accordionBody: JSX.Element = (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
    )

    const titleStyles = {
        cursor: 'pointer'
    }

    return (
        <div>
            <h2 onClick={onClickHandler} style={titleStyles}>
                Menu Uncontrolled
            </h2>
            {state.collapsed ? accordionBody : <h3>nothing to show</h3>}
        </div>
    )
}
