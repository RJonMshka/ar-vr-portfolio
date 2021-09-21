import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";

function Home() {
    return (
        <>
            <Hero></Hero>
            <div className="container">
                <h2 className="course-name">CS 428 - Virtual, Augmented and Mixed Reality</h2>
                <div className="project-link">
                    <Link to="/ar-vr-portfolio/project1">Project 1 Link</Link>
                </div>
            </div>
        </>
    );
}

export default Home;