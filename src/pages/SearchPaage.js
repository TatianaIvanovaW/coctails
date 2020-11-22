import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Coctail from "./Coctail";
import { Button, Form, FormControl, Navbar } from "react-bootstrap";
import "./Search.css";

export default function SearchPaage() {
  const [text, set_text] = useState("");
  const [result, set_result] = useState([]);
  const history = useHistory();
  const { params } = useParams();
  // const { coctail } = useParams();

  //   console.log(`history ${history}`);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(text);
    history.push(`/search/${text}`);
    set_text("");
    // serchingCoctail(text);
    console.log(`params ${params}`);
  };

  const serchingCoctail = async (topic) => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${topic}`
    );
    set_result(response.data.drinks);
    console.log(response.data.drinks);
  };

  useEffect(() => {
    console.log("hello from useEffect: params:", params);
    if (params) {
      serchingCoctail(params);
    }
  }, [params]);

  // console.log(result);

  if (result === false) {
    set_text("");
  }

  return (
    <div>
      <div>
        <Navbar.Brand>
          <h3>Discover some coctails</h3>
        </Navbar.Brand>
        <Form inline>
          <FormControl
            ref={(input) => input && input.focus()}
            value={text}
            onChange={(e) => {
              set_text(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button onClick={onClickHandler} variant="outline-info">
            Search
          </Button>
        </Form>
      </div>
      <div className="result">
        {result ? (
          result.map((drink) => {
            return (
              <div className="coct" key={drink.idDrink}>
                <Coctail
                  id={drink.idDrink}
                  ad={drink.strCategory}
                  name={drink.strDrink}
                  img={drink.strDrinkThumb}
                />
              </div>
            );
          })
        ) : (
          <div className="notfound">
            <p> Not Found! Try again!</p>
          </div>
        )}
      </div>
    </div>
  );
}
