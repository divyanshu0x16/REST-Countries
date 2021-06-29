import React from 'react';

const Country = ({ name, flag, population, region, capital }) => {
  return (
    <div className="box-border rounded-lg h-96 w-72 shadow-lg laptop:mb-16 mobile:mb-12 transform half:hover:scale-105 dark:bg-blue-elements dark:text-white ">
      <div className="">
        <img
          src={flag}
          alt={name}
          className="object-cover h-48 w-full rounded-top-lg"
        ></img>
        <div className="font-bold dark:font-white text-xl px-8 pt-4 pb-1.5">
          {name}
        </div>
        <div className="px-8">
          <p><span className="font-semibold">Population:</span> {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          <p><span className="font-semibold">Region:</span> {region}</p>
          <p><span className="font-semibold">Capital:</span> {capital}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
