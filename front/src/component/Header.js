import React from 'react';

const Header = ({ setPage, rentalHistory }) => {
  const handleButtonClick = (value) => {
    setPage(value);
  };

  return (
    <div>
      <button type="submit" value={1} onClick={() => handleButtonClick(1)}>
        CarSearchForm
      </button>
      <button type="submit" value={2} onClick={() => handleButtonClick(2)}>
        ReservationInfo
      </button>
    </div>
  );
};

export default Header;
