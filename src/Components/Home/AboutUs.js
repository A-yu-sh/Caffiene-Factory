import React from "react";
import pic1 from "../Assets/pic1.jpg";
import Container from "../Container";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const AboutUs = () => {
  return (
    <Container>
      <div className="grid grid-cols-2  mt-44">
        <div>
          <img src={pic1} className="w-full h-full rounded-lg" />
        </div>
        <div className="ml-14 max-w-[50ch] mt-24 font-Nunito text-1xl pb-5">
          <p>
            At Caffiene Factory, we are passionate about coffee and dedicated to
            bringing our customers the highest quality, sustainably-sourced
            beans from around the world. We believe that the perfect cup of
            coffee starts with the finest ingredients, which is why we work
            closely with farmers to ensure that our coffee is grown using
            organic, eco-friendly practices.
          </p>
          <p className="mt-8">
            Our team of coffee experts has spent years traveling the globe,
            tasting and sourcing the best beans available. We roast our coffee
            in small batches to ensure that every bag is full of the freshest,
            most flavorful beans possible.
          </p>
          <p className="mt-8">
            Whether you're a seasoned coffee connoisseur or just starting your
            journey into the world of specialty coffee, we have something for
            everyone. From light and fruity to bold and roasted, our selection
            of single origin and blended coffees has something to suit every
            taste.
          </p>
          <p className="mt-8">
            Thank you for choosing Caffiene Factory for your coffee needs. We
            hope to be a part of your daily ritual and bring a little joy to
            each and every cup.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
