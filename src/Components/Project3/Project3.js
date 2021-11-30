
import ProjectItem from "../ProjectItem/ProjectItem";
import Asset from "../Asset/Asset";
import ProjectList from "../ProjectList/ProjectList";
import Essay from "../Project3/Essay";
import Hero from "../Hero/Hero";
import ProjectHeaderList from "./ProjectHeaderLinks";

import p3Data from "../../Data/project3data";

function Project3 () {
    return (
        <>
            <Hero>
                <ProjectHeaderList />
            </Hero>
            <div className="container">
                <div className="project p">
                    <div className="p-introduction p-item" id="pIntro">
                        <ProjectItem 
                            itemHeading={p3Data.introduction.heading}
                            itemText={p3Data.introduction.text} 
                            imageSrc={p3Data.introduction.imageSrc} 
                            imageAlt={p3Data.introduction.imageAlt} 
                            caption={p3Data.introduction.imageCaption}  
                            isItemText = {true} 
                        />
                    </div>

                    <div className="p-desciption p-item" id="pDescription">
                        <ProjectItem 
                            itemHeading={p3Data.description.heading} 
                            isItemText = {true} 
                            isImage = {false}
                            itemText={p3Data.description.text} 
                        />
                    </div>
                    <div className="p-desciption-menu p-item p-sub-item" id="pMenu">
                        <ProjectItem 
                            itemHeading={p3Data.menu.heading}  
                            isItemText = {true} 
                            itemText={p3Data.menu.text}
                            imageSrc={p3Data.menu.imageSrc}
                            imageAlt={p3Data.menu.imageAlt}
                            caption={p3Data.menu.imageCaption}
                        />
                    </div>
                    
                    <div className="p-desciption-s1 p-item p-sub-item" id="ps1">
                        <ProjectItem 
                            itemHeading={p3Data.scene1.heading}  
                            isItemText = {true} 
                            itemText={p3Data.scene1.text}
                            imageSrc={p3Data.scene1.imageSrc}
                            imageAlt={p3Data.scene1.imageAlt}
                            caption={p3Data.scene1.imageCaption}
                        />
                    </div>

                    <div className="p-desc-item p-item p-sub-item-l2">
                        {
                            p3Data.scene1.subparts.map(item1Data => {
                                return (
                                    <ProjectItem 
                                    itemHeading={item1Data.heading}  
                                    isItemText = {true} 
                                    isImage = {false}
                                    itemText={item1Data.text}
                                    />
                                );
                            })
                        }
                    </div>

                    <div className="p-assets p-assets-1 p-item p-sub-item-l2" id="pS1Assets">
                        {!!p3Data.scene1.assets.fromInternet.length && <ProjectItem 
                            itemHeading="Models from Web:"  
                            itemTextComponent={<ul>
                                {p3Data.scene1.assets.fromInternet.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false} 
                        />}
                        {!!p3Data.scene1.assets.own.length && <ProjectItem 
                            itemHeading="Self Created Models:"
                            itemTextComponent={<ul>
                                {p3Data.scene1.assets.own.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene1.assets.images.length && <ProjectItem 
                            itemHeading="Images/Textures Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene1.assets.images.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene1.assets.audios.length && <ProjectItem 
                            itemHeading="Audios/Sounds Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene1.assets.audios.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene1.assets.animations.length && <ProjectItem 
                            itemHeading="Animations Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene1.assets.animations.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                    </div>


                    <div className="p-desciption-s2 p-item p-sub-item" id="ps2">
                        <ProjectItem 
                            itemHeading={p3Data.scene2.heading}  
                            isItemText = {true} 
                            itemText={p3Data.scene2.text}
                            imageSrc={p3Data.scene2.imageSrc}
                            imageAlt={p3Data.scene2.imageAlt}
                            caption={p3Data.scene2.imageCaption}
                        />
                    </div>

                    <div className="p-desc-item p-item p-sub-item-l2">
                        {
                            p3Data.scene2.subparts.map(item1Data => {
                                return (
                                    <ProjectItem 
                                    itemHeading={item1Data.heading}  
                                    isItemText = {true} 
                                    isImage = {false}
                                    itemText={item1Data.text}
                                    />
                                );
                            })
                        }
                    </div>

                    <div className="p-assets p-assets-2 p-item p-sub-item-l2" id="pS2Assets">
                        <ProjectItem 
                            itemHeading="Assets Used:"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        {!!p3Data.scene2.assets.fromInternet.length && <ProjectItem 
                            itemHeading="Models from Web:"  
                            itemTextComponent={<ul>
                                {p3Data.scene2.assets.fromInternet.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false} 
                        />}
                        {!!p3Data.scene2.assets.own.length && <ProjectItem 
                            itemHeading="Self Created Models:"
                            itemTextComponent={<ul>
                                {p3Data.scene2.assets.own.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene2.assets.images.length && <ProjectItem 
                            itemHeading="Images/Textures Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene2.assets.images.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene2.assets.audios.length && <ProjectItem 
                            itemHeading="Audios/Sounds Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene2.assets.audios.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene2.assets.animations.length && <ProjectItem 
                            itemHeading="Animations Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene2.assets.animations.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                    </div>


                    <div className="p-desciption-s4 p-item p-sub-item" id="ps3">
                        <ProjectItem 
                            itemHeading={p3Data.scene3.heading}  
                            isItemText = {true} 
                            itemText={p3Data.scene3.text}
                            imageSrc={p3Data.scene3.imageSrc}
                            imageAlt={p3Data.scene3.imageAlt}
                            caption={p3Data.scene3.imageCaption}
                        />
                    </div>

                    <div className="p-desc-item p-item p-sub-item-l2">
                        {
                            p3Data.scene3.subparts.map(item1Data => {
                                return (
                                    <ProjectItem 
                                    itemHeading={item1Data.heading}  
                                    isItemText = {true} 
                                    isImage = {false}
                                    itemText={item1Data.text}
                                    />
                                );
                            })
                        }
                    </div>

                    <div className="p-assets p-assets-3 p-item p-sub-item-l2" id="pS3Assets">
                        <ProjectItem 
                            itemHeading="Assets Used:"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        {!!p3Data.scene3.assets.fromInternet.length && <ProjectItem 
                            itemHeading="Models from Web:"  
                            itemTextComponent={<ul>
                                {p3Data.scene3.assets.fromInternet.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false} 
                        />}
                        {!!p3Data.scene3.assets.own.length && <ProjectItem 
                            itemHeading="Self Created Models:"
                            itemTextComponent={<ul>
                                {p3Data.scene3.assets.own.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene3.assets.images.length && <ProjectItem 
                            itemHeading="Images/Textures Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene3.assets.images.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene3.assets.audios.length && <ProjectItem 
                            itemHeading="Audios/Sounds Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene3.assets.audios.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene3.assets.animations.length && <ProjectItem 
                            itemHeading="Animations Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene3.assets.animations.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                    </div>


                    <div className="p-desciption-s4 p-item p-sub-item" id="ps4">
                        <ProjectItem 
                            itemHeading={p3Data.scene4.heading}  
                            isItemText = {true} 
                            itemText={p3Data.scene4.text}
                            imageSrc={p3Data.scene4.imageSrc}
                            imageAlt={p3Data.scene4.imageAlt}
                            caption={p3Data.scene4.imageCaption}
                        />
                    </div>

                    <div className="p-desc-item p-item p-sub-item-l2">
                        {
                            p3Data.scene4.subparts.map(item1Data => {
                                return (
                                    <ProjectItem 
                                    itemHeading={item1Data.heading}  
                                    isItemText = {true} 
                                    isImage = {false}
                                    itemText={item1Data.text}
                                    />
                                );
                            })
                        }
                    </div>

                    <div className="p-assets p-assets-4 p-item p-sub-item-l2" id="pS4Assets">
                        {!!p3Data.scene4.assets.fromInternet.length && <ProjectItem 
                            itemHeading="Models from Web:"  
                            itemTextComponent={<ul>
                                {p3Data.scene4.assets.fromInternet.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false} 
                        />}
                        {!!p3Data.scene4.assets.own.length && <ProjectItem 
                            itemHeading="Self Created Models:"
                            itemTextComponent={<ul>
                                {p3Data.scene4.assets.own.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene4.assets.images.length && <ProjectItem 
                            itemHeading="Images/Textures Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene4.assets.images.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene4.assets.audios.length && <ProjectItem 
                            itemHeading="Audios/Sounds Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene4.assets.audios.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene4.assets.animations.length && <ProjectItem 
                            itemHeading="Animations Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene4.assets.animations.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                    </div>


                    <div className="p-desciption-s5 p-item p-sub-item" id="ps5">
                        <ProjectItem 
                            itemHeading={p3Data.scene5.heading}  
                            isItemText = {true} 
                            itemText={p3Data.scene5.text}
                            imageSrc={p3Data.scene5.imageSrc}
                            imageAlt={p3Data.scene5.imageAlt}
                            caption={p3Data.scene5.imageCaption}
                        />
                    </div>

                    <div className="p-desc-item p-item p-sub-item-l2">
                        {
                            p3Data.scene5.subparts.map(item1Data => {
                                return (
                                    <ProjectItem 
                                    itemHeading={item1Data.heading}  
                                    isItemText = {true} 
                                    isImage = {false}
                                    itemText={item1Data.text}
                                    />
                                );
                            })
                        }
                    </div>

                    <div className="p-assets p-assets-5 p-item p-sub-item-l2" id="pS5Assets">
                        <ProjectItem 
                            itemHeading="Assets Used:"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        {!!p3Data.scene5.assets.fromInternet.length && <ProjectItem 
                            itemHeading="Models from Web:"  
                            itemTextComponent={<ul>
                                {p3Data.scene5.assets.fromInternet.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false} 
                        />}
                        {!!p3Data.scene5.assets.own.length && <ProjectItem 
                            itemHeading="Self Created Models:"
                            itemTextComponent={<ul>
                                {p3Data.scene5.assets.own.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} isImage={true} text={asset.text} imageData={asset.imageData} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene5.assets.images.length && <ProjectItem 
                            itemHeading="Images/Textures Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene5.assets.images.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene5.assets.audios.length && <ProjectItem 
                            itemHeading="Audios/Sounds Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene5.assets.audios.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                        {!!p3Data.scene5.assets.animations.length && <ProjectItem 
                            itemHeading="Animations Used:"  
                            itemTextComponent={<ul>
                                {p3Data.scene5.assets.animations.map((asset) => {
                                    return (
                                        <li><Asset key={asset.text} text={asset.text} /></li>
                                    );
                                })}
                            </ul>}
                            isItemTextComponent={true}
                            isItemText = {false} 
                            isImage = {false}
                        />}
                    </div>


                    <div className="p-setup p-item" id="pSetup">
                        <ProjectItem 
                            itemHeading="How to Set up the Project" 
                            itemTextComponent={<ProjectList dataList={p3Data.setup} isOrdered={true} />}
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
                            headLink="https://github.com/RJonMshka/CS428Project3"
                            headLinkText="Link to Repo"
                        />
                    </div>

                    <div className="p-video p-item" id="pVideoLink">
                        <ProjectItem 
                            itemHeading="Video Demonstration" 
                            isItemText = {false} 
                            isImage = {false}
                            isHeadLink= {true}
                            headLink="https://youtu.be/w9shB8JHzSg"
                            headLinkText="Video Link"
                        />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/w9shB8JHzSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="p-essay p-item" id="pEssay">
                        <Essay />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project3;