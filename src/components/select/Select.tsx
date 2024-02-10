import React, {FC, useState, KeyboardEvent, useEffect} from 'react'
import s from './Select.module.scss'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: string) => void
    items: ItemType[]
}

export const Select: FC<SelectPropsType> = (props) => {

    const [toggle, setToggle] = useState(false)
    const [hoveredElementValue, setHoveredElementItem] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    function toggleItem() {
        setToggle(!toggle)
    }

    function onItemClick(value: string) {
        props.onChange(value)
        toggleItem()
    }

    useEffect(() => {
        setHoveredElementItem(props.value)
    }, [props.value])

    function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItems) {
                props.onChange(props.items[0].value)
            }

        }

        if (e.key === 'Escape') {
            setToggle(false)
        }

        if (e.key === 'Enter') {
            onItemClick(hoveredElementValue)
        }

    }

    return (
        <div className={s.select} onKeyDown={onKeyDown} tabIndex={0}>
                <span className={s.main}
                      onClick={toggleItem}
                >
                    {selectedItems && selectedItems.title}
                </span>

            {toggle &&
                <ul className={s.items}>
                    {props.items.map(i =>
                        <li onMouseEnter={() => setHoveredElementItem(i.value)}
                            className={`${i === hoveredItem && s.selected}`}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >
                            {i.title}
                        </li>)}
                </ul>
            }
        </div>
    )
}

export default Select