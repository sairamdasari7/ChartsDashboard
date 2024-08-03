import React from 'react';

const TaskList = ({ tasks }) => (
  <div className="widget">
    <h3>Tasks</h3>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

export default TaskList;
