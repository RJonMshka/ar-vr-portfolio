import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="app-header">
                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/project1">Project 1</Link>
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