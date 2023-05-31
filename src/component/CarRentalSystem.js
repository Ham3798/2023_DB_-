import React, { useState } from 'react';
import LoginForm from './LoginForm'; // LoginForm 컴포넌트 임포트
import CarSearchForm from './CarSearchForm'; // CarSearchForm 컴포넌트 임포트
import CarSearchResults from './CarSearchResults'; // CarSearchResults 컴포넌트 임포트
import ReservationInfo from './ReservationInfo'; // ReservationInfo 컴포넌트 임포트
import RentalHistorySearchForm from './RentalHistorySearchForm'; // RentalHistorySearchForm 컴포넌트 임포트
import RentalHistoryList from './RentalHistoryList'; // RentalHistoryList 컴포넌트 임포트


const CarRentalSystem = () => {
  const [customer, setCustomer] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [reservation, setReservation] = useState(null);
  const [rentalHistory, setRentalHistory] = useState([]);

  const loginCustomer = (customerNumber, password) => {
    // 서버와의 통신을 흉내 내기 위해 setTimeout 사용
    setTimeout(() => {
      // 로그인 성공 여부 확인
      if (customerNumber === '1' && password === '1') {
        const customerData = {
          "customerNumber" : customerNumber,
          "password" : password
        };
        console.log(customerData);
        setCustomer(customerData);
        console.log(customer);
      } else {
        // 로그인 실패 처리
        console.log('로그인 실패');
      }
    }, 1000); // 1초 후에 결과 처리
  };
  

  // 렌터카 검색
const searchCars = (startDate, endDate, carTypes) => {
  // 검색 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 데이터를 검색해야 합니다.

  // 예시로 검색 결과를 생성하여 setSearchResults를 호출합니다.
  const searchResultsData = [
    { id: 1, carName: '전기차 A', carType: '전기차' },
    { id: 2, carName: '소형 B', carType: '소형' },
    { id: 3, carName: '대형 C', carType: '대형' },
  ];

  // 검색 결과를 상태로 업데이트합니다.
  setSearchResults(searchResultsData);
};


  // 렌터카 예약
const makeReservation = (carId) => {
  // 예약 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 예약을 생성해야 합니다.

  // 예시로 예약 데이터를 생성하여 setReservation을 호출합니다.
  const reservationData = {
    id: 1,
    carId: carId,
    startDate: '2023-06-01',
    endDate: '2023-06-05',
  };

  // 예약 데이터를 상태로 업데이트합니다.
  setReservation(reservationData);
};


  // 렌터카 예약 취소
const cancelReservation = (reservationId) => {
  // 예약 취소 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 예약을 취소해야 합니다.

  // 예시로 예약을 null로 설정하여 예약 취소를 표시합니다.
  setReservation(null);
};


  // 렌터카 대여
const rentCar = (reservationId) => {
  // 대여 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 대여 동작을 수행해야 합니다.

  // 예시로는 대여 정보를 생성하여 대여 내역에 추가합니다.
  const rentalData = {
    reservationId: reservationId,
    rentalDate: new Date(), // 현재 날짜 및 시간
    // 대여 정보 추가 필드...
  };

  // 대여 내역 업데이트
  updateRentalHistory(rentalData);
};

// 대여 내역 업데이트
const updateRentalHistory = (rentalData) => {
  // 대여 내역을 업데이트하는 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 대여 내역을 업데이트해야 합니다.
  // 예시로는 rentalData를 기존 대여 내역에 추가하는 방식으로 업데이트하는 예시입니다.

  // 이전 대여 내역과 새로운 대여 정보를 합칩니다.
  const updatedRentalHistory = [...rentalHistory, rentalData];

  // 대여 내역 업데이트
  setRentalHistory(updatedRentalHistory);
};



const returnCar = (rentalId) => {
  // 반납 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 반납 동작을 수행해야 합니다.

  // 예시로는 반납 정보를 생성하여 대여 내역에 업데이트합니다.
  const returnDate = new Date(); // 현재 날짜 및 시간

  // 대여 내역에서 해당 대여 ID를 찾아 반납 정보를 업데이트합니다.
  const updatedRentalHistory = rentalHistory.map((rental) => {
    if (rental.rentalId === rentalId) {
      return { ...rental, returnDate: returnDate };
    }
    return rental;
  });

  // 대여 내역 업데이트
  setRentalHistory(updatedRentalHistory);
};


  // 대여 내역 검색
const searchRentalHistory = (status) => {
  // 대여 내역 검색 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 검색 동작을 수행해야 합니다.

  // 예시로는 대여 내역에서 해당 상태에 맞는 대여 정보를 필터링하여 검색합니다.
  const filteredRentalHistory = rentalHistory.filter((rental) => rental.status === status);

  // 대여 내역 업데이트
  setRentalHistory(filteredRentalHistory);
};


  return (
    <div>
      {/* 로그인 컴포넌트 */}
      {!customer && (
        <LoginForm onLogin={loginCustomer} />
      )}

      {/* 렌터카 검색 컴포넌트 */}
      {customer && !reservation && (
        <CarSearchForm onSearch={searchCars} />
      )}

      {/* 렌터카 검색 결과 */}
      {searchResults.length > 0 && (
        <CarSearchResults
          results={searchResults}
          onReserve={makeReservation}
        />
      )}

      {/* 예약 정보 */}
      {reservation && (
        <ReservationInfo
          reservation={reservation}
          onCancel={cancelReservation}
          onRent={rentCar}
        />
      )}

      {/* 대여 내역 검색 */}
      {customer && (
        <RentalHistorySearchForm onSearch={searchRentalHistory} />
      )}

      {/* 대여 내역 */}
      {rentalHistory.length > 0 && (
        <RentalHistoryList rentals={rentalHistory} />
        )}

        </div>
    );
};



export default CarRentalSystem;