import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Coctail from "./Coctail";
import "./CoctailsList.css";

export default function CoctailsList() {
  const route_parameters = useParams();

  const [list, set_list] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${route_parameters.list}`
      );

      set_list(response.data.drinks);
      console.log(response.data.drinks);
    };
    getData();
  }, [route_parameters.list]);

  return (
    <div className="flex">
      {list.map((coctail) => {
        return (
          <div className="suck" key={coctail.idDrink}>
            <Coctail
              ad={route_parameters.list}
              id={coctail.idDrink}
              name={coctail.strDrink}
              img={coctail.strDrinkThumb}
            />
          </div>
        );
      })}
    </div>
  );
}
