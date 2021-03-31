import React, { useState, useCallback, useMemo } from 'react'
import Child from './Child/Child'
import Child1 from './Child1/Child1'
import Child2 from './Child2/Child2'
import Button from '@material-ui/core/Button';

const UseCallBack = () => {
    const [getNumber, setGetNumber] = useState(1)
    const [number, setNumber] = useState(0)

    const handleChangeNumber = () => {
        const newNumber = Math.random();
        setNumber(newNumber)
    }

    const getItem = () => {
        return [getNumber, getNumber + 1, getNumber + 2]
    }

    const getItemChild1 = useCallback((val) => {
        return [getNumber + val, getNumber + 1 + val, getNumber + 2 + val]
    }, [getNumber])

    const getItemChild2 = useMemo(() => {
        return [getNumber, getNumber + 1, getNumber + 2]
    }, [getNumber])

    return (
        <div>
            <div className="m-2">
                <h2 className="mb-2 mt-2">{number}</h2>
                <Button variant="contained" onClick={handleChangeNumber} color="primary">
                    Change Number
                </Button>
            </div>
            <div className="m-2">
                <Child getItem={getItem} />
            </div>
            <div className="m-2">
                <Child1 getItemChild1={getItemChild1} />
            </div>
            <div className="m-2">
                <Child2 getItemChild2={getItemChild2} />
            </div>
        </div>
    )
}

export default UseCallBack