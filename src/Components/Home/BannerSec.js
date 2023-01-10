import React from "react";
import Container from "../Container";
import Image from "../Assets/IntroImg.jpg";

const BannerSec = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="grid grid-cols-2 place-items-center">
          <div>
            <img src={Image} alt="" className="h-full w-full mt-5 rounded-lg" />
          </div>
          <div>
            <h2 className="mt-14 ml-14 text-6xl max-w-[50ch] font-bold font-Nunito text-primary-800">
              The Best Quality Coffee At One Place
            </h2>
            <p className="text-lg ml-14 selection: mt-8 text-secondary-800 max-w-[75ch]">
              Coffee quality is determined by a variety of factors, including
              the type of coffee beans used, the roast level, the brewing
              method. High-quality coffee is made with specialty-grade beans
              that have been carefully sourced and roasted to highlight their
              unique flavors and aromas
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerSec;
