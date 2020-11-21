import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CoctailsCategory from "../components/CoctailsCategory";
import "./Homepage.css";

export default function HomePage() {
  const [categ, set_categ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
      );
      set_categ(response.data.drinks);
      console.log(response.data.drinks);
    };
    getData();
  }, []);

  return (
    <div className="center">
      <h3 className="title">Coctail categories</h3>
      {categ.map((category) => {
        const categoryNoSpace = category.strCategory.replace(/ /g, "_");
        const encodedCategory = encodeURIComponent(categoryNoSpace);
        console.log(encodedCategory);
        return (
          <div className="list" key={category.strCategory}>
            <CoctailsCategory
              id={encodedCategory}
              category={category.strCategory}
            />
          </div>
        );
      })}
    </div>
  );
}
