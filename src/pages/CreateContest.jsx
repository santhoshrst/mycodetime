import React, { useState } from "react";
import "./CreateContest.css";

const CreateContest = () => {


  return (
    <>
      {/* Navbar */}

        <div className="contest-container" style={{padding:'0.5rem'}}>
          <div className="page-header">
            <h1><i className="fas fa-plus-circle"></i> Create Contest</h1>
            <p>Organize your coding competition</p>
          </div>

    <form className="form-card1 my-box" id="contestForm">

      <div className="form-group">
        <label htmlFor="contestName"><i className="fas fa-trophy"></i> Contest Name</label>
        <input type="text" id="contestName" name="contestName" placeholder="Enter contest name" required />
      </div>

      <div className="form-group">
        <label htmlFor="description"><i className="fas fa-align-left"></i> Description</label>
        <textarea id="description" name="description" placeholder="Describe your contest..." required></textarea>
      </div>

      <div className="form-group">
        <label><i className="fas fa-calendar-alt"></i> Schedule</label>
        <div className="datetime-row">
          <div>
            <label htmlFor="startDate" style={{ fontSize: "14px", marginBottom: "5px" }} >Start Date & Time</label>
            <input type="datetime-local" id="startDate" name="startDate" required />
          </div>
          <div>
            <label htmlFor="endDate" style={{ fontSize: "14px", marginBottom: "5px" }} >End Date & Time</label>
            <input type="datetime-local" id="endDate" name="endDate" required />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="duration"><i className="fas fa-clock"></i> Duration (minutes)</label>
        <input type="number" id="duration" name="duration" placeholder="e.g., 120" min="30" step="30" required />
      </div>

      <div className="form-group">
        <label><i className="fas fa-signal"></i> Difficulty Level</label>
        <div className="difficulty-options">
          <div className="difficulty-option difficulty-easy">
            <input type="radio" id="easy" name="difficulty" value="easy" required />
            <label htmlFor="easy">Easy</label>
          </div>
          <div className="difficulty-option difficulty-medium">
            <input type="radio" id="medium" name="difficulty" value="medium" />
            <label htmlFor="medium">Medium</label>
          </div>
          <div className="difficulty-option difficulty-hard">
            <input type="radio" id="hard" name="difficulty" value="hard" />
            <label htmlFor="hard">Hard</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label><i className="fas fa-code"></i> Allowed Languages</label>
        <div className="language-selection">
          <div className="language-option">
            <input type="checkbox" id="java" name="languages" value="java" />
            <label htmlFor="java">Java</label>
          </div>
          <div className="language-option">
            <input type="checkbox" id="cpp" name="languages" value="cpp" />
            <label htmlFor="cpp">C++</label>
          </div>
          <div className="language-option">
            <input type="checkbox" id="python" name="languages" value="python" />
            <label htmlFor="python">Python</label>
          </div>
          <div className="language-option">
            <input type="checkbox" id="javascript" name="languages" value="javascript" />
            <label htmlFor="javascript">JavaScript</label>
          </div>
          <div className="language-option">
            <input type="checkbox" id="csharp" name="languages" value="csharp" />
            <label htmlFor="csharp">C#</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="maxParticipants"><i className="fas fa-users"></i> Max Participants</label>
        <input type="number" id="maxParticipants" name="maxParticipants" placeholder="Leave empty for unlimited" min="1" />
      </div>

      <div className="form-group">
        <label><i className="fas fa-list"></i> Problems</label>
        <div id="problemsContainer">
          <div className="problem-section">
            <div className="problem-header">
              <h3>Problem 1</h3>
            </div>
            <div className="form-group" style={{marginBottom: "15px"}} >
              <label htmlFor="problem1Title" style={{fontSize: "14px"}} >Problem Title</label>
              <input type="text" id="problem1Title" name="problem1Title" placeholder="Enter problem title" required />
            </div>
            <div className="form-group" style={{marginBottom: "0px"}}>
              <label htmlFor="problem1Description" style={{fontSize: "14px"}} >Problem Description</label>
              <textarea id="problem1Description" name="problem1Description" placeholder="Describe the problem..." required></textarea>
            </div>
          </div>
        </div>
        <button type="button" className="add-problem-btn" >
          <i className="fas fa-plus"></i> Add Another Problem
        </button>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-secondary" >Reset</button>
        <button type="submit" className="btn-primary">
          <i className="fas fa-rocket"></i> Create Contest
        </button>
      </div>
    </form>
  </div>

    </>
  );
};

export default CreateContest;
