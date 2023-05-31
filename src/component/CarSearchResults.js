import React from 'react';

const CarSearchResults = ({ results, onReserve }) => {
  return (
    <div>
      <h2>렌터카 검색 결과</h2>
      <ul>
        {results.map((car) => (
          <li key={car.id}>
            <span>{car.name}</span>
            <span>{car.type}</span>
            <button onClick={() => onReserve(car.id)}>예약</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarSearchResults;
