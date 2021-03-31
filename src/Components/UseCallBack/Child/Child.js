import React, { useEffect, useState } from 'react'

const Child = ({ getItem }) => {
    const [item, setItem] = useState()

    useEffect(() => {
        setItem(getItem())
    }, [getItem])

    console.log("child component   ", getItem);
    console.log("--------------------------------------------" );
    return (
        <div>
            <h3>Child Using simple function </h3>
            {
                item && item.map(x => (
                    <div key={x}>
                        {x}
                    </div>
                ))
            }
        </div>
    )
}


export default Child