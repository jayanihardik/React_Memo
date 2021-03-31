import React, { useState, useMemo } from 'react'
import Button from '@material-ui/core/Button';

const MemoFunction = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const handleCounter1 = () => {
        setCounter1(counter1 + 1)
    }

    const handleCounter2 = () => {
        setCounter2(counter2 + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 800000000) i++
        return (counter1 % 2 === 0) ? true : false
    }, [counter1])

    return (
        <div className="d-flex">
            <div>
                <div className="m-2">
                    Counter1 = {counter1} : {isEven ? "Even" : "Odd"}
                </div>
                <div className="m-2">
                    <Button variant="contained" onClick={handleCounter1} color="primary">
                        increment
                    </Button>
                </div>
            </div>
            <div>
                <div className="m-2">
                    Counter2 = {counter2}
                </div>
                <div className="m-2">
                    <Button variant="contained" onClick={handleCounter2} color="primary">
                        increment
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MemoFunction