// Userportal.js

import React from "react";
import "./Userportal.css";
import profileimg from "./profileimage.png";
import {
  FaBriefcase,
  FaSomeIcon,
  FaCrown,
  FaChartBar,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaMoon,
} from "react-icons/fa";

const Userportal = () => {
  return (
    <div className="navbar-container">
      <div className="left-part">
        <div className="user-info">
          <img src={profileimg} alt="User" />

          <div className="user-info-text">
            <div className="user-info-text-title">
              <h3>Ashish Maharjan</h3>
            </div>
            <div className="user-info-text-designation">
              <p>Branch Manager</p>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Search" className="search-box" />
        <div className="menu-main">
          <div className="account-menu">
            {/* Use the FaSomeIcon for the account */}
            <FaBriefcase className="menu-icon" />
            ACCOUNT
          </div>
          <div className="menu-item">
            <FaCrown className="menu-icon" />
            PREMIUM
          </div>
          <div className="menu-item">
            <FaChartBar className="menu-icon" />
            ANALYTICS
          </div>
          <div className="menu-item">
            <FaCog className="menu-icon" />
            SETTINGS
          </div>
          <div className="down-menu-item">
            <div className="menu-item">
              <FaQuestionCircle className="menu-icon" />
              HELP CENTER
            </div>
            <div className="menu-item">
              <FaSignOutAlt className="menu-icon" />
              LOG OUT
            </div>
            <div className="menu-item">
              <FaMoon className="menu-icon" />
              NIGHT MODE
            </div>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="right-section">
        <div className="right-section-content">
          <h2>General Setup</h2>
          <hr />
          <ul>
            <li>
              Company Info <hr />
            </li>
            <li>
              Currency <hr />
            </li>
            <li>
              Time Zone <hr />
            </li>
            <li>
              Financial Year End <hr />
            </li>
            <li>
              Title <hr />
            </li>
            <li>
              Gender <hr />
            </li>
            <li>
              Religion <hr />
            </li>
            <li>
              Nationality <hr />
            </li>
            <li>
              Language <hr />
            </li>
            <li>
              Employment Type <hr />
            </li>
            <li>
              Position <hr />
            </li>
            <li>
              Faculty List <hr />
            </li>
            <li>
              Specialization List <hr />
            </li>
            <li>
              License Type <hr />
            </li>
            <li>
              Document Type <hr />
            </li>
            <li>
              Vehicle Type <hr />
            </li>
            <li>
              Family Status <hr />
            </li>
            <li>
              Occupations <hr />
            </li>
            <li>
              Relations <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Userportal;
