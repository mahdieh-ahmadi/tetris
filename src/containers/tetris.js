import React from 'react'
import { connect } from 'react-redux'

import Btn from '../components/buttons/buttons'
import Monitore from './monitor'

import './tetris.css'

// eslint-disable-next-line

const Tetris = props => {
    const gotoleft = () => {
        props.gotoleft()
    }

    const gotoright = () => {
        props.gotoright()
    }

    const reset = () => {
        props.reset()
    }

    return <div className='tetris'>
        <h1 className='header_title'>tetris</h1>
        <Monitore />
        <div className='setting_btns'>
            <span>
            <Btn class={'green_btn'}  click={props.start}/>
            start
            </span>
            <span>
            <Btn class={'red_btn'}  click={props.stop}/>
            stop
            </span>
            
        </div>
        <div className='power_btn'>
            <Btn class={'big_btn'} click={reset}/>
            reset
        </div>
        <div className='controll_btn'>
            <Btn class={'medium_btn'} click={gotoleft}/>{/* left */}
            <Btn class={'medium_btn'} /> 
            
            <Btn class={'medium_btn'} /> 
            <Btn class={'medium_btn'} click={gotoright}/>{/* right */}

            <div className = 'arrows'>
                <div>&#9650;</div>{/* top */}
                <div>&#9660;</div>{/* down */}
                <div>&#9658;</div>{/* right */}
                <div>&#9664;</div>{/* left */}
            </div>
        </div>
    </div>
}

const mapStateToProps = state => {return{

}}

const mapDispatchToProps = dispatch => {return{
    gotoright : () => dispatch({type:'goright'}),
    gotoleft : () => dispatch({type: 'goleft'}),
    start: () => dispatch({type : 'start'}),
    stop : () => dispatch({type : 'stop'}),
    setselect : () => dispatch({type : 'select'}),
    rerun : () => dispatch({type : 'rerun'}),
    reset : () => dispatch({type:'reset'})
}}

export default connect(mapStateToProps,mapDispatchToProps)(Tetris)