import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutePaths} from "./routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const auth = useTypedSelector(state => state.authReducer.isAuth);

    if (auth) {
        return (
            <Switch>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.Component}
                        exact={route.exact}
                    />
                )}
                <Redirect to={RoutePaths.EVENT} />
            </Switch>
        );
    }

    return (
        <Switch>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.Component}
                    exact={route.exact}
                />
            )}
            <Redirect to={RoutePaths.LOGIN} />
        </Switch>
    );
};

export default AppRouter;
