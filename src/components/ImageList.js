import React from 'react';

const ImageList = props => {
  let images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.small} key={id} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
