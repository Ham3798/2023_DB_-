import React from 'react';
var a;
const CarSearchResults = ({ results, onDetails }) => {
  return (
    <div>
      <h2>렌터카 검색 결과</h2>
      <table>
        <thead>
          <tr>
            <th>MODELNAME</th>
            <th>VEHICLETYPE</th>
            <th>RENTRATEPERDAY</th>
            <th>FUEL</th>
            <th>NUMBEROFSEATS</th>
          </tr>
        </thead>
        <tbody>
          {results.map((car) => (
            <tr key={car.MODELNAME}>
              <td>{car.MODELNAME}</td>
              <td>{car.VEHICLETYPE}</td>
              <td>{car.RENTRATEPERDAY}</td>
              <td>{car.FUEL}</td>
              <td>{car.NUMBEROFSEATS}</td>
              <td>
                <button onClick={() => onDetails(car.MODELNAME)}>상세 정보</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarSearchResults;
