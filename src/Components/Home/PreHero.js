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
              Enjoy Your Coffee Before Your Activity
            </h1>
            <p className="max-w-[37ch] text-1xl mt-10 text-primary-800 opacity-75 leading-6">
              Boost Your Productivity And Build Your Mood With A Perfect Cup of
              Coffee In The Morning
            </p>
            <Link
              to="/collections/the-caffiene-factory"
              className="border-2 border-primary-800 mt-8 rounded-full px-6 py-2  bg-primary-800  text-backgrnd-100  max-w-fit flex justify-center">
              Browse Coffee
            </Link>
          </div>

          <div className="relative mt-32">
            <img src={Image} />
            <img
              src={BeanBack}
              className="h-72 w-72   absolute -right-32 bottom-0  -z-[1] opacity-50"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PreHero;
