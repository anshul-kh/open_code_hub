import React from 'react';
import Lottie from "lottie-react";
import animationData from "../assets/lottie.json";

const style = {
    height: 500,
    width:500,

  };

  const WelcomeAnim = () => {
    return (
      <Lottie
        animationData={animationData}
        style={style}
      />
    );
  };
  
  export default WelcomeAnim;