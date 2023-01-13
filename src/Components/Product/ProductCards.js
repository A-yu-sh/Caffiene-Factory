import React, { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../App";
import Container from "../Container";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineSortAscending } from "react-icons/ai";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import SortIcon from "@mui/icons-material/Sort";

import Fuse from "fuse.js";
import { BsSearch } from "react-icons/bs";

const ProductCards = () => {
  const { coffeeData } = useContext(CoffeeContext);
  const [searchResult, setSearchResult] = useState([]);
  const [clicked, setClicked] = useState(false);
  // Fuse Search
  function handleSearch(search) {
    const fuse = new Fuse(coffeeData, { keys: ["Name"] });
    const response = fuse.search(search);
    const ProductResult = response.map((response) => response.item);
    setSearchResult(ProductResult);
  }

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(coffeeData);
  }, [coffeeData]);

  function HandleSort(type) {
    switch (type) {
      case "Ascending":
        const filter = [...filteredData].sort((a, b) => {
          if (a.Price < b.Price) return -1;
          if (a.Price > b.Price) return 1;
          return 0;
        });
        setFilteredData(filter);
        break;
      case "Desc":
        const filter2 = [...filteredData].sort((a, b) => {
          if (a.Price < b.Price) return 1;
          if (a.Price > b.Price) return -1;
          return 0;
        });
        setFilteredData(filter2);
        break;
    }
  }

  return (
    <div className="">
      <Container>
        <div className=" flex gap-2 items-center mt-16">
          <input
            type="text"
            placeholder="Search Coffee"
            defaultValue={""}
            onChange={(e) => handleSearch(e.target.value)}
            className="rounded-lg px-4 min-w-[500px] h-full p-2 border-2  text-lg outline-slate-600 opacity-50"></input>

          <button
            onClick={() => HandleSort("Ascending")}
            className="flex justify-center border rounded-lg items-center px-4 py-2">
            Price- Low to High
          </button>
          <button
            onClick={() => HandleSort("Desc")}
            className="flex justify-center border rounded-lg items-center px-4 py-2">
            Price- High to Low
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {filteredData &&
            searchResult.length === 0 &&
            filteredData?.map((elem) => {
              return (
                <div>
                  <Link
                    to={`/collections/the-caffiene-factory/${elem.id}/${elem.Name}/${elem.Category}`}>
                    <div className="flex flex-col border-2 rounded-xl overflow-hidden border-opacity-20">
                      <div className="rounded-lg relative overflow-hidden opacity-90 ">
                        <img
                          src={elem.Image}
                          className="w-full h-full object-cover hover:opacity-100 hover:scale-[1.1] transition-all ease-in duration-[150ms]"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-[12px] leading-none text-primary-800 font-Nunito">
                          {elem.Size.at(0)}
                        </p>

                        <h1 className="text-1xl leading-none mb-3 font-Nunito mt-2">
                          {elem.Name}
                        </h1>
                        <p className="text-lg leading-none text-primary-800 font-Nunito font-bold">
                          ${elem.Price}
                        </p>
                        <div className="flex gap-1 items-center mt-3 text-starPri-800 ">
                          {elem.Rating}
                          <div>
                            <AiFillStar />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          {searchResult.length !== 0 &&
            searchResult.map((elem) => {
              return (
                <div>
                  <Link
                    to={`/collections/the-caffiene-factory/${elem.id}/${elem.Name}/${elem.Category}`}>
                    <div className="flex flex-col border-2 rounded-xl overflow-hidden border-opacity-20">
                      <div className="rounded-lg relative overflow-hidden opacity-90 ">
                        <img
                          src={elem.Image}
                          className="w-full h-full object-cover hover:opacity-100 hover:scale-[1.1] transition-all ease-in duration-[150ms]"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-[12px] leading-none text-primary-800 font-Nunito">
                          {elem.Size.at(0)}
                        </p>
                        <h1 className="text-1xl leading-none mb-3 font-Nunito mt-2">
                          {elem.Name}
                        </h1>
                        <p className="text-lg leading-none text-primary-800 font-Nunito font-bold">
                          ${elem.Price}
                        </p>
                        <div className="flex gap-1 items-center mt-3 text-starPri-800 ">
                          {elem.Rating}
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </Container>{" "}
    </div>
  );
};

export default ProductCards;
