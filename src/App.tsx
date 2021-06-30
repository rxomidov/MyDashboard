import React from 'react';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import ProtectedRoute from "./routes/components/ProtectedRoute";
import './App.css';
import api from "./services/api/api";
import {MetroSpinner} from "react-spinners-kit";

const loading = (
    <div className="d-flex pt-5 mt-5 align-items-center justify-content-center">
        <MetroSpinner size={50} color={`rgba(28, 144, 255, 0.5)`} loading={true}/>
    </div>
);

// compnents
const TheLayout = React.lazy(() => import('./components/TheLayout/TheLayout'));

// pages
const Login = React.lazy(() => import('./pages/Login/Login'));

function App() {

    const history = useHistory();
    api.subscribe(history);

    return (
        <BrowserRouter>
            <React.Suspense fallback={loading}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <ProtectedRoute path="/" name="Home" component={TheLayout}/>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
