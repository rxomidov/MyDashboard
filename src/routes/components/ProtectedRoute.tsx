import React from "react";
import { Route, Redirect } from "react-router-dom";

interface ProtectedRoute {
    component: any,
    name: string,
    path: string,
}

const ProtectedRoute:React.FC<ProtectedRoute> = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("token") || "token" ;

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
