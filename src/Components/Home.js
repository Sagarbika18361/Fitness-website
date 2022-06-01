import React from "react";
import appstore from "../Assets/images/icons/appstore.png";
import googleplay from "../Assets/images/icons/googlePlay.png";
import heropageImg from "../Assets/images/heropage.png";
import section2 from "../Assets/images/section2pic.png";
import icon1 from "../Assets/images/sectionIcon1.png";
import icon2 from "../Assets/images/sectionIcon2.png";
import icon3 from "../Assets/images/sectionIcon3.png";
import section4 from "../Assets/images/section4img.png";
import section5 from "../Assets/images/section5.png";

import logo from "../Assets/images/bika.jpg";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaHeart } from '@fortawesome/fontawesome-free-solid'
import { FaHeart } from "react-icons/fa";
import { BsFacebook, BsTelegram, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="main_hero_section">
        {/* left side code */}
        <div className="hero_left_side">
          <h1>Healthy Living Simplified</h1>
          <p>
            Take control of your goals. Track calories, breakdown
            ingredients.Congratulations on taking a forward step to get in shape
            and feel great.
          </p>
          <div className="button_group">
            <NavLink to="common">
              <img src={appstore} alt="appstore" className="appStore" />
            </NavLink>
            <a href="/">
              <img src={googleplay} alt="googleplay" className="googlePlay" />
            </a>
          </div>
        </div>
        {/* Right side code */}
        <div className="hero_right_side">
          <a href="/" className="">
            <img src={heropageImg} alt="heropageImg" />
          </a>
        </div>
      </section>

      {/* 2nd section start */}

      <section className="common_section" id="section-two">
        {/* left side of section2  */}
        <div className="left_side ">
            <img src={section2} alt="img" className="" />
        </div>
        {/* right side of section2  */}
        <div className="right_side ">
          <h2>Your Daily Healthy App</h2>
          <p>
            Take control of your goals. Track calories, breakdown
            ingredients.Congratulations on taking a forward step to get in shape
            and feel great.
          </p>
          <div className="button_group">
            <button className="common_button">Get Started</button>
            <button className="common_button_normal">How It Works?</button>
          </div>
        </div>
      </section>

      {/* 3rd section start */}

      <section className="section_third" id="section-third">
        <h2>The Tools For Your Goals</h2>
        <p className="tools">
          Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
          Velit officia consequat
        </p>
        <div className="section_third_task">
          <div className="task-1">
            <img src={icon1} alt="img" />
            <h3>Learn & Improve</h3>
            <p>
              Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
              Velit officia consequat
            </p>
          </div>
          <div className="task-2">
            <img src={icon2} alt="img" />
            <h3>Time Management</h3>
            <p>
              Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
              Velit officia consequat
            </p>
          </div>
          <div className="task-3">
            <img src={icon3} alt="img" />
            <h3>Stay Motivated</h3>
            <p>
              Lamet minim mollit non deserunt ullamco est sit aliq do amet sint.
              Velit officia consequat
            </p>
          </div>
        </div>
      </section>

      {/* Our 4th section */}

      <section className="common_section section-four" id="section-five">
        {/* right side of section2  */}
        <div className="right_side ">
          <h2>
            Create Your Own <br />
            Fitness Journey
          </h2>
          <p>
            Take control of your goals. Track calories, breakdown
            ingredients.Congratulations on taking a forward step to get in shape
            and feel great.
          </p>
          <div className="button_group">
            <button className="common_button">Get Started</button>
            <button className="common_button_normal">How It Works?</button>
          </div>
        </div>
        {/* left side of section2  */}
        <div className=" left_side left_img_sec4 ">
          <img src={section4} alt="img" className="imgsec4" />
        </div>
      </section>

      {/* our 5th section Started */}
      <section className="common_section" id="section-five">
        {/* left side of section2  */}
        <div className="left_side ">
          <img src={section5} alt="img" />
        </div>
        {/* right side of section2  */}
        <div className="right_side ">
          <h2>We Will Take Care of Your Fitness Goals</h2>
          <div className="fitness_goals">
            <div className="rule1">
              <h3>
                <FaHeart className="text-danger text-capitalize" /> We will take
                care of your fitness goals{" "}
              </h3>
              <p>
                lamet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Track your daily habits
              </p>
            </div>
            <div className="rule2">
              <h3>
                <FaHeart className="text-danger text-capitalize" /> We will take
                care of your fitness goals{" "}
              </h3>
              <p>
                lamet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Track your daily habits
              </p>
            </div>
            <div className="rule3">
              <h3>
                <FaHeart className="text-danger text-capitalize" /> We will take
                care of your fitness goals{" "}
              </h3>
              <p>
                lamet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Track your daily habits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our 6th section start */}
      <footer className="footer">
        <div className="logo_div">
          <img src={logo} alt="logo" />
          <p className="m-0 fs-fs-6">@2021 Sagarbika</p>
        </div>
        <div className="footer-menu">
          <div className="footer-div-2">
            <h4>Products</h4>
            <a href="/">
              <li>pricing</li>
            </a>
            <a href="/">
              <li>pricing</li>
            </a>
          </div>

          <div className="footer-div-3">
            <h4>Abouts</h4>
            <a href="/">
              <li>pricing</li>
            </a>
            <a href="/">
              <li>pricing</li>
            </a>
          </div>

          <div className="footer-div-4">
            <h4>Blogs</h4>
            <a href="/">
              <li>pricing</li>
            </a>
            <a href="/">
              <li>pricing</li>
            </a>
          </div>

          <div className="footer-div-5">
            <h4>Get In Touch</h4>
            <a href="/">
              <li>Questions Or Feedback?</li>
            </a>
            <a href="/">
              <li>We’ll love to help you</li>
            </a>
          </div>
        </div>
      </footer>

      {/* our 7 section social media  */}

      <div className="icon-bar">
        <a href="https://www.facebook.com/" className="facebook"  target="_sagar">
          click here to visit <BsFacebook  className="icons ms-1"/>
        </a>

        <a href="https://telegram.org/" className="telegram"  target="_sagar">
          click here to visit <BsTelegram className="icons ms-1" />
        </a>

        <a
          href="https://www.instagram.com/"
          className="instagram"
           target="_sagar"
        >
          click here to visit <BsInstagram className="icons ms-1" />
        </a>

        <a href="https://www.linkedin.com/" className="linkedin"  target="_sagar">
          click here to visit <BsLinkedin className="icons ms-1"/>
        </a>

        <a
          href="https://www.youtube.com/"
          className="youtube"
           target="_sagar"
        >
          click here to visit <BsYoutube className="icons ms-1"/>
        </a>
      </div>
    </>
  );
};

export default Home;
