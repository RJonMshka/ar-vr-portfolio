import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
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
            </footer>
        </>
    );
}

export default Footer;