import React, { useState } from 'react';
import './login.css';
import img from "../../Assets/Picture3.png"

export default function LoginForm({Login, error,prop, registrationStatus}) {
  const [info, setInfo] = useState({email:"", password:""});

  const handleSubmit = e => {
    e.preventDefault();
    Login(info);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h2 className="form-heading">Đăng nhập</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Nhập email của bạn" 
            value={info.email} 
            onChange={e => setInfo({...info, email: e.target.value})} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Nhập mật khẩu của bạn" 
            value={info.password} 
            onChange={e => setInfo({...info, password: e.target.value})} 
            required 
          />
          <button className='Dk' onClick={()=>prop.onFormSwitch('register')}>Chưa có tài khoản? Đăng ký ngay</button>
        </div>
        <button className="submit-btn">Đăng nhập</button>
        {(error!="")?(<div className="error">{error}</div>):""}
      </div>
    </form>

  );
}
