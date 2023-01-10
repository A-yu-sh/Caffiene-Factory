import React from "react";
import Image from "../Assets/coffee-cup.jpg";
import Container from "../Container";

const PostBanner = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 mt-10 gap-8  place-items-center">
          <div>
            <h1 className="flex justify-center text-primary-800 text-6xl font-bold font-Nunito">
              Coffee For Your Soul
            </h1>
            <p className="flex justify-center mt-8 text-lg">
              THE COFFEE FACTORY is a place away from the hectic city where you
              can relax and enjoy great coffee and food
            </p>
          </div>
          <div>
            <img src={Image} className="rounded-lg mt-10" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PostBanner;
