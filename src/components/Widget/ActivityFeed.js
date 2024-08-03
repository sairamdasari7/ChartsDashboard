import React from 'react';

const ActivityFeed = ({ data }) => (
  <div className="widget activity-feed-widget">
    <h3>Recent Activity</h3>
    <ul>
      {data.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;
