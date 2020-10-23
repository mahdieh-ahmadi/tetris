import React from 'react'

import './blockData.css'

const blockData = props => {
    return<div className='blockDate'>
        <div className='blockDate_titr'>
            {props.title}
        </div>
        <div className='blockDate_data'>
            {props.data}
        </div>
    </div>
}

export default blockData