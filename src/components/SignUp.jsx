import "../styles/signup.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp, signUpErr } from "../redux/actions/userAction";
import Nav from "./Nav";

function SignUp() {
    const email = useRef();
    const password = useRef();
    const repassword = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const { signUpError, confirmed } = useSelector((state) => state.userState);

    const clickhandler = () => {
        if (password.current.value !== repassword.current.value) {
            dispatch(signUpErr("Password mismatch"));
            return;
        }

        dispatch(signUp(email.current.value, password.current.value));
    };

    if (confirmed) history.push("/");

    return (
        <>
            <Nav />
            <div className="signup">
                <h1>Create new account.</h1>
                <input type="email" ref={email} placeholder="email" />
                <input type="password" ref={password} placeholder="password" />
                <input
                    type="password"
                    ref={repassword}
                    placeholder="re-enter password"
                />
                <button onClick={clickhandler}>Submit</button>
                {signUpError ? <p>{signUpError}</p> : null}
            </div>
        </>
    );
}

export default SignUp;
