import React, { useEffect, useRef } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import './styles.css'
import logo from "../../Assets/UWC2.0-Web.png"
import {
  Container,
  HeaderLeft,
  HeaderMiddle,
  LogoutBtn,
  MainHeader,
} from "./NavbarElements";
import { Link,NavLink, useParams } from "react-router-dom";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <HeaderLeft>
          <NavLink to="/home">
            <img className="imgnav"
              src={logo}
              alt="logo"
            />
          </NavLink>
        </HeaderLeft>
        <HeaderMiddle>
          <ul>
            <li>
              <div className="dropdown" >
              <Link style={{textDecoration: 'none'}} to="/home">
              <span className="text">Home</span>
              </Link>  
              </div>                                 
            </li>
            <li>              
              <div className="dropdown" id="assign-route">
                  <span className="text">Employee</span>
              <div className="tag">
                <FaAngleDown/>
              </div>
              </div>
                <ul className="list">
                  <li> 
                    <NavLink to ="/employee/collector" >
                    Collectors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to ="/employee/janitors" >
                    Janitors
                    </NavLink>
                  </li>
                </ul>            
            </li>
            <li>
              <div className="dropdown" >
              <Link style={{textDecoration: 'none'}} to="/calendar">
              <span className="text">Calendar</span>
              </Link>  
              </div>            
            </li>
            <li>   
            <div className="dropdown" >
              <Link style={{textDecoration: 'none'}} to="/assignment">
              <span className="text">Assignment</span>
              </Link>  
              </div>             
              {/* <div className="dropdown" id="assign-route">
                  <span className="text">Assignments</span>
              <div className="tag">
                <FaAngleDown/>
              </div>
              </div>
                <ul className="list">
                  <li> 
                    <NavLink to ="/employee/collector/coolector1/dashboard" >
                    Calendar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to ="/map" >
                    Map
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to ="/assignment/task-assignment" >
                    Task Assignments
                    </NavLink>
                  </li>
                </ul>             */}
            </li>
          </ul>
        </HeaderMiddle>
        <LogoutBtn href="/" className="logout">
          LOGOUT
        </LogoutBtn>
      </Container>
    </MainHeader>
  );
};

export default Header;
