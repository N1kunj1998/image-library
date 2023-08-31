import React from 'react'
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const ImageCard = ({imageUrl, favorite=false}) => {
  return (
    <div className='imageCard'>
        <img src={imageUrl} alt={imageUrl} />
        <p>title: {imageUrl}</p>
        <div className='icons'>
            {favorite ? <FavoriteIcon color="secondary"/> : <FavoriteBorderIcon/>}
        </div>
    </div>
  )
}

export default ImageCard