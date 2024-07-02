import React, { useEffect } from 'react';

const ImageOverlay = ({ imageUrl, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleClose = (event) => {
        event.stopPropagation();
        onClose();
    };

    return (
        <div className="overlay" onClick={onClose}>
            <div className="overlay-content" onClick={(event) => event.stopPropagation()}>
                <span className="close-btn" onClick={handleClose}>&times;</span>
                <img src={imageUrl} alt="Overlay" style={{ maxWidth: '500px', maxHeight: '500px' }} />
            </div>
        </div>
    );
};

export default ImageOverlay;
