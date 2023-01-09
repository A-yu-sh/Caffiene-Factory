import React from "react";
import Container from "../Container";
import IntroImg from "../Assets/Banner.jpg";
import { Link } from "react-router-dom";

const HeroSec = () => {
  return (
    <div className="">
      <Container>
        <div className=" w-full grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center mt-44">
          <div>
            <div className="flex justify-start">
              <h1 className=" text-6xl font-Nunito text-primary-800">
                The Caffeine Factory
              </h1>
            </div>
            <div className="flex justify-start ">
              <p className=" mt-5 text-1.5xl text-secondary-800 pr-10">
                Elevate your coffee game with our specialty roast Experience the
                rich, full flavor of our hand-crafted artisanal coffee. Savor
                the taste of tradition with our classic coffee blend
              </p>
            </div>
            <div className="flex justify-start"></div>
          </div>
          <div className="w-full h-full">
            <img src={IntroImg} className=" w-full rounded-lg " alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSec;
