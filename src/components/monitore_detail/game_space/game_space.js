import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import Block from './blocks/blocks'

import './game_space.css'

const GameSpace = props => {
let blocks = []    
const [newblock , setNewblock] = useState([])
const [select , setselect] = useState(0) 
/* const [L , setL] = useState(18)  */
const [r , setr] = useState(2)
let L = props.L

useEffect(() => {
    for (let index = 0; index < 10*20 ; index++) {
        setNewblock(prestate => [...prestate , index])
        }
    setselect(2)
} , [])

blocks = newblock;

if(select == 1 && props.L < 17 || 
    select == 2 && props.L < 19){
    setTimeout(() => {
        props.run()
        console.log(props.L)
    }, 1000);
}


    switch (select) {
        case 1:
            blocks[L*10+r] = 'select'
            blocks[L*10+1+r] = 'select'
            blocks[(L+1)*10+r] = 'select'
            blocks[(L+2)*10+r] = 'select'

            blocks[(L-1)*10+r] = '0'
            blocks[(L-1)*10+1+r] = '0'
        break;
        case 2:
            for(let j =0 ; j<4 ; j++){
                blocks[(10*L)+j+r] = 'select'
            }
            for(let j =0 ; j<4 ; j++){
                blocks[(10*(L-1))+j+r] = '0'
            }
        break;
        case 3:
            for(let j = 0 ; j<2 ; j++){
                blocks[(10*L)+j+r] = 'select'
                blocks[(10*(L+1))+j+r] = 'select'
            }
        break
        case 4:
            blocks[L*10+r] = 'select'
            blocks[(L+1)*10+1+r] = 'select'
            blocks[(L+1)*10+r] = 'select'
            blocks[(L+2)*10+r] = 'select'
        break
        case 5:
            for(let j=0 ;j<2 ; j++){
                blocks[(L+j)*10+j+r] = 'select'
                blocks[(L+j+1)*10+j+r] = 'select'
            }
        break
        default:
            break;
    }
   

    return <div className='space'>
        {blocks.map(item => {
            return <div>
                <Block selected={item}/>
            </div>
        })}
    </div>

}

const mapStateToprops = state => {return{
    L:state.L
}}

const mapDispatchToProps = dispatch => {return{
    run : () => dispatch({type : 'add'})
}}

export default connect(mapStateToprops,mapDispatchToProps)(GameSpace)