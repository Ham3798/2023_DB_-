import React from 'react';

function RentalHistory({ reserves, rentals, info1, info2, info3, onCancel }) {
  return (
    <div>
      <h2>Info1</h2>
      <div>가장 많이 렌트된 차량 모델: {info1}</div>
      <h2>VEHICLETYPE 별 정보</h2>
      <table>
        <thead>
          <tr>
            <th>VEHICLETYPE</th>
            <th>AVERAGERENTRATE</th>
            <th>MAXSEATS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {info2.map((info2) => (
            <tr key={info2.VEHICLETYPE}>
              <td>{info2.VEHICLETYPE}</td>
              <td>{info2.AVERAGERENTRATE}</td>
              <td>{info2.MAXSEATS}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>차량의 인기 랭킹</h2>
      <table>
        <thead>
          <tr>
            <th>MODELNAME</th>
            <th>RENTRATEPERDAY</th>
            <th>RANK</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {info3.map((info3) => (
            <tr key={info3.MODELNAME}>
              <td>{info3.MODELNAME}</td>
              <td>{info3.RENTRATEPERDAY}</td>
              <td>{info3.RANK}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>예약 내역</h2>
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
          {rentals && rentals.map((rentals) => (
            <tr key={rentals.LICENSEPLATENO}>
              <td>{rentals.LICENSEPLATENO}</td>
              <td>{rentals.RESERVEDATE && rentals.RESERVEDATE.split('T')[0]}</td>
              <td>{rentals.STARTDATE && rentals.STARTDATE.split('T')[0]}</td>
              <td>{rentals.ENDDATE && rentals.ENDDATE.split('T')[0]}</td>
              <td>
                <button onClick={() => onCancel(rentals.LICENSEPLATENO)}>
                  취소
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      <h2>대여 내역</h2>
      <table>
        <thead>
          <tr>
            <th>LICENSEPLATENO</th>
            <th>MODELNAME</th>
            <th>DATERENTED</th>
            <th>DATEDUE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
  {reserves && reserves.map((reserve) => (
    <tr key={reserve.LICENSEPLATENO}>
      <td>{reserve.LICENSEPLATENO}</td>
      <td>{reserve.RESERVEDATE && reserve.RESERVEDATE.split('T')[0]}</td>
      <td>{reserve.STARTDATE && reserve.STARTDATE.split('T')[0]}</td>
      <td>{reserve.ENDDATE && reserve.ENDDATE.split('T')[0]}</td>
      <td>
        <button onClick={() => onCancel(reserve.LICENSEPLATENO)}>
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
