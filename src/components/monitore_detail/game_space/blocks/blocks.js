import React from 'react'

import './blocks.css'

const Blocks = props => {
    const clas = ['blocks']
    if (props.selected === 'select'){
        clas.push('blocksBlack')
    }
    return <div className={clas.join(' ')}>
        <div className='inBlocks'></div>
    </div>
}

export default Blocks