import React from "react";
import countriesJSON from "../countries.json";
import { Link } from "react-router-dom";

const CountriesList = (props) => {
  return (
    <div>
      {countriesJSON.map((country) => {
        return (
          <div key={country.name.common}>
            <Link to={`/countries/${country.cca3}`}>{country.flag} {country.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;