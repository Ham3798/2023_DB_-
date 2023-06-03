import React from 'react';

const ReservationInfo = ({ reservation, onCancel, onRent }) => {
  return (
    <div>
      <h2>예약 정보</h2>
      <p>차량 ID: {reservation.MODELNAME}</p>
      <p>대여일: {reservation.startDate}</p>
      <p>반납일: {reservation.endDate}</p>
      <button onClick={() => onCancel(reservation.id)}>예약 취소</button>
      <button onClick={() => onRent(reservation.id)}>대여하기</button>
    </div>
  );
};

export default ReservationInfo;
