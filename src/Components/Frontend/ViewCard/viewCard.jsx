import React, { useContext } from "react";
import "./ViewCard.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../context/contex";
import { useNavigate } from "react-router-dom";
const ViewCard = () => {
  const { viewDatas } = useContext(AuthContext);
  const history = useNavigate();
  return (
    <div className="div1">
      <div className="view">
        <p className="cancel">
        <FontAwesomeIcon icon={faXmark} className="cancel" onClick={()=>{history("/")}}/>
        </p>
        <div className="imaged">
          <img src={viewDatas?.URL} className="viewImage" />
        </div>
        <div className="imaged">
          <div className="details">
            <p>{viewDatas?.Name}</p>
            <h3>{viewDatas?.DressName}</h3>
            <div className="review">
              <p>
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </p>
              <p>{viewDatas?.Review}</p>
            </div>
            <div className="review">
              <p className="disc">{viewDatas?.discount}</p>
              <p className="pric">{viewDatas?.price}</p>
            </div>
            <p>{viewDatas?.description}</p>
            <div className="Avalable review">
              <h4>Availability: </h4>
              <p className="Avalablity">{viewDatas?.Availability}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewCard;
