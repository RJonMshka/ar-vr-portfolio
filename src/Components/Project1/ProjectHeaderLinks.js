import { a } from "react-router-dom";

export default function ProjectHeaderList() {
    return (
        <div className="container project-header-container">
            <div className="project__header">
                <h2 className="project__header--title">Project 1</h2>
                <h2 className="project__header--name">ROAD TO NOWHERE</h2>
            </div>
            <ul>
                <li>
                    <a href="#pIntro">Introduction</a>
                </li>
                <li>
                    <a href="#pSetup">How to set up the Project</a>
                </li>
                <li>
                    <a href="#pRepoLink">Link to the Project Repository</a>
                </li>
                <li>
                    <a href="#pDesciption">Project Description</a>
                </li>
                <li className="sub-list-item">
                    <a href="#pDesckk1">Knickknack 1 - Tokyo, Japan</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pDesckk1Assets">Assets Used</a>
                </li>
                <li className="sub-list-item">
                    <a href="#pDesckk2">Knickknack 2 - Paris, France</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pDesckk2Assets">Assets Used</a>
                </li>
                <li className="sub-list-item">
                    <a href="#pGPlane">Ground Plane Knickknack</a>
                </li>
                <li>
                    <a href="#pVideoSection">Video Demonstration</a>
                </li>
                <li>
                    <a href="#pEssay">What does the future looks like?</a>
                </li>
            </ul>
        </div>
    );
}