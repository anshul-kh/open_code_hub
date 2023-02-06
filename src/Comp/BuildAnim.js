import React from 'react';
import Lottie from "lottie-react";
import animationData from "../assets/community.json";

const style = {
    height: 500,
    width:500,

  };

  const BuildAnim = () => {
    return (
      <Lottie
        animationData={animationData}
        style={style}
      />
    );
  };
  
  export default BuildAnim;