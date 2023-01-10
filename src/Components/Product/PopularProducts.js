import React, { useContext, useEffect } from "react";
import { CoffeeContext } from "../../App";
import { Link, redirect } from "react-router-dom";
import gif from "../Assets/Coffee-Loading.gif";

const PopularProducts = ({ id }) => {
  const { coffeeData } = useContext(CoffeeContext);

  //   useEffect(() => {}, [id]);
  return (
    <div>
      <div>
        <h1 className="mt-16 flex justify-center text-2xl text-Nunito">
          Products You Might Like
        </h1>
        {coffeeData ? (
          <div className="flex gap-6 mt-7 justify-around">
            {coffeeData
              .filter((elem, idx) => elem.id != id)
              .map((elem) => (
                <div
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <Link
                    to={`/collections/the-caffiene-factory/${elem.id}/${elem.Name}/${elem.Category}`}
                  >
                    <div className="ml-5 border-2">
                      <div>
                        <img src={elem.Image} />
                      </div>
                      <div>{elem.Name}</div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-center mt-[15%]">
              <img src={gif} className="rounded-2xl h-40  w-56 " />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
// {CoffeeData.map((elem) => (
//           <div>{elem.Name}</div>
//         ))}
