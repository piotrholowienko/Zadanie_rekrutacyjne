import React, { useState } from 'react'

const Item = ({ id, title }) => {

    const [visible, setVisible] = useState(false)
    // console.log(title);
    return (
        <div id={`${id}`} className='item' onClick={() => setVisible(!visible)}>
            {visible ? title : id}
        </div>
    )
}

export default Item