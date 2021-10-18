import ImageHolder from "../../ImageHolder/ImageHolder";

export default function Asset({text, imageData, isImage}) {
    return (
        <div className={`asset ${isImage && 'image-asset'}`}>
            <p className="asset-text" dangerouslySetInnerHTML={{__html: text}} />
            {isImage && <ImageHolder imageSrc={imageData.imageSrc} caption={imageData.caption} imageAlt={imageData.imageAlt} />}
        </div>
    );
}