import React from 'react'

import Btn from '../components/buttons/buttons'
import Monitore from './monitor'

import './tetris.css'

// eslint-disable-next-line

const Tetris = () => {
    return <div className='tetris'>
        <Btn class={'green_btn'}/>
        <Monitore />
    </div>
}

export default Tetris