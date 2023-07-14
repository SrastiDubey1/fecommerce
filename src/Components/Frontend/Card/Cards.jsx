import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./cards.css";
import { AuthContext } from "../../context/contex";
import { Link } from "react-router-dom";
import ViewCard from "../ViewCard/viewCard";
const Cards = () => {
  const { data,setViewDatas } = useContext(AuthContext);
 
  const [like, setLike] = useState(false);
  const [addCard, setAddCard] = useState(0);
  const likeData = () => {
    setLike(false);

    setAddCard(addCard + 1);
  };
  const unLikeData = () => {
    setLike(true);

    setAddCard(addCard - 1);
  };
  return (
    <div>
        <p>{addCard}</p>
      <div className="card">
        {data?.map((value, index) => {
          console.log("datA url==", value.URL);
          return (
            <>
              <div className="card_body1">
                <img src={value.URL} className="imges" />
                <div></div>
              </div>
              <div className="card_body1">
                {!like ? (
                  <FontAwesomeIcon icon={faHeart} onClick={() => likeData()} />
                ) : (<>
                    <FontAwesomeIcon icon="fa-light fa-heart" />
                  {/* <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => unLikeData()}
                  /> */}
                  </>
                )}
                <div>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="hading">{value.DressName}</h4>
                <div>
                <p className="discount"> {value.discount}</p>
                <p className="price"> {value.price}</p>
                </div>
               
                
                    <Link to="/view" onClick={()=>setViewDatas(value,index)}>View</Link>
                {/* <button className="price"onClick={()=>{
                    <ViewCard value={value} index={index}/>
                }} >view</button> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
