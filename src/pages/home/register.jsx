import React, { useState } from 'react';
import './register.css';

export default function RegisterForm({signUp, error,prop,registrationStatus}) {
  const [info, setInfo] = useState({code:""});
 

  const handleSubmit = e => {
    e.preventDefault();
    signUp(info);
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h2 className="form-heading">Đăng Ký</h2>
        
        <div className="form-group">
          <label htmlFor="Họ tên">Họ và Tên</label>
          <input 
            type="text" 
            name="Họ và Tên" 
            id="Họ tên" 
            placeholder="Nhập Họ và Tên của bạn" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="Sdt">Sdt:</label>
          <input 
            type="text" 
            name="Sdt" 
            id="Sdt" 
            placeholder="Nhập Sdt của bạn" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Nhập email của bạn" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Nhập mật khẩu của bạn" 
          />
        <div className="form-group">
          <label htmlFor="Code">Mã code:</label>
          <input 
            type="text" 
            name="Mã code" 
            id="Mã code" 
            placeholder="Nhập Mã code của bạn" 
            value={info.code} 
            onChange={e => setInfo({...info, code: e.target.value})} 
            required 
          />
        </div>
        </div>
        <div class="button_name">
            <button className="submit-btn" >Đăng Ký</button>
            <button className= "submit-btn" onClick={()=>prop.onFormSwitch('login')}>Quay lại</button>
        </div>
        {registrationStatus === 'success' ? (
  <div className="success">Bạn đã đăng ký thành công</div>
) : registrationStatus === 'failure' ? (
  <div className="failure">Bạn đã đăng ký thất bại</div>
) : (
  ''
)}
      </div>
    </form>
  );
}
