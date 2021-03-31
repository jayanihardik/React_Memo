import React from 'react'
import { Switch, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';

import NavBar from '../../Common/Navbar'
import Memo from '../../Components/Memo'
import MemoFunction from '../../Components/MemoFunction/MemoFunction'

const MainRoute = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="lg" className="margin-30">
                <Switch>
                    <Route exact path="/" component={Memo} />
                    <Route exact path="/Memo" component={Memo} />
                    <Route exact path="/MemoFunction" component={MemoFunction} />
                </Switch>
            </Container>
        </>
    )
}

export default MainRoute
