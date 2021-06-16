import "../styles/signin.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signIn } from "../redux/actions/userAction";
import Nav from "./Nav";

function SignIn() {
    const email = useRef();
    const password = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userState);
    const { validated, signInError } = userState;

    const clickhandler = () => {
        dispatch(signIn(email.current.value, password.current.value));
    };

    if (validated) history.push("/");

    return (
        <>
            <Nav />
            <div className="signin">
                <input
                    type="email"
                    name="email"
                    ref={email}
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    ref={password}
                    placeholder="password"
                />
                <button onClick={clickhandler}>SignIn</button>
                {signInError ? <p className="error">{signInError}</p> : null}
                <Link to="/signup">Create an account</Link>
            </div>
        </>
    );
}

export default SignIn;
