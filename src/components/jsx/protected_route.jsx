import React from "react"; 
import { Route, Redirect } from "react-router-dom";
import auth from './auth';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                if(this.props.loggedIn !== true && this.props.loggedIn !== 'true') {
                    return <Redirect to={
                        {
                            pathname: "/home",
                            // state: {
                            //     from: props.location
                            // }

                        }
                    } />
                }
                else {
                    return <Component {...props}/>
                }
            }
        }/>
    );
};