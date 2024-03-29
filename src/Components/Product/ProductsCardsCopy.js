import React, { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../App";
import Container from "../Container";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineSortAscending } from "react-icons/ai";
import SortIcon from "@mui/icons-material/Sort";

import Fuse from "fuse.js";
import { BsSearch } from "react-icons/bs";

const ProductCardsCopy = () => {
  const { coffeeData } = useContext(CoffeeContext);
  const [searchResult, setSearchResult] = useState([]);
  const [coffees, setCoffees] = useState(coffeeData || []);

  // Fuse Search

  function handleSearch(value) {
    const fuse = new Fuse(coffeeData, { keys: ["Name"] });
    const response = fuse.search(value);
    setSearchResult(response.map((res) => res.item));
  }

  function handleSort(type) {
    if (type === "ascending") {
      const filteredArray = [...coffees].sort((a, b) => {
        if (a.Price < b.Price) return -1;
        if (a.Price > b.Price) return 1;
        return 0;
      });
      setCoffees(filteredArray);
    } else if (type === "descending") {
      const filteredArray = [...coffees].sort((a, b) => {
        if (a.Price < b.Price) return 1;
        if (a.Price > b.Price) return -1;
        return 0;
      });
      setCoffees(filteredArray);
    }
  }

  useEffect(() => {
    setCoffees(coffeeData);
  }, [coffeeData]);

  return (
    <div className="">
      <Container>
        <input
          type="text"
          defaultValue={""}
          placeholder="Search Coffee"
          onChange={(e) => handleSearch(e.target.value)}
          className="rounded-xl px-20 text-lg p-1 border-2 mt-14 mb-10 outline-slate-600 opacity-50"></input>
        <button onClick={() => handleSort("ascending")} className="h-10 w-10">
          <AiOutlineSortAscending />
        </button>
        <button onClick={() => handleSort("descending")} className="h-10 w-10">
          <AiOutlineSortAscending />
        </button>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {coffees &&
            searchResult.length === 0 &&
            coffees.map((elem) => {
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

          {searchResult &&
            searchResult.length !== 0 &&
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

export default ProductCardsCopy;
