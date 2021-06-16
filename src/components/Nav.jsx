import "../styles/nav.css";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/actions/userAction";

function Nav() {
    const history = useHistory();
    const dispatch = useDispatch();

    const _singIn = () => {
        history.push("/signin");
    }

    const _signOut = () => {
        dispatch(signOut());
        history.push("/");
    }

    const {validated} = useSelector(state => state.userState);

    return (
        <nav>
            <h3>Inventory Management</h3>
            {validated ? 
                <p onClick={_signOut}>SignOut</p>
                :
                <p onClick={_singIn}>SignIn</p>
            }
        </nav>
    );
}

export default Nav;