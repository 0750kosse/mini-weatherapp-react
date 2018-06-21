import React from "react";

function Info({ weatherInfo }) {
  return (
    <div className="info">
      <p className="info__item info__item--conditions" id="conditions" />
      <p className="info__item info__item--credits">
        <a href="#" id="credit-user" />
        <span>on</span>
        <a href="#" id="credit-platform">
          Unsplash
        </a>
      </p>
    </div>
  );
}

export default Info;
