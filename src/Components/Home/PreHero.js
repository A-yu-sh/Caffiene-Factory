import React from "react";
import { Link } from "react-router-dom";
import Image from "../Assets/Group-3.png";
import BeanBack from "../Assets/Bean-bg.png";
import Container from "../Container";

const PreHero = () => {
  return (
    <>
      <div></div>
      <Container>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-5xl mt-56  text-primary-800 font-bold font-Nunito max-w-[17ch]">
              Enjoy Your Coffee before your activity
            </h1>
            <p className="max-w-[37ch] text-1xl mt-10 text-primary-800 opacity-75 leading-6">
              Boost Your Productivity And Build Your Mood With A Perfect Cup of
              Coffee In The Morning
            </p>
          </div>

          <div>
            <img src={Image} className=" mt-32" />
            <img
              src={BeanBack}
              className="h-72 w-72 -mt-72  ml-[350px]  z-50 opacity-50"
            />
          </div>
          <Link
            to="/collections/the-caffiene-factory"
            className="border-2 rounded-3xl max-w-[25%] flex justify-center"
          >
            Browse Coffee
          </Link>
        </div>
      </Container>
    </>
  );
};

export default PreHero;
