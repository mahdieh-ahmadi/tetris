
const initialstate = {
    L : 0,
    select : ''
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case 'add':
        return {...state , L : state.L + 1}
        case 'select':
            const newdate = parseInt(Math.random()*5+1)
            return{...state , select : newdate}
        case 'rerun' :
            return{...state , L:0}
        default:
            return{...state}
    }
}

export default reducer