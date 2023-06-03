import React, { useState } from 'react';

const RentalHistorySearchForm = ({ rentals, onReturn }) => {
  const handleReturn = (rentalId) => {
    onReturn(rentalId);
  };

  return (
    <div>
      <h2>대여 내역</h2>
      <table>
        <thead>
          <tr>
            <th>대여 ID</th>
            <th>차량 이름</th>
            <th>대여 일자</th>
            <th>반납 일자</th>
            <th>가격</th>
            <th>상태</th>
            <th>조작</th>
          </tr>
        </thead>
        {/* <tbody>
          {rentals.map((rental) => (
            <tr key={rental.id}>
              <td>{rental.id}</td>
              <td>{rental.carName}</td>
              <td>{rental.startDate}</td>
              <td>{rental.endDate}</td>
              <td>{rental.fee}</td>
              <td>{rental.status}</td>
              <td>
                {rental.status === '대여 중' && (
                  <button onClick={() => handleReturn(rental.id)}>반납</button>
                )}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default RentalHistorySearchForm;
