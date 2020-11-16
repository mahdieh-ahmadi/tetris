
const initialstate = {
    L : 0,
    oldL : '0',
    select : '',
    r : 5,
    add : false,
    start : false,
    reset : false
}

const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case 'start':
            return{...state , start : true}
        case 'stop':
            return {...state , start : false}
        case 'reset':
            return {...state , reset: true , start : false}
        case 'set':
            return {...state , reset: false}
        case 'add':
        return {...state ,oldL:state.L ,  L : state.L + 1}
        case 'select':
            const newdate = parseInt(Math.random()*5+1)
            return{...state , select : newdate}
        case 'rerun' :
            return{...state , L:0}
        case 'goright':
            if(state.r === 9){
                return{...state }
            }else{
                return{...state , r:state.r+1 , add : 'right' , oldL:state.oldL+1}
            }
            
        case 'goleft':
            if(state.r === 0){
                return{...state}
            }else{
                return{...state , r :state.r - 1 , add: 'left' , oldL:state.oldL+1}
            }
        case 'cancleAdd':
            return{...state , add:false , oldL:state.oldL-1}

        default:
            return{...state}
    }
}

export default reducer