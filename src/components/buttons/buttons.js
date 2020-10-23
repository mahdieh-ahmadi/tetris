import React, { useState } from 'react'

import './buttons.css'

const Btn = props => {
    const [classes , setclasses] = useState(['btn' , `${props.class}` ])

    const clicked = () => {
        setclasses([...classes , 'clicked'])
    }

    const mouseup = () => {
        setclasses(['btn' , `${props.class}` ])
    }

return <div className={classes.join(' ')} onMouseDown={ clicked} onMouseUp={mouseup}></div>
}

export default Btn