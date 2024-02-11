type ActionType = {
    type: 'TOGGLE-COLLAPSED'
}
export type StateType = {
    collapsed: boolean
}
//==============================================================================================<
export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'
//==============================================================================================<

export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === TOGGLE_CONSTANT) {

        // обязательно сделать копию, или реакт не поймет что произошло изменение
        return {...state, collapsed: !state.collapsed}
    }

    return state
}





