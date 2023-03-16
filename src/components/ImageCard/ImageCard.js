import "./ImageCard.css"

const ImageCard = ({imageUrl,children}) => {

    return(
        <div className="image-card">
            <img className="image-card__img" alt="" src={imageUrl}></img>
            {children}
        </div>
    )
}
export default ImageCard;