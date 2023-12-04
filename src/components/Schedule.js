import React, { useState } from "react";
import "./Schedule.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaBriefcase, FaSearch } from "react-icons/fa";
import profileimage from "./profileimage2.png";
import profileimage2 from "./profileimage.png";
import profileimage3 from "./profileimage3.png";
const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const rowData = [
    {
      profileImage: profileimage,
      name: "Alex Maharjan",
      designation: "Software Engineer",
    },
    {
      profileImage: profileimage2,
      name: "Asish Gurung",
      designation: "Product Manager",
    },
    {
      profileImage: profileimage3,
      name: "Ajay Shrestha",
      designation: "Product Manager",
    },

    {
      profileImage: profileimage2,
      name: "Ashim Chhetri",
      designation: "Product Manager",
    },

    {
      profileImage: profileimage,
      name: "Ankit Acharya",
      designation: "Product Manager",
    },

    {
      profileImage: profileimage3,
      name: "Nabin Chhetri",
      designation: "Product Manager",
    },
    // Add more data as needed
  ];
  const rowData1 = [
    {
      profileImage: profileimage,
      profileImage2: null,
      number: "+1 Client",
      task: "Personal Care",
      backgroundcolor: "#CBC3E3",
    },
    {
      profileImage: profileimage2,
      profileImage2: profileimage,
      number: "+ 2 clients",
      task: "Dog Care",
      backgroundcolor: "#FFF44F",
    },
    {
      profileImage: null,
      profileImage2: null,
      name: null,
      designation: null,
      backgroundcolor: null,
    },

    {
      profileImage: profileimage2,
      profileImage2: null,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#90EE90",
    },

    {
      profileImage: null,
      profileImage2: null,
      number: null,
      task: null,
      backgroundcolor: null,
    },

    {
      profileImage: profileimage,
      profileImage2: profileimage2,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#CBC3E3",
    },
    // Add more data as needed
  ];
  const rowData2 = [
    {
      profileImage: null,
      number: null,
      task: null,
      backgroundcolor: null,
    },
    {
      profileImage: profileimage3,
      profileImage2: profileimage,
      number: "+ 2 clients",
      task: "Dog Care",
      backgroundcolor: "#90EE90",
    },
    {
      profileImage: profileimage,
      profileImage2: profileimage2,
      number: "+ 2 clients",
      task: "Dog Care",
      backgroundcolor: "#CBC3E3",
    },

    {
      profileImage: profileimage2,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#FFF44F",
    },

    {
      profileImage: null,
      number: null,
      taskk: null,
      backgroundcolor: null,
    },

    {
      profileImage: profileimage2,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#CBC3E3",
    },
    // Add more data as needed
  ];
  const rowData3 = [
    {
      profileImage: profileimage3,
      number: "+1 Client",
      task: "Personal Care",
      backgroundcolor: "#CBC3E3",
    },
    {
      profileImage: null,
      number: null,
      task: null,
      backgroundcolor: null,
    },
    {
      profileImage: profileimage,
      profileImage2: profileimage2,
      number: "+ 2 clients",
      task: "Dog Care",
      backgroundcolor: "#90EE90",
    },

    {
      profileImage: null,
      number: null,
      task: null,
      backgroundcolor: null,
    },

    {
      profileImage: null,
      number: null,
      taskk: null,
      backgroundcolor: null,
    },

    {
      profileImage: profileimage,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#FFF44F",
    },
  ];
  const rowData4 = [
    {
      profileImage: profileimage2,
      number: "+1 Client",
      task: "Personal Care",
      backgroundcolor: "#FFF44F",
    },
    {
      profileImage: profileimage,
      profileImage2: profileimage3,
      number: "+ 2 clients",
      task: "Dog Care",
      backgroundcolor: "#CBC3E3",
    },
    {
      profileImage: null,
      number: null,
      taskk: null,
      backgroundcolor: null,
    },

    {
      profileImage: profileimage2,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#CBC3E3",
    },

    {
      profileImage: null,
      number: null,
      taskk: null,
      backgroundcolor: null,
    },

    {
      profileImage: profileimage2,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#90EE90",
    },
  ];
  const rowData5 = [
    {
      profileImage: profileimage,
      number: "+1 Client",
      task: "Personal Care",
      backgroundcolor: "#CBC3E3",
    },
    {
      profileImage: null,
      number: null,
      task: null,
      backgroundcolor: null,
    },
    {
      profileImage: profileimage,
      profileImage2: profileimage2,
      number: "+ 2 clients",
      task: "Dog Care",
      backgroundcolor: "#",
    },

    {
      profileImage: profileimage,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#90EE90",
    },

    {
      profileImage: null,
      number: null,
      taskk: null,
      backgroundcolor: null,
    },

    {
      profileImage: profileimage2,
      number: "+1 Client",
      task: "Product Manager",
      backgroundcolor: "#FFF44F",
    },
  ];

  return (
    <div className="container-div">
      <div className="top-part">
        <div className="left-section">
          <div className="hamburger-icon">&#9776;</div>
          <select className="day-dropdown">
            <option value="sun">Sun</option>
            <option value="mon">Mon</option>
            <option value="tue">Tue</option>
            <option value="wed">Wed</option>
            <option value="thu">Thu</option>
            <option value="fri">Fri</option>
            <option value="sat">Sat</option>
            {/* Add other days as needed */}
          </select>
          <div className="date-picker">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              placeholderText="Select Date"
            />
          </div>
        </div>
        <div className="right-section">
          <select className="actions-dropdown">
            <option value="action1">Action 1</option>
            <option value="action2">Action 2</option>
            <option value="action3">Action 3</option>
            <option value="action4">Action 4</option>
            {/* Add other action options as needed */}
          </select>
          <button className="add-button">Add +</button>
          <button className="jobs-button">
            <FaBriefcase />
            Jobs
          </button>
        </div>
      </div>
      <div className="bottom-part">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>
                <FaSearch />
                <input
                  className="table-search"
                  type="text"
                  placeholder="Search by name, roll or team"
                />
              </th>
              <th>6am-9am</th>
              <th>9am-12pm</th>
              <th>12pm-3pm</th>
              <th>3pm-6pm</th>
              <th>6pm-9pm</th>
            </tr>
          </thead>

          <tbody>
            {rowData.map((data, rowIndex) => (
              <tr key={rowIndex}>
                <td>
                  <div className="profile-info">
                    <img
                      src={data.profileImage}
                      alt={data.name}
                      className="profile-image"
                    />

                    <div className="profile-details">
                      <p className="profile-name">{data.name}</p>
                      <p className="profile-designation">{data.designation}</p>
                    </div>
                  </div>
                </td>

                <td
                  style={{
                    backgroundColor: rowData1[rowIndex].backgroundcolor,
                  }}
                >
                  <div className="profile-info-1">
                    <img
                      src={rowData1[rowIndex].profileImage}
                      alt={rowData1[rowIndex].name}
                      className="profile-image-1"
                    />
                    <img
                      src={rowData1[rowIndex].profileImage2}
                      alt={rowData1[rowIndex].name}
                      className="profile-image-1"
                    />
                    <div className="profile-details-1">
                      <p className="profile-task">{rowData1[rowIndex].task}</p>
                      <p className="profile-number">
                        {rowData1[rowIndex].number}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: rowData2[rowIndex].backgroundcolor,
                  }}
                >
                  {/* Render data from rowData1 */}
                  <div className="profile-info-2">
                    {/* Add the necessary div names and structure based on rowData1 structure */}
                    {/* Example: */}
                    <img
                      src={rowData2[rowIndex].profileImage}
                      alt={rowData2[rowIndex].name}
                      className="profile-image-2"
                    />
                    <img
                      src={rowData2[rowIndex].profileImage2}
                      alt={rowData2[rowIndex].name}
                      className="profile-image-2"
                    />
                    <div className="profile-details-2">
                      <p className="profile-task">{rowData2[rowIndex].task}</p>
                      <p className="profile-number">
                        {rowData2[rowIndex].number}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: rowData3[rowIndex].backgroundcolor,
                  }}
                >
                  {/* Render data from rowData1 */}
                  <div className="profile-info-3">
                    {/* Add the necessary div names and structure based on rowData1 structure */}
                    {/* Example: */}
                    <img
                      src={rowData3[rowIndex].profileImage}
                      alt={rowData3[rowIndex].name}
                      className="profile-image-3"
                    />
                    <img
                      src={rowData3[rowIndex].profileImage2}
                      alt={rowData3[rowIndex].name}
                      className="profile-image-3"
                    />
                    <div className="profile-details-3">
                      <p className="profile-task">{rowData3[rowIndex].task}</p>
                      <p className="profile-number">
                        {rowData3[rowIndex].number}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: rowData4[rowIndex].backgroundcolor,
                  }}
                >
                  {/* Render data from rowData1 */}
                  <div className="profile-info-4">
                    {/* Add the necessary div names and structure based on rowData1 structure */}
                    {/* Example: */}
                    <img
                      src={rowData4[rowIndex].profileImage}
                      alt={rowData4[rowIndex].name}
                      className="profile-image-4"
                    />
                    <img
                      src={rowData4[rowIndex].profileImage2}
                      alt={rowData4[rowIndex].name}
                      className="profile-image-4"
                    />
                    <div className="profile-details-4">
                      <p className="profile-task">{rowData4[rowIndex].task}</p>
                      <p className="profile-number">
                        {rowData4[rowIndex].number}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: rowData5[rowIndex].backgroundcolor,
                  }}
                >
                  {/* Render data from rowData1 */}
                  <div className="profile-info-5">
                    {/* Add the necessary div names and structure based on rowData1 structure */}
                    {/* Example: */}
                    <img
                      src={rowData5[rowIndex].profileImage}
                      alt={rowData5[rowIndex].name}
                      className="profile-image-5"
                    />
                    <img
                      src={rowData5[rowIndex].profileImage2}
                      alt={rowData5[rowIndex].name}
                      className="profile-image-5"
                    />
                    <div className="profile-details-5">
                      <p className="profile-task">{rowData5[rowIndex].task}</p>
                      <p className="profile-number">
                        {rowData5[rowIndex].number}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
