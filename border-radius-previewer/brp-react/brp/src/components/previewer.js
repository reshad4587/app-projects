import React, { useState } from 'react';
import './previewStyles.css';

const BorderRadiusPreviewer = () => {
    const [topLeft, setTopLeft] = useState(0);
    const [topRight, setTopRight] = useState(0);
    const [bottomLeft, setBottomLeft] = useState(0);
    const [bottomRight, setBottomRight] = useState(0);

    const handleCopyCSS = () => {
        const cssString = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;
        navigator.clipboard.writeText(cssString);
    };

    return (
        <div className="border-radius-previewer">
          <div
            className="preview-box"
            style={{
              borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
            }}
          ></div>
    
          <div className="input-container">
            <div>
              <label>Top Left: </label>
              <input type="number" value={topLeft} onChange={(e) => setTopLeft(e.target.value)} />
            </div>
            <div>
              <label>Top Right: </label>
              <input type="number" value={topRight} onChange={(e) => setTopRight(e.target.value)} />
            </div>
            <div>
              <label>Bottom Left: </label>
              <input type="number" value={bottomLeft} onChange={(e) => setBottomLeft(e.target.value)} />
            </div>
            <div>
              <label>Bottom Right: </label>
              <input type="number" value={bottomRight} onChange={(e) => setBottomRight(e.target.value)} />
            </div>
          </div>
    
          <button className="copy-button" onClick={handleCopyCSS}>Copy CSS</button>
        </div>
    );
};

export default BorderRadiusPreviewer