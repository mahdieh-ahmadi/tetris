import React from 'react'

import Btn from '../components/buttons/buttons'
import Monitore from './monitor'

import './tetris.css'

// eslint-disable-next-line

const Tetris = () => {
    return <div className='tetris'>
        <Monitore />
        <div className='setting_btns'>
            <Btn class={'green_btn'}/>
            <Btn class={'red_btn'}/>
        </div>
        <div className='power_btn'>
            <Btn class={'big_btn'}/>
        </div>
        <div className='controll_btn'>
            <Btn class={'medium_btn'}/>
            <Btn class={'medium_btn'}/>
            <Btn class={'medium_btn'}/>
            <Btn class={'medium_btn'}/>
        </div>
    </div>
}

export default Tetris