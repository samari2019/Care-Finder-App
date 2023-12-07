
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <>
            <header className="header">
                <nav>
                    <h3 className="Logo">CareFinder</h3>
                    <ul className="list">
                        <li>
                            <NavLink className="nav" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav" to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav" to="/">Find Hospital</NavLink>
                        </li>
                        <li className="login">
                            <NavLink className="navi" to="/LogIn">LogIn</NavLink>
                        </li>
                        <li className="signup">
                            <NavLink className="navi" to="/SignUp">SignUp</NavLink>
                        </li>
                    </ul>

                </nav>
            </header>
        </>
    );
}
export default Header;