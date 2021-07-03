import React from 'react';
import { Link } from 'react-router-dom';

const CountryPage = ({ country, countries }) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    flag,
    borders,
  } = country;

  var currenciesName = currencies.map(function (item) {
    return item['name'];
  });
  var curr = currenciesName.join(', ');

  var langName = languages.map(function (item) {
    return item['name'];
  });
  var langs = langName.join(', ');

  let neighbours = [];
  countries.forEach((element) => {
    if (borders.indexOf(element.alpha3Code) > -1) neighbours.push(element.name);
  });

  return (
    <div>
      <div className="laptop:ml-60  laptop:mr-64 mobile:ml-5 pt-12">
        <Link to={'/'}>
          <div className="transition duration-200 ease-in-out cursor-pointer box-border shadow-lg w-36 h-10 rounded text-blue-text text-lg dark:text-white dark:bg-blue-elements transform half:hover:scale-105">
            <i className="fas fa-arrow-left pr-4 pl-8 pt-2.5"></i>
            <span className="mr-4">Back</span>
          </div>
        </Link>
        <div className="grid small-laptop:grid-cols-2 mobile:grid-cols-1 pt-16">
          <div className="">
            <img
              src={flag}
              alt={name}
              className="object-fill w-4/6 h-auto mobile:mx-auto laptop:mx-0"
            ></img>
          </div>
          <div className="text-blue-text dark:text-white">
            <div className="text-3xl font-extrabold ml-1.5 small-laptop:pt-0 mobile:pt-10">
              <p>{name}</p>
            </div>
            <div className="grid small-laptop:grid-cols-2 mobile:grid-cols-1 pt-7">
              <div>
                <p className="py-1 ml-1.5">
                  <span className="font-semibold">Native Name:</span>{' '}
                  {nativeName}
                </p>
                <p className="py-1 ml-1.5">
                  <span className="font-semibold">Population:</span>{' '}
                  {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
                <p className="py-1 ml-1.5">
                  <span className="font-semibold">Region:</span> {region}
                </p>
                <p className="py-1 ml-1.5">
                  <span className="font-semibold">Sub Region:</span> {subregion}
                </p>
                <p className="py-1 ml-1.5">
                  <span className="font-semibold">Capital:</span> {capital}
                </p>
              </div>
              <div className="mobile:pt-7 half:pt-0">
                <p className="py-1 mobile:ml-1.5">
                  <span className="font-semibold">Top Level Domain: </span>
                  {topLevelDomain}
                </p>
                <p className="py-1 mobile:ml-1.5">
                  <span className="font-semibold">Currencies: </span>
                  {curr}
                </p>
                <p className="py-1 mobile:ml-1.5">
                  <span className="font-semibold">Languages: </span>
                  {langs}
                </p>
              </div>
            </div>
            <div className="font-semibold py-8 flex flex-row flex-wrap">
              <div className="my-2 mr-1 ml-1.5">Border Countries: </div>
              {neighbours.map((country) => {
                const path = "/country/" + country.replace(/[{()}]/g, '').replace(/\s+/g, '-').toLowerCase();
                return (
                  <Link to={path} key={country.replace(/\s+/g, '-').toLowerCase()}>
                    <div className="transition duration-200 ease-in-out cursor-pointer w-auto mx-1.5 my-1.5 px-2.5 py-0.5 dark:bg-blue-elements shadow-lg rounded font-light transform half:hover:scale-105">
                      {country}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
