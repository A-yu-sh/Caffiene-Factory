import React from "react";
import Container from "../Container";
import IntroImg from "../Assets/Banner.jpg";
import { Link } from "react-router-dom";

const TwoColumnSection = ({ heading, paragraph, image, imagePosition }) => {
  return (
    <div className="">
      <Container>
        <div className=" w-full grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center mt-44">
          <div>
            <div className="flex justify-start">
              <h1 className=" text-6xl font-bold font-Nunito text-primary-800">
                {heading}
              </h1>
            </div>
            <div className="flex justify-start ">
              <p className=" mt-5 text-lg text-secondary-800 pr-10">
                {paragraph}
              </p>
            </div>
            <div className="flex justify-start"></div>
          </div>
          <div
            className={` col-start-2 ${
              imagePosition === "left" && "col-start-1"
            } w-full h-full`}
          >
            <img src={image} className=" w-full rounded-lg " alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TwoColumnSection;
