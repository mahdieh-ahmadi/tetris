
const initialstate = {
    L : 0
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case 'add':
        return {...state , L : state.L + 1}
    
        default:
            return{...state}
    }
}

export default reducer