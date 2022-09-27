import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {LOGIN_PAGE_ROUTE} from "./routes/Routes";
import {Fragment} from "react";

function App() {

    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path={LOGIN_PAGE_ROUTE} element={<LoginPage/>}>
                    </Route>
                </Routes>
            </Fragment>
        </Router>
    );
}

export default App;
