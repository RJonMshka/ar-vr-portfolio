import ImageHolder from "../../ImageHolder/ImageHolder";
import ProjectList from "../ProjectList/ProjectList";

export default function KK2({imageSrc, itemHeading, caption, isItemText, imageAlt, isImage = true, kk2data}) {
    const { sayingsHeading, sayings, mainText } = kk2data;
    return (
        <>
            <h3 className="p-item__heading">{itemHeading}</h3>
            <div className={`display-flex p-item__body ${isImage ? "" : "no-image"}`}>
                <>
                    <div  className="p-item-text">
                        {isItemText && <p>
                            {mainText}
                        </p>}
                        <p className="m8bsaying-head">{sayingsHeading}</p>
                        <div className="m8bsayings display-flex">
                            {sayings.map((saying) => {
                                return (
                                    <div className="m8bsaying-category" key={`saying ${saying.sayingsSubHeading}`}>
                                        <p className="m8bsaying-category-head">{saying.sayingsSubHeading}</p>
                                        <ProjectList dataList={saying.list} isOrdered={true} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {isImage && <ImageHolder imageSrc={imageSrc} caption={caption} imageAlt={imageAlt} />}
                </>
            </div>
        </>
    );
}