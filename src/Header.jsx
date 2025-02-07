
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav-bar">

                    <div className="logo-con">
                        <h3 className="Logo">CareFinder</h3>
                    </div>

                    <ul className="list">
                        <div className="HAF-con">
                            <li>
                                <NavLink className="nav" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav" to="/">About</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav" to="/FindHospital">Find Hospital</NavLink>
                            </li>
                        </div>

                        <div className="login-sigin-con">
                            <li className="login">
                                <NavLink className="navi" to="/LogIn">Login</NavLink>
                            </li>
                            <li className="login">
                                <NavLink className="navi" to="/SignUp">Signup</NavLink>
                            </li>
                        </div>
                    </ul>

                </nav>
            </header>
        </>
    );
}
export default Header;