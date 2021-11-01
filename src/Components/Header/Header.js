import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="app-header">
                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/project1">PROJECT 1</Link>
                        </li>
                        <li>
                            <Link to="/project2">PROJECT 2</Link>
                        </li>
                        <li>
                            <Link to="/sc">STUDENT CHOICE</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;