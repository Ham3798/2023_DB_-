import React from 'react';
var a;
const CarSearchResults = ({ results, onDetails }) => {
  return (
    <div>
      <h2>렌터카 검색 결과</h2>
      <table>
        <thead>
          <tr>
            <th>차량 이름</th>
            <th>차량 종류</th>
            <th>가격</th>
            <th>상세 정보</th>
          </tr>
        </thead>
        <tbody>
          {results.map((car) => (
            <tr key={car.id}>
              <td>{car.carName}</td>
              <td>{car.carType}</td>
              <td>{car.fee}</td>
              <td>
                <button onClick={() => onDetails(car.id)}>상세 정보</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarSearchResults;
