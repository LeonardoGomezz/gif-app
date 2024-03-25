import PropTypes from 'prop-types';
import { getGitf } from '../helpers/getGifs';
import { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  const getImages = async() =>{
    const newImages = await getGitf(category)
    setImages(newImages)
    console.log(newImages)
  }

  console.log('images => ', images)

  useEffect( () => {
    getImages()
  }, [])

  return (
    <>
    <h3>{category}</h3>
    <ol>
      {
        images.map((item) =>(
          <li key={item.id}>{item.title}</li>
        ))
      }
    </ol>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
