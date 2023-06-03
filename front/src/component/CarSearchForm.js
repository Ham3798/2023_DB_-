import React, { useState } from 'react';

const CarSearchForm = ({ onSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [carTypes, setCarTypes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 검색 로직 호출
    onSearch(startDate, endDate, carTypes);
  };

  const handleCarTypeChange = (e) => {
    const selectedCarTypes = Array.from(e.target.selectedOptions, (option) => option.value);
    setCarTypes(selectedCarTypes);
  };

  const handleSelectAll = () => {
    if (carTypes.length === 5) {
      setCarTypes([]);
    } else {
      setCarTypes(['전체']);
    }
  };

  return (
    <div>
      <h2>렌터카 검색</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={startDate.toISOString().split('T')[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
        <input
          type="date"
          value={endDate.toISOString().split('T')[0]}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
        <select multiple value={carTypes} onChange={handleCarTypeChange}>
          <option value="전체" onClick={handleSelectAll}>
            전체
          </option>
          <option value="전기차">전기차</option>
          <option value="소형">소형</option>
          <option value="대형">대형</option>
          <option value="SUV">SUV</option>
          <option value="승합">승합</option>
        </select>
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default CarSearchForm;
