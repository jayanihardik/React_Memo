import React from 'react'
import Button from '@material-ui/core/Button';

const Counter2 = (props) => {
    console.log("Counter 2");
    return (
        <div className="ml-2">
            <div className="m-2">
                Counter2 = {props.counter2}
            </div>
            <div className="m-2">
                <Button variant="contained" onClick={props.handleCounter2} color="primary">
                    Primary
                </Button>
            </div>
        </div>
    )
}

export const MemoizedChildTwo = React.memo(Counter2)