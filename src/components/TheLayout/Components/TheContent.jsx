import React, {Suspense} from 'react';
import {
    Redirect, Route, Switch
} from 'react-router-dom';
import { motion } from "framer-motion";

// routes config
import routes from '../../../routes/routes'
import styled from "styled-components";
import {RotateSpinner} from "react-spinners-kit";

const loading = (
    <div className="d-flex pt-5 mt-5 align-items-center justify-content-center">
        <RotateSpinner size={50} color={`rgba(28, 144, 255, 0.5)`} loading={true}/>
    </div>
);

const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 1
        }
    }
};

const TheContent = () => {
    return (
        <Container>
            <main className="main">
                <div className="container-fluid">
                    <Suspense fallback={loading}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => (
                                            <motion.div
                                                variants={container}
                                                initial="hidden"
                                                animate="visible">
                                                <route.component {...props} />
                                            </motion.div>
                                        )}/>
                                )
                            })}
                            <Redirect from="/" to="/dashboard"/>
                        </Switch>
                    </Suspense>
                </div>
            </main>
        </Container>
    );
};

export default React.memo(TheContent);

const Container = styled.div`
  .main{
    flex-basis: auto;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;