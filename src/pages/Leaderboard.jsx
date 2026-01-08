import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState('All Time');

  const filters = ['All Time', 'This Month', 'This Week', 'Today'];

  // Data moved to a constant for cleaner JSX
  const users = [
    { initials: 'BG', name: 'Gopika', location: 'Salem', points: '12,450', problems: 342, wins: 28, rankType: 'rank-1', trophy: 'fa-crown trophy-gold' },
    { initials: 'SM', name: 'Sarah Martinez', location: 'Canada', points: '11,890', problems: 298, wins: 24, rankType: 'rank-2', trophy: 'fa-medal trophy-silver' },
    { initials: 'RK', name: 'Raj Kumar', location: 'India', points: '11,230', problems: 276, wins: 22, rankType: 'rank-3', trophy: 'fa-medal trophy-bronze' },
    { initials: 'EC', name: 'Emily Chen', location: 'Singapore', points: '10,650', problems: 265, wins: 19, rankType: 'rank-other' },
    { initials: 'DW', name: 'David Wilson', location: 'United Kingdom', points: '10,120', problems: 251, wins: 18, rankType: 'rank-other' },
    { initials: 'LS', name: 'Lisa Singh', location: 'Australia', points: '9,780', problems: 238, wins: 16, rankType: 'rank-other' },
    { initials: 'MT', name: 'Michael Tan', location: 'Malaysia', points: '9,450', problems: 225, wins: 15, rankType: 'rank-other' },
    { initials: 'AB', name: 'Anna Brown', location: 'Germany', points: '9,120', problems: 218, wins: 14, rankType: 'rank-other' },
    { initials: 'JK', name: 'James Kim', location: 'South Korea', points: '8,890', problems: 205, wins: 12, rankType: 'rank-other' },
    { initials: 'PG', name: 'Priya Gupta', location: 'India', points: '8,650', problems: 198, wins: 11, rankType: 'rank-other' },
  ];

  return (
    <div className="leaderboard-wrapper">

      <div className="leaderboard-container" style={{padding:'0.5rem'}}>
        <div className="page-header">
          <h1><i className="fas fa-trophy"></i> Leaderboard</h1>
          <p>Top performers and coding champions</p>
        </div>

        <div className="filter-tabs">
          {filters.map((filter) => (
            <div
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>

        <div className="leaderboard-table">
          <div className="table-header">
            <div className="header-item">Rank</div>
            <div className="header-item">User</div>
            <div className="header-item"><i className="fas fa-star"></i> Points</div>
            <div className="header-item"><i className="fas fa-code"></i> Problems</div>
            <div className="header-item"><i className="fas fa-trophy"></i> Wins</div>
          </div>

          <div className="table-body">
            {users.map((user, index) => (
              <div className="leaderboard-row" key={index}>
                <div className={`rank-badge ${user.rankType}`}>
                  {user.trophy ? (
                    <i className={`fas ${user.trophy} trophy-icon`}></i>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="user-info">
                  <div className="user-avatar">{user.initials}</div>
                  <div className="user-details">
                    <h3>{user.name}</h3>
                    <p><i className="fas fa-map-marker-alt"></i> {user.location}</p>
                  </div>
                </div>
                <div className="stat-item">
                  <i className="fas fa-star"></i>
                  <span className="stat-value">{user.points}</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-code"></i>
                  <span className="stat-value">{user.problems}</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-trophy"></i>
                  <span className="stat-value">{user.wins}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;