import React from 'react'

import BlockData from './blockData/blockData'

import './game_data.css'

const GameData = () => {
    return <div className='game_data'>
        <BlockData title = {'Point'} data = {'740'}/>
        <BlockData title = {'Cleans'} data = {'5'}/>
        <BlockData title = {'Level'} data = {'1'}/>
        <BlockData title = {'Next'} data = {'740'}/>
    </div>
}

export default GameData