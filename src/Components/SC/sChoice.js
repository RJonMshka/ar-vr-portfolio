import scData from "../../Data/scdata";
import ImageHolder from "../../ImageHolder/ImageHolder";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function StudentChoice() {
    return (<>
            <div className="container">
                <h1 className="sc-heading">Hand Physics Lab</h1>
                <div className="sc-intro sc-item" id="scIntro">
                        <ProjectItem 
                            itemHeading="" 
                            itemText={scData.introduction.text}
                            isItemTextComponent={false}
                            isItemText = {true} 
                            isImage = {false}
                        />
                </div>
                <div className="sc-item">
                    <ImageHolder {...scData.introduction.image} />
                </div>
                <div className="sc-item sc-video">
                    <iframe src="https://www.youtube.com/embed/w-w7omxJuOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
            </div>
        </>);
}