import ImageHolder from "../../ImageHolder/ImageHolder";

export default function ProjectItem({imageSrc, itemHeading, itemText, itemTextComponent, isItemTextComponent = false, caption, isItemText, imageAlt, isImage = true, isHeadLink= false, headLink, headLinkText}) {
    return (
        <>
            <h3 className="p-item__heading">{itemHeading} {isHeadLink && <a href={headLink} target="_blank">{headLinkText}</a>}</h3>
            <div className={`display-flex p-item__body ${isImage ? "" : "no-image"}`}>
                <>
                    {isItemText && <p className="p-item-text" dangerouslySetInnerHTML={{__html: itemText}} />}{isItemTextComponent && itemTextComponent}
                    {isImage && <ImageHolder imageSrc={imageSrc} caption={caption} imageAlt={imageAlt} />}
                </>
            </div>
        </>
    );
}