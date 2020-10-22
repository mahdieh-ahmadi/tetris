import React from 'react'

import './game_space.css'

const GameSpace = () => {
    const blocks = []
    for (let index = 0; index < 10*20 ; index++) {
        blocks.push(index)
        }

    return <div className='space'>
        {blocks.map(item => {
            return <div>
                b
            </div>
        })}
    </div>

}

export default GameSpace