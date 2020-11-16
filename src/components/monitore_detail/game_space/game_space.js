import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import Block from './blocks/blocks'

import './game_space.css'

const GameSpace = props => {
let blocks = []    
const [newblock , setNewblock] = useState([]);
let L = props.L

useEffect(() => {
    for (let index = 0; index < 10*20 ; index++) {
        setNewblock(prestate => [...prestate , '0'])
        }

    props.setselect()
} , [])

blocks = newblock;

const reset = () => {
    if(props.reset === true){
        setNewblock([])
        for (let index = 0; index < 10*20 ; index++) {
            setNewblock(prestate => [...prestate , '0'])
            }
        props.setselect()
        props.rerun()
    }
}

 useEffect(() => { 
    reset()
} , [props.reset])

useEffect(() => {
    if(props.start === true ){
        props.set()
        props.run()
    }
},[props.start])

useEffect(() => {
    let time;
    if( ((props.select === 1  && props.L < 17 && blocks[(L+3)*10+props.r] === '0' && blocks[(L+1)*10+props.r+1] === '0' ) || 
        (props.select === 4  && props.L < 17 &&  blocks[(L+3)*10+props.r] === '0' && blocks[(L+2)*10+props.r+1] === '0' )||
        (props.select === 5  && props.L < 17 &&  blocks[(L+2)*10+props.r] === '0' && blocks[(L+3)*10+props.r+1] === '0' )||
        (props.select === 2  && props.L < 19 &&  blocks[(L+1)*10+props.r] === '0' && blocks[(L+1)*10+props.r+1] === '0' && blocks[(L+1)*10+props.r+2] === '0' && blocks[(L+1)*10+props.r+3] === '0') ||
        (props.select === 3  && props.L < 18 &&  blocks[(L+2)*10+props.r] === '0' && blocks[(L+2)*10+props.r+1] === '0'))
        && (props.add === false && props.oldL !== props.L) && props.start === true && props.reset === false)
        {
           
         time = setTimeout(() => {
            props.run()
        }, 800);
    }else{
        if(props.add === false && props.start === true){
            reset()
        }
        clearInterval(time)
    }
} , [props.L])



if(props.add === 'right'){
    switch (props.select) {
        case 1:
            blocks[(L)*10+(props.r-1)] = '0'
            blocks[(L+1)*10+(props.r-1)] = '0'
            blocks[(L+2)*10+(props.r-1)] = '0'
            break;
        case 2:
            blocks[(L)*10+(props.r-1)] = '0'
            break;
        case 3:
            blocks[L*10+props.r-1] = '0'
            blocks[(L+1)*10+props.r-1] = '0'
            break;
        case 4:
            blocks[(L)*10+(props.r-1)] = '0'
            blocks[(L+1)*10+(props.r-1)] = '0'
            blocks[(L+2)*10+(props.r-1)] = '0'
            break;
        case 5:
            blocks[L*10+props.r-1] = '0'
            blocks[(L+1)*10+props.r-1] = '0'
            blocks[(L+2)*10+props.r] = '0'
 
            break;
    
        default:
            break;
    }
    props.cancleAdd()
}
if(props.add === 'left'){
    switch (props.select) {
        case 1:
            blocks[(L)*10+(props.r+2)] = '0'
            blocks[(L+1)*10+(props.r+1)] = '0'
            blocks[(L+2)*10+(props.r+1)] = '0'
            break;
        case 2:
            blocks[(L)*10+(props.r+4)] = '0'
            break;
        case 3:
            blocks[L*10+props.r+2] = '0'
            blocks[(L+1)*10+props.r+2] = '0'
            break;
        case 4:
            blocks[(L)*10+(props.r+1)] = '0'
            blocks[(L+1)*10+(props.r+2)] = '0'
            blocks[(L+2)*10+(props.r+1)] = '0'
            break;
        case 5:
            blocks[L*10+props.r+1] = '0'
            blocks[(L+1)*10+props.r+2] = '0'
            blocks[(L+2)*10+props.r+2] = '0'
 
            break;
    
        default:
            break;
    }
    props.cancleAdd()
}


    switch (props.select) {
        case 1:
            blocks[L*10+props.r] = 'select'
            blocks[L*10+1+props.r] = 'select'
            blocks[(L+1)*10+props.r] = 'select'
            blocks[(L+2)*10+props.r] = 'select'

            blocks[(L-1)*10+props.r] = '0'
            blocks[(L-1)*10+1+props.r] = '0'
        break;
        case 2:
            for(let j =0 ; j<4 ; j++){
                blocks[(10*L)+j+props.r] = 'select'
            }
            for(let j =0 ; j<4 ; j++){
                blocks[(10*(L-1))+j+props.r] = '0'
            }
        break;
        case 3:
            for(let j = 0 ; j<2 ; j++){
                blocks[(10*L)+j+props.r] = 'select'
                blocks[(10*(L+1))+j+props.r] = 'select'
            }
            
                blocks[(10*(L-1))+1+props.r] = '0'
                blocks[(10*(L-1))+props.r] = '0'
            
        break
        case 4:
            blocks[L*10+props.r] = 'select'
            blocks[(L+1)*10+1+props.r] = 'select'
            blocks[(L+1)*10+props.r] = 'select'
            blocks[(L+2)*10+props.r] = 'select'

            blocks[(L-1)*10+props.r] = '0'
            blocks[(L)*10+1+props.r] = '0'
        break
        case 5:
            for(let j=0 ;j<2 ; j++){
                blocks[(L+j)*10+j+props.r] = 'select'
                blocks[(L+j+1)*10+j+props.r] = 'select'
            }
            blocks[(L-1)*10+props.r] = '0'
            blocks[(L)*10+props.r+1] = '0'

        break
        default:
            break;
    }
   

    return <div className='space'>
        {blocks.map(item => {
            return <div key={Math.random()}>
                <Block selected={item}/>
            </div>
        })}
    </div>

}

const mapStateToprops = state => {return{
    L:state.L,
    oldL : state.oldL,
    select : state.select,
    r : state.r,
    add : state.add,
    start : state.start,
    reset : state.reset
}}

const mapDispatchToProps = dispatch => {return{
     run : () => dispatch({type : 'add'}),
    setselect : () => dispatch({type : 'select'}),
    rerun : () => dispatch({type : 'rerun'}),
    cancleAdd : () => dispatch({type:'cancleAdd'}),
    set : () => dispatch({type:'set'})
}}

export default connect(mapStateToprops,mapDispatchToProps)(GameSpace)