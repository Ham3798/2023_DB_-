import React from 'react';
var a;
const CarSearchResults = ({ results, onDetails }) => {
  return (
    <div>
      <h2>렌터카 검색 결과</h2>
      <table>
        <thead>
          <tr>
            <th>LICENSEPLATENO</th>
            <th>MODELNAME</th>
            <th>DATERENTED</th>
            <th>DATEDUE</th>
            <th>CNO</th>
          </tr>
        </thead>
        <tbody>
          {results.map((car) => (
            <tr key={car.LICENSEPLATENO}>
              <td>{car.LICENSEPLATENO}</td>
              <td>{car.MODELNAME}</td>
              <td>{car.DATERENTED ? car.DATERENTED.split('T')[0] : 'N/A'}</td>
              <td>{car.DATEDUE ? car.DATEDUE.split('T')[0] : 'N/A'}</td>
              <td>{car.CNO}</td>
              <td>
                <button onClick={() => onDetails(car.LICENSEPLATENO)}>상세 정보</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarSearchResults;
