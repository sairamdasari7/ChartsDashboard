import React from 'react';

const CheckTable = ({ data }) => (
  <div className="widget">
    <h3>Check Table</h3>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Progress</th>
          <th>Quantity</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.progress}</td>
            <td>{item.quantity}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CheckTable;
