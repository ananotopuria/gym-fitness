import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BusinessHours() {
  return (
    <div className="container mt-4 hours">
      <h3 className="text-white mb-4">Business Hours</h3>
      <table className="table-borderless table-dark table-no-borders">
        <thead>
          <tr>
            <th>Day</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>08 PM - 05 AM</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>08 PM - 05 AM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>08 PM - 05 AM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>08 PM - 05 AM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>08 PM - 05 AM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>08 PM - 05 AM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>08 PM - 05 AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BusinessHours;
