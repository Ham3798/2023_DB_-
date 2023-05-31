import React, { useState } from 'react';

const RentalHistorySearchForm = ({ onSearch }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 대여 내역 검색 로직 호출
    onSearch(status);
  };

  return (
    <div>
      <h2>대여 내역 검색</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="대여 상태"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default RentalHistorySearchForm;
