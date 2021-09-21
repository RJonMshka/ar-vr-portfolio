
import Hero from "../Hero/Hero";
import ProjectHeaderList from "./ProjectHeaderLinks";
import IntroImage from "../../assets/images/intro-image.jpg";
import Kk1Image from "../../assets/images/kk1_model.png";
import Kk2Image from "../../assets/images/kk2_model.png";
import gpImage from "../../assets/images/gpImage.jpg";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectList from "../ProjectList/ProjectList";
import ProjectListData from "../../Data/project1setup.json";
import kk1data from "../../Data/kk1data";
import kk2data from "../../Data/kk2data";
import KK2 from "./Knickknack2";
import Asset from "./Asset";
import Essay from "../Essay/Essay";

function Project1() {
    return (
        <>
            <Hero>
                <ProjectHeaderList />
            </Hero>
            <div className="container">
                <div className="project p">
                    <div className="p-introduction p-item" id="pIntro">
                        <ProjectItem 
                            itemHeading="INTRODUCTION" 
                            itemText="The Project 1 is focused towards creating Augmented Reality Knickknacks related to particular places. The idea of this project is that when we will be in future, everyone will have their AR enabled eye-wear on all the times. People generally collect knickknacks which remind them of the places they visited or travelled and the activities or sight-seeing they performed there. Now, with help of augmented reality, these knickknacks would be much smarter and would look may much cooler. This project is going to convert two basic 3d paper cubes into Augmented Reality Knickknacks which will remind user of those particular places and will also provide the user with some real-time weather information about those places. The project will also demonstrate the Augmented Reality’s capabilities to place a bigger version of the knickknack in ground plane. The two places that have been explored in this project are Paris and Tokyo." 
                            imageSrc={IntroImage} 
                            imageAlt="Intro Image" 
                            caption="Both Knickknacks in same image" 
                            isItemText = {true} 
                        />
                    </div>
                    <div className="p-setup p-item" id="pSetup">
                        <ProjectItem 
                            itemHeading="How to Set up the Project" 
                            itemTextComponent={<ProjectList dataList={ProjectListData} isOrdered={true} />}
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
                            headLink="https://github.com/RJonMshka/cs428-project1"
                            headLinkText="Link"
                        />
                    </div>
                    <div className="p-desciption p-item" id="pDesciption">
                        <ProjectItem 
                            itemHeading="PROJECT DESCRIPTION"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                    </div>
                    <div className="p-desciption-kk p-item p-sub-item" id="pDesckk1">
                        <ProjectItem 
                            itemHeading="Knickknack 1: Tokyo, Japan"  
                            isItemText = {true} 
                            itemText="This knickknack uses Merge Cube as a target. It features models like Vending Machines, Pikachu Pokémon, Poke ball, Pacman, Night Café Sign, etc. This knickknack has the capability to paint itself as a virtual 3D object in real-world when it is tracked with Vuforia’s AR Camera. It also plays an ambient music and is able to provide user with real-time weather data with the temperature in Fahrenheit. A classic Magic 8 Ball functionality has also been integrated into it. It automatically generates a Magic 8-Ball saying with a feedback audio when flipped upside down and again flipped back up. There are some subtle animations present in this knickknack which makes it even more interesting."
                            imageSrc={Kk1Image}
                            imageAlt="KnickKnack 1 image"
                            caption="Knickknack 1: based on Merge Cube"
                        />
                    </div>
                    <div className="p-assets p-assets-1 p-item p-sub-item-l2" id="pDesckk1Assets">
                        <ProjectItem 
                            itemHeading="Assets Used:"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        <ProjectItem 
                            itemHeading="Models from Internet:"  
                            itemTextComponent={<ul>
                                {kk1data.assets.fromInternet.map((asset) => {
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
                            itemHeading="Models created:"
                            itemTextComponent={<ul>
                                {kk1data.assets.created.map((asset) => {
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
                            itemHeading="Images Used:"  
                            itemTextComponent={<ul>
                                {kk1data.assets.images.map((asset) => {
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
                            itemHeading="Audios Used:"  
                            itemTextComponent={<ul>
                                {kk1data.assets.audios.map((asset) => {
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
                    <div className="p-desciption-kk p-item p-sub-item" id="pDesckk2">
                        <KK2 
                            itemHeading="Knickknack 2: Paris, France"  
                            kk2data = {kk2data} 
                            isItemText = {true} 
                            imageSrc={Kk2Image}
                            imageAlt="KnickKnack 2 image"
                            caption="Knickknack 2: based on Class Cube"
                        />
                    </div>
                    <div className="p-assets p-assets-1 p-item p-sub-item-l2" id="pDesckk1Assets">
                        <ProjectItem 
                            itemHeading="Assets Used:"  
                            isItemText = {false} 
                            isImage = {false} 
                        />
                        <ProjectItem 
                            itemHeading="Models from Internet:"  
                            itemTextComponent={<ul>
                                {kk2data.assets.fromInternet.map((asset) => {
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
                            itemHeading="Models created:"
                            itemTextComponent={<ul>
                                {kk2data.assets.created.map((asset) => {
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
                            itemHeading="Images Used:"  
                            itemTextComponent={<ul>
                                {kk2data.assets.images.map((asset) => {
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
                            itemHeading="Audios Used:"  
                            itemTextComponent={<ul>
                                {kk2data.assets.audios.map((asset) => {
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
                    <div className="p-gplane p-item" id="pGPlane">
                        <ProjectItem 
                            itemHeading="Ground Plane Knickknack"  
                            isItemText = {true} 
                            itemText="This is another knickknack which is similar to Knickknack 1 in its appearance but it is quite big in size. This knickknack utilizes the Ground Plane and Plane Finder components of Vuforia, which detect a ground plane in real time. User can place the object the object just by tapping on the screen. In this way, user can visualize their knickknacks at a much larger scale and place them wherever they want in real space."
                            imageSrc={gpImage}
                            imageAlt="Ground Plane KnickKnack image"
                            caption="Ground Plane KnickKnack"
                        />
                    </div>
                    <div className="p-repo p-item" id="pRepoLink">
                        <ProjectItem 
                            itemHeading="Video Demonstration" 
                            isItemText = {false} 
                            isImage = {false}
                            isHeadLink= {true}
                            headLink=""
                            headLinkText="Video Link"
                        />
                    </div>
                    <div className="p-essay p-item" id="pEssay">
                        <Essay />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project1;