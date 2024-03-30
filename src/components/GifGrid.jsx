import PropTypes from "prop-types";
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading === true ? (
        <div className="loading-container">
          <h2>Cargando</h2>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GiftItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
