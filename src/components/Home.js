import React from 'react';
import Search from './Search';
import Filter from './Filter';
import Country from './Country';
import { Link } from 'react-router-dom';

const Home = ({ handleSearch, applyFilter, country, countries }) => {
  return (
    <>
      <div className="grid half:grid-cols-2 small:grid-cols-1 pt-12">
        <div className="text-3xl laptop:ml-60 half:place-self-start laptop:text-3xl mobile:ml-5 mobile:text-xl mobile:place-self-center">
          <Search country={country} handleSearch={handleSearch}></Search>
        </div>
        <div className="text-xl half:place-self-end half:mt-0 mobile:place-self-center mobile:ml-5 mobile:mt-6 flex flex-row laptop:mr-64 mobile:mr-5 z-10">
          <Filter onFilter={applyFilter}></Filter>
        </div>
      </div>
      <div className="laptop:mx-48 laptop:my-12 mobile:mx-14 mobile:my-10">
        <div className="grid laptop:grid-cols-4 mobile:grid-cols-1 half:grid-cols-2 place-items-center">
          {countries.map((country) => {
            const { name, flag, population, region, capital } = country;
            const path = "/country/" + name.replace(/\s+/g, '-').toLowerCase();

            return (
              <Link to={path} key={country.alpha3Code}>
                <Country
                  name={name}
                  flag={flag}
                  population={population}
                  region={region}
                  capital={capital}
                ></Country>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
