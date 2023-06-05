import React, { useEffect, useState } from 'react';

const qwer = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await fetch('http://localhost:3001/a');
        const data = await response.json();

        if (response.ok) {
          setRentals(data);
        } else {
          console.log('대여 정보를 가져오는데 실패했습니다.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRentals();
  }, []);

  return (
    <div>
      <h2>info 1</h2>
      rentals
    </div>
  );
};

export default qwer;
