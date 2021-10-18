import { a } from "react-router-dom";

export default function ProjectHeaderList() {
    return (
        <div className="container project-header-container">
            <div className="project__header">
                <h2 className="project__header--title">Project 2</h2>
                <h2 className="project__header--name">(Don't Fear) The Reaper</h2>
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
                    <a href="#pDesc1">Inside Space - Fear of working in an Office</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pDesc1Assets">Assets Used</a>
                </li>
                <li className="sub-list-item">
                    <a href="#pDesc2">Outside Space</a>
                </li>
                <li className="sub-list-item-l2">
                    <a href="#pDesc2Assets">Assets Used</a>
                </li>
                <li>
                    <a href="#pVideoSection">Video Demonstration</a>
                </li>
                <li>
                    <a href="#pEssay">Essay</a>
                </li>
            </ul>
        </div>
    );
}