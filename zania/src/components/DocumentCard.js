import React from 'react';
import ImageOverlay from './ImageOverlay';
import PlaceholderSpinner from './PlaceholderSpinner';

const DocumentCard = ({ document, index, handleDragStart, handleDragOver, handleDragEnd }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);

  const handleCardClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const dragStart = (e) => {  
    // Set the dragged item data
    e.dataTransfer.setData('text/plain', index.toString());
    e.dataTransfer.effectAllowed = 'move';
  
    // Calculate the offset for the drag image to align with cursor
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
  
    // Set a custom drag image
    const dragImage = new Image();
    dragImage.src = ''; // Set a transparent image or a blank image URL
    e.dataTransfer.setDragImage(dragImage, offsetX, offsetY);
    // Call the parent handler
    handleDragStart(e, index);
  };
  

  const dragOver = (e) => {
    e.preventDefault();
    handleDragOver(index);
  };

  const dragEnd = () => {
    handleDragEnd();
  };

  return (
    <div
      className="document-card"
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
      onClick={handleCardClick}
    >
      <h3>{document.title}</h3>
      {imageLoading && <PlaceholderSpinner />}
      <img
        src={document.thumbnail}
        alt={document.title}
        style={{ display: imageLoading ? 'none' : 'block', width: "200px", height: "200px" }}
        onLoad={handleImageLoad}
      />
      {showOverlay && (
        <ImageOverlay imageUrl={document.thumbnail} onClose={handleOverlayClose} />
      )}
    </div>
  );
};

export default DocumentCard;
