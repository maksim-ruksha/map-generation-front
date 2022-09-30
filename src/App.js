import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE} from "./routes/Routes";
import {Fragment} from "react";
import LoginPageContainer from "./containers/LoginPage/LoginPageContainer";
import RegisterPageContainer from "./containers/RegisterPage/RegisterPageContainer";

function App() {

    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path={LOGIN_PAGE_ROUTE} element={<LoginPageContainer/>}>
                    </Route>
                    <Route exact path={REGISTER_PAGE_ROUTE} element={<RegisterPageContainer/>}>
                    </Route>
                </Routes>
            </Fragment>
        </Router>
    );
}

export default App;
