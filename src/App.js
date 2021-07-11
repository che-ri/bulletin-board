import React, { useEffect } from "react";
import { actionCreators as postActions } from "./redux/modules/post";
import { useDispatch } from "react-redux";

import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

import Home from "./pages/Home";
import Write from "./pages/Write";
import Detail from "./pages/Detail";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getPostFB());
    }, []);
    return (
        <>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/write" exact component={Write} />
                    <Route path="/detail/:id" exact component={Detail} />
                    <Redirect to="/" />
                </Switch>
            </ConnectedRouter>
        </>
    );
}

export default App;
