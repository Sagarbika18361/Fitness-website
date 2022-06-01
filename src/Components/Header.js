import React from "react";
import logo from "../Assets/images/bika.jpg";

const Header = () => {
  return (
    <>
      <div class="header2 d-none ">
        <a href="/" class="logo">
          <img src={logo} alt="heropageImg" className="w-50 img-fluid pt-3" />
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#section-two">About Us</a>
          </li>
          <li>
            <a href="#section_third">Goals</a>
          </li>
          <li>
            <a href="#section-four">Tips</a>
          </li>
        </ul>
        <ul className="menu menu2">
        <li className="d-inline-block loginBurger ms-3  ">
            <a href="/" className="loginHam">Log In</a>
          </li>
          <li className="d-inline-block signUpBurger   ">
            <a href="/" className="signupHam ">Sign Up</a>
          </li>
        </ul>
      </div>
      <header>
        <nav>
          {/* <!-- left side menu  --> */}

          <div class="left_side_menu h-100 ">
            <div class="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div class="sub_menu">
              <a href="#section_first">
                <li>Home</li>
              </a>
              <a href="#section-two">
                <li>About </li>
              </a>
              <a href="#section-third">
                <li>Goals</li>
              </a>
              <a href="#section-five">
                <li>Tips</li>
              </a>
            </div>
          </div>

          {/* <!-- right side menu  --> */}
          <div class="right_side_menu h-100 ">
            <div class="sub_menu">
              <a href="/">
                <li>Log In</li>
              </a>
              <button>Sign Up</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
