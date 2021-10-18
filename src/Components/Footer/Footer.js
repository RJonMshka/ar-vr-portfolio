import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/project1">Project 1</Link>
                    </li>
                    <li>
                        <Link to="/project2">Project 2</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;