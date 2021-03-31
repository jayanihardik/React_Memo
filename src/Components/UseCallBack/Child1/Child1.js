import React, { useEffect, useState } from 'react'

const Child1 = ({ getItemChild1 }) => {
    const [item, setItem] = useState()

    useEffect(() => {
        setItem(getItemChild1(10))
    }, [getItemChild1])

    console.log("child 1 component                      ", getItemChild1);
    console.log("------------------------------------------------------");

    return (
        <div>
            <h3>Child1 Using useCallback Hook </h3>
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


export default Child1