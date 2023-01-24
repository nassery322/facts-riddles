import React from "react";
import './Button.css'
function BlobButton(props) {
  return (
  
      <button className="blob-btn" onClick={props.onClick} style={props.style}>
        {props.children}
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      
    
  );
}

export default BlobButton;
