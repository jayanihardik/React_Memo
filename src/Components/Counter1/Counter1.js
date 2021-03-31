import React from 'react'
import Button from '@material-ui/core/Button';

const Counter1 = (props) => {
    console.log("Counter 1");

    return (
        <div className="ml-2">
            <div className="m-2">
                Counter1 = {props.counter1}
            </div>
            <div className="m-2">
                <Button variant="contained" onClick={props.handleCounter1} color="primary">
                    increment
                </Button>
            </div>
        </div>
    )
}

export const MemoizedChildOne = React.memo(Counter1)