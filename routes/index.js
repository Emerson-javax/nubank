import { Fragment  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route component = { Home } path="/" exact/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;