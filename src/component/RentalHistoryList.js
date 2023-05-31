import React from 'react';

const RentalHistoryList = ({ rentals }) => {
  return (
    <div>
      <h2>대여 내역</h2>
      <ul>
        {rentals.map((rental) => (
          <li key={rental.id}>
            <span>예약 ID: {rental.reservationId}</span>
            <span>대여일: {rental.rentalDate}</span>
            <span>반납일: {rental.returnDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalHistoryList;
