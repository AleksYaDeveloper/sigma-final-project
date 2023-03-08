import React, { useState } from "react";
import { Link } from "react-router-dom";

const Successful = () => {
  return (
    <div className="successful">
      <div className="successful__content">
        <div className="successful__image-20">
          <img src="/assets/20.jpg" alt="20" />
        </div>
        <h1 className="successful__title">
          Years Of Successful Working The Market
        </h1>

        <div className="successful__button">
          <Link to="/read">READ MORE</Link>
        </div>
      </div>
      <div className="successful__image">
        <img src="/assets/5.jpg" alt="Room interior" />
      </div>
    </div>
  );
};

export default Successful;
