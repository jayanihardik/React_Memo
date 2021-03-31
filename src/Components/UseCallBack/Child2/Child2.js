import React, { useEffect, useState } from 'react'

const Child2 = ({ getItemChild2 }) => {
    const [item, setItem] = useState()

    useEffect(() => {
        setItem(getItemChild2)
    }, [getItemChild2])

    console.log("child2 component            ", getItemChild2);
    console.log("-------------------------------------------");
    return (
        <div>
            <h3>Child2 Using useMemo Hook</h3>
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

export default Child2

