export default function ImageHolder(props) {
    return (
        <div className="image-holder">
            <img width="1" height="1" src={props.imageSrc} alt={props.imageAlt} />
            <p>{props.caption}</p>
        </div>
    );
}