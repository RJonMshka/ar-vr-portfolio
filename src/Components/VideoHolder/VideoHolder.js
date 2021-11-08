export default function VideoHolder(props) {
    return (
        <div className="video-holder">
            <video controls>
                <source src={props.videoSrc} />
            </video>
            <p>{props.caption}</p>
        </div>
    );
}