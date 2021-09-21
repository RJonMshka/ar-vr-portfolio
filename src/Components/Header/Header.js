import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="app-header">
                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/ar-vr-portfolio">Home</Link>
                        </li>
                        <li>
                            <Link to="/ar-vr-portfolio/project1">Project 1</Link>
                        </li>
                        <li>
                            <Link to="/ar-vr-portfolio/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;