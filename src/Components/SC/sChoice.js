import scData from "../../Data/scdata";
import ImageHolder from "../../ImageHolder/ImageHolder";
import VideoHolder from "../VideoHolder/VideoHolder";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectList from "../ProjectList/ProjectList";

export default function StudentChoice() {
    return (<>
            <div className="container sc-container">
                <h1 className="sc-heading">HAND PHYSICS LAB</h1>
                <div className="sc-intro sc-item" id="scIntro">
                        <ProjectItem 
                            itemHeading="INTRODUCTION" 
                            itemText={scData.introduction.text1}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.introduction.text2}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <div className="sc-item sc-item-small">
                            <ImageHolder {...scData.introduction.introImage} />
                        </div>
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.introduction.text3}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.introduction.text4}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.introduction.text5}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                </div>
                <div className="sc-item sc-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/w-w7omxJuOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="sc-sub-item sc-item">
                        <ProjectItem 
                            itemHeading="Interactions and Controls" 
                            itemText={scData.subParts.p1}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <div className="sc-item sc-item-small">
                            <ImageHolder {...scData.subParts.controlImage} />
                        </div>
                        <ProjectItem 
                            itemHeading="User Interface and Experience" 
                            itemText={scData.subParts.p2}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <div className="sc-item sc-item-small">
                            <VideoHolder {...scData.introduction.uiVideo} />
                        </div>
                        <ProjectItem 
                            itemHeading="Visuals" 
                            itemText={scData.subParts.p3}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <div className="sc-item sc-item-small">
                            <ImageHolder {...scData.subParts.uiImage} />
                        </div>
                        <ProjectItem 
                            itemHeading="Sounds and Audios" 
                            itemText={scData.subParts.p4}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="Immersion" 
                            itemText={scData.subParts.p5}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                </div>
                <div className="sc-item sc-item-2">
                        <ProjectItem 
                            itemHeading="Why it is a good use of VR?" 
                            itemText={scData.howGood.text1}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.howGood.text2}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.howGood.text3}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                         <div className="sc-item sc-item-small">
                            <VideoHolder {...scData.introduction.iTaskVideo} />
                        </div>
                </div>
                <div className="sc-item sc-item-3">
                        <ProjectItem 
                            itemHeading="Who are its intended users?" 
                            itemText={scData.intendedUsers.text1}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.intendedUsers.text2}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.intendedUsers.text3}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                         <div className="sc-item sc-item-small">
                            <ImageHolder {...scData.intendedUsers.varyImage} />
                        </div>
                </div>
                <div className="sc-item sc-item-4">
                    <ProjectItem 
                        itemHeading="What are the issues with it?"  
                        isItemText = {false} 
                        isImage = {false} 
                    />
                </div>
                <div className="sc-item sc-item-4">
                    <ProjectItem 
                        itemHeading="Pros:" 
                        itemTextComponent={<ProjectList dataList={scData.pros} isOrdered={true} />}
                        isItemTextComponent={true}
                        isItemText = {false} 
                        isImage = {false}
                    />
                    <ProjectItem 
                        itemHeading="Cons:" 
                        itemTextComponent={<ProjectList dataList={scData.cons} isOrdered={true} />}
                        isItemTextComponent={true}
                        isItemText = {false} 
                        isImage = {false}
                    />
                </div>
                <div className="sc-item sc-item-refs">
                    <ProjectItem 
                        itemHeading="Sources and References" 
                        itemTextComponent={<ProjectList dataList={scData.sources} isOrdered={false} />}
                        isItemTextComponent={true}
                        isItemText = {false} 
                        isImage = {false}
                    />
                </div>
            </div>
        </>);
}