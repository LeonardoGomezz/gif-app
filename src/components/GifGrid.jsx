import PropTypes from 'prop-types';
import { getGitf } from '../helpers/getGifs';
import { useEffect, useState } from 'react';
import { GiftItem } from './GiftItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  const getImages = async() =>{
    const newImages = await getGitf(category)
    setImages(newImages)
  }

  useEffect( () => {
    getImages()
  }, [])

  return (
    <>
    <h3>{category}</h3>
      <div className='card-grid'>

      {
        images.map((image) =>(
          <GiftItem key={image.id}
          {...image}
          />
          ))
        }
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
