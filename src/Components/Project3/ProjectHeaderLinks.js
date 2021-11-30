import { a } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


export default function ProjectHeaderList() {
    return (
        <div className="container project-header-container">
            <div className="project__header">
                <h2 className="project__header--title">Project 3</h2>
                <h2 className="project__header--name">Perspective</h2>
            </div>
            <ul>
                <li>
                    <Link to="project3#pIntro">Introduction</Link>
                </li>
                <li>
                    <Link to="project3#pDescription">Project Description</Link>
                </li>
                <li className="sub-list-item">
                    <Link to="project3#pMenu">The Menu</Link>
                </li>
                <li className="sub-list-item">
                    <Link to="project3#ps1">Classic Project 2 Scene</Link>
                </li>
                <li className="sub-list-item-l2">
                    <Link to="project3#pS1Assets">Assets Used</Link>
                </li>
                <li className="sub-list-item">
                    <Link to="project3#ps2">Mego Playset Perspective</Link>
                </li>
                <li className="sub-list-item-l2">
                    <Link to="project3#pS2Assets">Assets Used</Link>
                </li>
                <li className="sub-list-item">
                    <Link to="project3#ps3">Land of the Giants Perspective</Link>
                </li>
                <li className="sub-list-item-l2">
                    <Link to="project3#">Assets Used</Link>
                </li>
                <li className="sub-list-item">
                    <Link to="project3#ps4">Dancing on the Ceiling</Link>
                </li>
                <li className="sub-list-item-l2">
                    <Link to="project3#pS4Assets">Assets Used</Link>
                </li>
                <li className="sub-list-item">
                    <Link to="project3#ps5">Zero Gravity</Link>
                </li>
                <li className="sub-list-item-l2">
                    <Link to="project3#pS5Assets">Assets Used</Link>
                </li>
                <li>
                    <Link to="project3#pSetup">How to set up the Project</Link>
                </li>
                <li>
                    <Link to="project3#pRepoLink">Link to the Project Repository</Link>
                </li>
                <li>
                    <Link to="project3#pVideoLink">Video Demonstration</Link>
                </li>
                <li>
                    <Link to="project3#pEssay">Essay</Link>
                </li>
            </ul>
        </div>
    );
}