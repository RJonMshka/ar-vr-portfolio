import { a } from "react-router-dom";

export default function ProjectHeaderList() {
    return (
        <div className="container project-header-container">
            <div className="project__header">
                <h2 className="project__header--title">Project 3</h2>
                <h2 className="project__header--name">Perspective</h2>
            </div>
            <ul>
                <li>
                    <a href="#pIntro">Introduction</a>
                </li>
                <li>
                    <a href="#pDesciption">Project Description</a>
                </li>
                <li className="sub-list-item">
                    <a href="#pMenu">The Menu</a>
                </li>
                <li className="sub-list-item">
                    <a href="#ps1">Classic Project 2 Scene</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pS1Assets">Assets Used</a>
                </li>
                <li className="sub-list-item">
                    <a href="#ps2">Mego Playset Perspective</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pS2Assets">Assets Used</a>
                </li>
                <li className="sub-list-item">
                    <a href="#ps3">Land of the Giants Perspective</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pS3Assets">Assets Used</a>
                </li>
                <li className="sub-list-item">
                    <a href="#ps4">Dancing on the Ceiling</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pS4Assets">Assets Used</a>
                </li>
                <li className="sub-list-item">
                    <a href="#ps5">Zero Gravity</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pS5Assets">Assets Used</a>
                </li>
                <li>
                    <a href="#pSetup">How to set up the Project</a>
                </li>
                <li>
                    <a href="#pRepoLink">Link to the Project Repository</a>
                </li>
                <li>
                    <a href="#pVideoLink">Video Demonstration</a>
                </li>
                <li>
                    <a href="#pEssay">Essay</a>
                </li>
            </ul>
        </div>
    );
}