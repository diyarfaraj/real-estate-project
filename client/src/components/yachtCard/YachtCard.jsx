import React from "react";
import classes from "./yachtCard.module.css";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const YachtCard = ({ yacht }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  return (
    <Link to={`/yacht/${yacht._id}`} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          <img src={`${backendUrl}/images/${yacht.img}`} alt="" />
        </div>
        <h3 className={classes.title}>{yacht.title}</h3>
        <div className={classes.priceAndMaxPassengers}>
          <span>$ {yacht.price}</span>
          <span className={classes.passengers}>
            <BsFillPersonFill /> {yacht.maxPassengers}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default YachtCard;
