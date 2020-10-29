import React from 'react'

import GameSpace from '../components/monitore_detail/game_space/game_space'
import GameData from '../components/monitore_detail/game_data/game_data'

import './monitore.css'

const Monitore = () => {

    
    return <div className='monitore'>
        <GameSpace />
        <GameData />
    </div>
}

export default Monitore