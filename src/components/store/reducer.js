
const initialstate = {
    L : 0,
    select : '',
    r : 0,
    add : false
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case 'add':
        return {...state , L : state.L + 1}
        case 'select':
            /* const newdate = parseInt(Math.random()*5+1) */
            const newdate = 5
            return{...state , select : newdate}
        case 'rerun' :
            return{...state , L:0}
        case 'goright':
            if(state.r === 9){
                return{...state }
            }else{
                return{...state , r:state.r+1 , add : 'right'}
            }
            
        case 'goleft':
            if(state.r === 0){
                return{...state}
            }else{
                return{...state , r :state.r - 1 , add: 'left'}
            }
        case 'cancleAdd':
            return{...state , add:false}

        default:
            return{...state}
    }
}

export default reducer