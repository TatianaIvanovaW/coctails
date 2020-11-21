import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoctailInfo from "./CoctailInfo";
import "./coctailpage.css";

export default function CoctailPage() {
  const route_parameters = useParams();
  console.log(route_parameters.coctail);

  const [item, set_item] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route_parameters.coctail}`
      );

      set_item(response.data.drinks);
      console.log(response.data.drinks);
    };
    getData();
  }, [route_parameters.coctail]);

  console.log(item);

  if (!item) {
    return (
      <div>
        <h1>Sorry! Something went wrong!</h1>
        <h2>We are working hard on fixing it!!!</h2>
        <img src="https://img.devrant.com/devrant/rant/r_113663_eTws2.jpg"></img>
      </div>
    );
  }

  return (
    <div className="mainCC">
      {item.map((coctail) => {
        return (
          <div key={coctail.idDrink}>
            <CoctailInfo
              name={coctail.strDrink}
              img={coctail.strDrinkThumb}
              make={coctail.strInstructions}
            />
          </div>
        );
      })}
    </div>
  );
}
