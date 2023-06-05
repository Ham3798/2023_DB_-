import React, { useState } from 'react';
import LoginForm from './LoginForm'; // LoginForm 컴포넌트 임포트
import Header from  './Header';
import './styles.css'; // CSS 파일을 import
import CarSearchForm from './CarSearchForm'; // CarSearchForm 컴포넌트 임포트
import CarSearchResults from './CarSearchResults'; // CarSearchResults 컴포넌트 임포트
import ReservationInfo from './ReservationInfo'; // ReservationInfo 컴포넌트 임포트
import RentalHistorySearchForm from './RentalHistorySearchForm'; // RentalHistorySearchForm 컴포넌트 임포트
import RentalHistoryList from './RentalHistoryList'; // RentalHistoryList 컴포넌트 임포트

const CarRentalSystem = () => {
  const [page, setPage] = useState(null);
  const [resurveDate, setResurveDate] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [reservation, setReservation] = useState(null);
  const [reservationHistory, setReservationHistory] = useState(null);
  const [aa, seta] = useState(null);


  const loginCustomer = async (customerNumber, password) => {
    try {
      const response = await fetch(`http://localhost:3001/customer/${customerNumber}/${password}`);
      const data = await response.json();
      if (response.ok) {
        // 로그인 성공
        console.log(data);
        const customerData = {
          customerNumber: data[0][0],
          password: data[0][1]
        };
        setCustomer(customerData);
        rentalHistory(customerNumber);
        setPage(1);
      } else {
        // 로그인 실패 처리
        console.log('로그인 실패');
      }
    } catch (error) {
      // Handle any errors that occur during the request or login process
      console.error('Error:', error);
    }
  };
  


// 렌터카 검색
const searchCars = async (startDate, endDate, carTypes) => {
  
  try {
    setResurveDate({startDate:startDate, endDate:endDate, carTypes:carTypes});
    var searchResultsData = [];
    console.log(startDate, endDate, carTypes);
    const encodedStartDate = encodeURIComponent(startDate);
    const encodedEndDate = encodeURIComponent(endDate);
    const encodedCarTypes = encodeURIComponent(carTypes);
    const response = await fetch(`http://localhost:3001/getCar/${encodedStartDate}/${encodedEndDate}/${encodedCarTypes}`);

    if (response.ok) {
      const data = await response.json();
      // 검색 결과를 상태로 업데이트합니다.
      console.log(data);
      setSearchResults(data);
      for (let i = 0; i < data.length; i++) {
        const cur = data[i];
        var cur_carTypes;
        if(cur[1] == '마이티' | cur[1] == '투싼') cur_carTypes = '대형';
        if(cur[1] == 'Camry' | cur[1] == 'Accord') cur_carTypes = '소형';
        if(cur[1] == 'Tucson' | cur[1] == 'Santa Fe') cur_carTypes = 'SUV';
        if(cur[1] == 'Soul' | cur[1] == 'Leaf') cur_carTypes = '승합';
        if(cur[1] == 'Model S') cur_carTypes = 'SUV';
        if(cur[1] == 'G80') cur_carTypes = '소형';
        if(cur[1] == 'G90') cur_carTypes = '소형';
        console.log(carTypes.includes(cur_carTypes));
        if (carTypes.includes('전체')) {
          searchResultsData.push({LICENSEPLATENO:cur[0], MODELNAME:cur[1], DATERENTED:cur[2], DATEDUE:cur[3], CNO:cur[4]});
        }
        else if (carTypes.includes(cur_carTypes)) {
          searchResultsData.push({LICENSEPLATENO:cur[0], MODELNAME:cur[1], DATERENTED:cur[2], DATEDUE:cur[3], CNO:cur[4]});
        }
      }
      
      // 검색 결과를 상태로 업데이트합니다.
      setSearchResults(searchResultsData);
    } else {
      console.log('검색 실패');
    }

  } catch (error) {
    console.error('Error:', error);
  }
};




  // 렌터카 예약
const makeReservation = (MODELNAME) => {
  // 예약 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 예약을 생성해야 합니다.

  // 예시로 예약 데이터를 생성하여 setReservation을 호출합니다.
  const reservationData = {
    MODELNAME: MODELNAME,
    startDate: resurveDate.startDate.toLocaleString(),
    endDate: resurveDate.endDate.toLocaleString()
  };

  // 예약 데이터를 상태로 업데이트합니다.
  setReservation(reservationData);
  afunc();
};


  // 렌터카 예약 취소
const cancelReservation = (reservationId) => {
  // 예약 취소 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 예약을 취소해야 합니다.

  // 예시로 예약을 null로 설정하여 예약 취소를 표시합니다.
  setReservation(null);
};

  // 렌터카 예약 취소
  const realCancelReservation = async (LICENSEPLATENO) => {
    try{
      console.log(LICENSEPLATENO);
      const response = await fetch(`http://localhost:3001/cancelResurvation/${encodeURIComponent(LICENSEPLATENO)}/${customer.customerNumber}`);
          const data = await response.json();
          if (response.ok) {
            console.log("삭제 성공");
            
          } else {
            console.log('삭제 실패');
          }
        } catch (error) {
          // Handle any errors that occur during the request or login process
          console.error('Error:', error);
        }
        rentalHistory(customer.customerNumber);
        afunc();
  };
  
  // 렌터카 예약 취소
  const afunc = async () => {
    try{
      const response = await fetch(`http://localhost:3001/a`);
      const data = await response.json();
          if (response.ok) {
            console.log("성공");
            console.log(ArrayBuffer);
            seta(data);
            
          } else {
            console.log('실패');
          }
        } catch (error) {
          // Handle any errors that occur during the request or login process
          console.error('Error:', error);
        }
        rentalHistory(customer.customerNumber);
  };

  // 렌터카 대여
const rentCar = async (LICENSEPLATENO) => {
  // 대여 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 대여 동작을 수행해야 합니다.
try{
  console.log(LICENSEPLATENO, setResurveDate);
  const response = await fetch(`http://localhost:3001/rentCar/${encodeURIComponent(LICENSEPLATENO)}/${resurveDate.carTypes}/${resurveDate.startDate}/${resurveDate.endDate}/${customer.customerNumber}`);
      const data = await response.json();
      if (response.ok) {
        // 로그인 성공
        console.log(data);
        rentalHistory(customer.customerNumber);
      } else {
        // 로그인 실패 처리
        console.log('로그인 실패');
      }
    } catch (error) {
      // Handle any errors that occur during the request or login process
      console.error('Error:', error);
    }
};

const rentalHistory = async (CNO) => {
  // 대여 로직 구현
  // 실제로는 데이터베이스나 API와의 통신 등을 통해 대여 동작을 수행해야 합니다.
try{
  const response = await fetch(`http://localhost:3001/resurveHistory/${CNO}`);
      const data = await response.json();
      if (response.ok) {
        // 로그인 성공
        var searchResultsData = []
        for (let i = 0; i < data.length; i++) {
          const cur = data[i];
          searchResultsData.push({LICENSEPLATENO:cur[0], RESERVEDATE:cur[1], STARTDATE:cur[2], ENDDATE:cur[3], CNO:cur[4]});
        }
        setReservationHistory(searchResultsData);
      } else {
        // 로그인 실패 처리
        console.log('로그인 실패');
      }
    } catch (error) {
      // Handle any errors that occur during the request or login process
      console.error('Error:', error);
    }
    
};

// // 대여 내역 업데이트
// const updateRentalHistory = (rentalData) => {
//   // 대여 내역을 업데이트하는 로직 구현
//   // 실제로는 데이터베이스나 API와의 통신 등을 통해 대여 내역을 업데이트해야 합니다.
//   // 예시로는 rentalData를 기존 대여 내역에 추가하는 방식으로 업데이트하는 예시입니다.

//   // 이전 대여 내역과 새로운 대여 정보를 합칩니다.
//   const updatedRentalHistory = [...rentalHistory, rentalData];

//   // 대여 내역 업데이트
//   setRentalHistory(updatedRentalHistory);
// };


//   // 대여 내역 검색
// const searchRentalHistory = (status) => {
//   // 대여 내역 검색 로직 구현
//   // 실제로는 데이터베이스나 API와의 통신 등을 통해 검색 동작을 수행해야 합니다.

//   // 예시로는 대여 내역에서 해당 상태에 맞는 대여 정보를 필터링하여 검색합니다.
//   const filteredRentalHistory = rentalHistory.filter((rental) => rental.status === status);

//   // 대여 내역 업데이트
//   setRentalHistory(filteredRentalHistory);
// };


  return (
    <div>
      {/* 로그인 컴포넌트 */}
      {!customer && (
        <LoginForm onLogin={loginCustomer} />
      )}

      {customer && (
        <Header setPage={setPage} rentalHistory={rentalHistory} />
      )}

      {customer && (
        <a/>
      )}
      {/* 렌터카 검색 컴포넌트 */}
      {customer && page == 1 && (
        <CarSearchForm onSearch={searchCars} />
      )}

      {/* 렌터카 검색 결과 */}
      {customer && page == 1 && searchResults.length > 0 && (
        <CarSearchResults
          results={searchResults}
          onDetails={makeReservation}
        />
      )}
      
      {/* 예약 정보 */}
      {reservation && page == 1  && (
        <ReservationInfo
          reservation={reservation}
          onCancel={cancelReservation}
          onRent={rentCar}
        />
      )}

      {/* 대여 내역 검색
      {customer && page == 1 && (
        <RentalHistorySearchForm onSearch={searchRentalHistory} />
      )} */}

      {/* 대여 내역 */}
      {page == 2 && (
        <RentalHistoryList rentals={reservationHistory} info={aa} onCancel={realCancelReservation} />
        )}

        </div>
    );
};



export default CarRentalSystem;