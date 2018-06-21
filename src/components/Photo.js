import React from "react";

function Photo({ image }) {
  return (
    <div>
      <figure className="photo" id="photo">
        <img src={image ? image.urls.regular : ""} />
      </figure>
    </div>
  );
}

export default Photo;
