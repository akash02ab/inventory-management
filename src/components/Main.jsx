import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router>
    )
}

export default Main;
