import React from 'react';
import './OverlayedImage.css'; // Import the CSS file for styling

function OverlayedImage(props) {
    return (
        <div className="image-container">
            <img src={props.img} alt={props.alt} className="image" />
            <div className="overlay">
                <h2 className="title">{props.title}</h2>
                <p className="description">{props.body}</p>
            </div>
        </div>
    );
}

export default OverlayedImage;