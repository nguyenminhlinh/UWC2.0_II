import './App.css';
import {useState} from 'react'
import LoginForm from './login';
import RegisterForm from './register';
import { useNavigate } from 'react-router-dom';
import logo from "../../Assets/homebg1.jpg"
function App() {
  const navigate = useNavigate();

  const User= {
    email: "admin@admin",
    password: "admin",
    code: 8888,
  }

  const [user,setUser]= useState({email:"",password:""});
  const [error,setError]=useState("");
  const [currentForm,setCurrentForm]= useState('login');
  const toggleForm = (formName)=>{
    setCurrentForm(formName);
    setRegistrationStatus("");
    setError("");
  }

  const [registrationStatus, setRegistrationStatus] = useState("");

  const Login = Info =>{
    console.log(Info);
    if (Info.email==User.email && Info.password==User.password) {
      setUser({
        email: Info.email,
        password: Info.password,
      })
    }
    else {
      setError("Thông tin đăng nhập chưa chính xác")
    }
  }

  const signUp = Info=>{
    if (Info.code==User.code)
    setRegistrationStatus("success");
    else setRegistrationStatus("failure");
  }

  const Logout =()=>{
    console.log('Logout');
    setUser({
      email: "",
      password: "",
    })
    setError("")
  }

  return (
    <>
    <img className="HomeBg" src={logo} />
    <div className="App">
      {(user.email !== "") ? (
        // <div class="logout">
        //   <div>
        //     Home
        //   </div>
        //   <button onClick={Logout}>
        //     Logout
        //   </button>
        // </div>
        navigate('/calendar')
      ) : (
        currentForm === "login" ? 
          <LoginForm 
            Login={Login} 
            error={error} 
            prop={{onFormSwitch: toggleForm} } 
            registrationStatus={registrationStatus} 
          /> 
        : 
          <RegisterForm 
            signUp={signUp} 
            error={error} 
            prop={{onFormSwitch: toggleForm}}
            registrationStatus={registrationStatus} 
          />
      )}
    </div>
    </>
    
  );
}


export default App;
