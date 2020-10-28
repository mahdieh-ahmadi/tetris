import React from 'react'
import { connect } from 'react-redux'

import Btn from '../components/buttons/buttons'
import Monitore from './monitor'

import './tetris.css'

// eslint-disable-next-line

const Tetris = props => {
    const gotoleft = () => {
        console.log('left')
        props.gotoleft()
    }

    const gotoright = () => {
        console.log('right')
        props.gotoright()
    }

    return <div className='tetris'>
        <h1 className='header_title'>tetris</h1>
        <Monitore />
        <div className='setting_btns'>
            <Btn class={'green_btn'}/>
            <Btn class={'red_btn'}/>
        </div>
        <div className='power_btn'>
            <Btn class={'big_btn'}/>
        </div>
        <div className='controll_btn'>
            <Btn class={'medium_btn'} click={gotoleft}/>{/* left */}
            <Btn class={'medium_btn'} /> 
            <Btn class={'medium_btn'} /> 
            <Btn class={'medium_btn'} click={gotoright}/>{/* right */}
        </div>
    </div>
}

const mapStateToProps = state => {return{

}}

const mapDispatchToProps = dispatch => {return{
    gotoright : () => dispatch({type:'goright'}),
    gotoleft : () => dispatch({type: 'goleft'})
}}

export default connect(mapStateToProps,mapDispatchToProps)(Tetris)