import Hero from "../Hero/Hero";
import ProjectHeaderList from "./ProjectHeaderLinks";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectList from "../ProjectList/ProjectList";
import Asset from "../Asset/Asset";
import Essay from "./Essay";


import p2Data from "../../Data/project2.data";

import main from "../../assets/images/Project2/main_image.PNG";
import IntroImage from "../../assets/images/Project2/intro_image.PNG";
import OutsideImage from "../../assets/images/Project2/outside_space.PNG";

function Project2() {
    return (
        <>
            <Hero>
                <ProjectHeaderList />
            </Hero>
            <div className="container">
                <div className="project p">
                    <div className="p-introduction p-item" id="pIntro">
                        <ProjectItem 
                            itemHeading={p2Data.introduction.heading}
                            itemText={p2Data.introduction.text} 
                            imageSrc={main} 
                            imageAlt={p2Data.introduction.imageAlt} 
                            caption={p2Data.introduction.imageCaption}  
                            isItemText = {true} 
                        />
                    </div>
                    <div className="p-setup p-item" id="pSetup">
                        <ProjectItem 
                            itemHeading="How to Set up the Project" 
                            itemTextComponent={<ProjectList dataList={p2Data.setup} isOrdered={true} />}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                            
                        />
                    </div>
                    <div className="p-repo p-item" id="pRepoLink">
                        <ProjectItem 
                            itemHeading="Github Repository Link to the Project:" 
                            isItemText = {false} 
                            isImage = {false}
                            isHeadLink= {true}
                            headLink="https://github.com/RJonMshka/cs428-Project2"
                            headLinkText="Link"
                        />
                    </div>
                    <div className="p-desciption p-item" id="pDesciption">
                        <ProjectItem 
                            itemHeading={p2Data.description.heading} 
                            isItemText = {true} 
                            isImage = {false}
                            itemText={p2Data.description.text} 
                        />
                    </div>
                    <div className="p-desciption-inside p-item p-sub-item" id="pDesc1">
                        <ProjectItem 
                            itemHeading={p2Data.desc1.heading}  
                            isItemText = {true} 
                            itemText={p2Data.desc1.text}
                            imageSrc={IntroImage}
                            imageAlt={p2Data.desc1.imageAlt}
                            caption={p2Data.desc1.imageCaption}
                        />
                    </div>
                    <div className="p-assets p-assets-1 p-item p-sub-item-l2" id="pDesc1Assets">
                        <ProjectItem 
                            itemHeading="Assets Used:"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        <ProjectItem 
                            itemHeading="Models from Web:"  
                            itemTextComponent={<ul>
                                {p2Data.desc1.assets.fromInternet.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        <ProjectItem 
                            itemHeading="Self Created Models:"
                            itemTextComponent={<ul>
                                {p2Data.desc1.assets.created.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="Images/Textures Used:"  
                            itemTextComponent={<ul>
                                {p2Data.desc1.assets.images.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="Audios/Sounds Used:"  
                            itemTextComponent={<ul>
                                {p2Data.desc1.assets.audios.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />
                    </div>
                    <div className="p-desciption-inside p-item p-sub-item" id="pDesc2">
                        <ProjectItem 
                            itemHeading={p2Data.desc2.heading}  
                            isItemText = {true} 
                            itemText={p2Data.desc2.text}
                            imageSrc={OutsideImage}
                            imageAlt={p2Data.desc2.imageAlt}
                            caption={p2Data.desc2.imageCaption}
                        />
                    </div>
                    <div className="p-assets p-assets-2 p-item p-sub-item-l2" id="pDesc2Assets">
                        <ProjectItem 
                            itemHeading="Assets Used:"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        <ProjectItem 
                            itemHeading="Models from Web:"  
                            itemTextComponent={<ul>
                                {p2Data.desc2.assets.fromInternet.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        <ProjectItem 
                            itemHeading="Audios/Sounds Used:"  
                            itemTextComponent={<ul>
                                {p2Data.desc2.assets.audios.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />
                    </div>
                    <div className="p-video p-item" id="pVideoLink">
                        <ProjectItem 
                            itemHeading="Video Demonstration" 
                            isItemText = {false} 
                            isImage = {false}
                            isHeadLink= {true}
                            headLink="https://www.youtube.com/watch?v=YLtpWVJWQMA"
                            headLinkText="Video Link"
                        />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YLtpWVJWQMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="p-essay p-item" id="pEssay">
                        <Essay />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project2;