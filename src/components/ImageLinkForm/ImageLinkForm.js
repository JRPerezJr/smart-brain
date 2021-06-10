import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      onButtonSubmit();
    }
  };

  return (
    <div>
      <p className="f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          {/* Todo Form Validation */}
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            placeholder="enter a image url"
            onChange={onInputChange}
            onKeyUp={handleKeyPress}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
