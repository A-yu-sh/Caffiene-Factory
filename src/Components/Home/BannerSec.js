import React from "react";
import Container from "../Container";
import Image from "../Assets/IntroImg.jpg";

const BannerSec = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="grid grid-cols-2">
          <div>
            <img src={Image} alt="" className="h-72 w-full mt-5 rounded-lg" />
          </div>
          <div>
            <h1 className="mt-14 ml-14 text-5xl max-w-[50ch] font-Nunito text-primary-800">
              The Best Quality Coffee At One Place
            </h1>
            <p className="text-1.5xl ml-14 selection: mt-8 text-secondary-800 max-w-[75ch]">
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
