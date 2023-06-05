import React from 'react';

function RentalHistory({ rentals, info, onCancel }) {
  return (
    <div>
      <h2>Info</h2>
      <div>가장 많이 대여된 랜터카와 횟수 : {info}</div>

      <h2>대여 내역</h2>
      <table>
        <thead>
          <tr>
            <th>LICENSEPLATENO</th>
            <th>RESERVEDATE</th>
            <th>STARTDATE</th>
            <th>ENDDATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((rental) => (
            <tr key={rental.LICENSEPLATENO}>
              <td>{rental.LICENSEPLATENO}</td>
              <td>{rental.RESERVEDATE}</td>
              <td>{rental.STARTDATE}</td>
              <td>{rental.NDDATE}</td>
              <td>
                <button onClick={() => onCancel(rental.LICENSEPLATENO)}>
                  취소
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RentalHistory;
