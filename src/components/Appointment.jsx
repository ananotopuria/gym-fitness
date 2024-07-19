import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineCalendar } from "react-icons/hi";


const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const hours = Array.from({ length: 24 }, (v, i) => ({
    value: `${i}:00`,
    label: `${i}:00`,
  }));

  const handleMakeAppointment = () => {
    if (selectedDate && selectedHour) {
      alert(
        `Appointment set for ${selectedDate.toDateString()} at ${
          selectedHour.value
        }`
      );
    } else {
      alert("Please select a date and an hour.");
    }
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: '0.8rem',
      border: '1px solid #242428',
      borderRadius: '4px',
      fontSize: '1.6rem',
      width: '100%',
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '16px',
    }),
  };

  return (
    <div className="appointment">
      <h2 className="appointment-title">Make an Appointment</h2>
      <div className="appointment__container">
        <div className="appointment__container-wrap">
          <label>Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            isClearable
          />
        </div>
        <div className="appointment__container-wrap">
          <label>Hour:</label>
          <Select
            options={hours}
            value={selectedHour}
            onChange={(option) => setSelectedHour(option)}
            styles={customStyles}
          />
        </div>
      </div>
      <button className="appointment-btn" onClick={handleMakeAppointment}><HiOutlineCalendar /> Make an Appointment</button>
    </div>
  );
};

export default Appointment;
