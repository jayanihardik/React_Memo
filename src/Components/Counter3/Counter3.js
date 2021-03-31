import React from 'react'
import Button from '@material-ui/core/Button';

const Counter3 = (props) => {
    console.log("Counter 3");
    return (
        <div className="ml-2">
            <div className="m-2">
                Counter3 = {props.counter3}
            </div>
            <div className="m-2">
                <Button variant="contained" onClick={props.handleCounter3} color="primary">
                    Primary
                </Button>
            </div>
        </div>
    )
}

export const MemoizedChildThree = React.memo(Counter3)