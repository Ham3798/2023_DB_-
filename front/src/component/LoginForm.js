import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [customerNumber, setCustomerNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 호출
    onLogin(customerNumber, password);
    console.log(customerNumber, password);
  };

  return (
    <div>
      <h2>고객 로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="고객 번호"
          value={customerNumber}
          onChange={(e) => setCustomerNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
