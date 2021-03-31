import React, { useMemo, useState } from 'react'
import { MemoizedChildOne } from '../Counter1/Counter1'
import { MemoizedChildTwo } from '../Counter2/Counter2'
import { MemoizedChildThree } from '../Counter3/Counter3'
import Button from '@material-ui/core/Button';

const MemoPage = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [counter3, setCounter3] = useState(0)
    const [memoCounter, setMemoCounter] = useState(0)

    const handleMemoCounter = () => {
        setMemoCounter(memoCounter + 1)
    }

    const handleCounter1 = React.useCallback(() => {
        setCounter1(counter1 + 1)
    }, [counter1])

    const handleCounter2 = React.useCallback(() => {
        setCounter2(counter2 + 1)
    }, [counter2])

    const handleCounter3 = React.useCallback(() => {
        setCounter3(counter3 + 1)
    }, [counter3])


    console.log("MemoPage");
    return (
        <>
            <div className="mb-5 ml-2">
                <div className="m-2">
                    Memo Counter = {memoCounter}
                </div>
                <div className="m-2">
                    <Button variant="contained" onClick={() => handleMemoCounter()} color="primary">
                        increment
                    </Button>
                </div>
            </div>

            <div className="d-flex">
                <MemoizedChildOne counter1={counter1} handleCounter1={handleCounter1} />
                <MemoizedChildTwo counter2={counter2} handleCounter2={handleCounter2} />
                <MemoizedChildThree counter3={counter3} handleCounter3={handleCounter3} />
            </div>
        </>
    )
}

export default MemoPage
