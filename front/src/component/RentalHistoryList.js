import React from 'react';

function RentalHistory({ rentals, onCancel }) {
  return (
    <div>
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
              <td>{rental.ENDDATE}</td>
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
