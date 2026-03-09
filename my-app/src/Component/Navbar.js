import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import "../Styles/HowToApply.css";

function Navbar() {
  const [showSteps, setShowSteps] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Registration" },
    { id: 2, title: "Login" },
    { id: 3, title: "Create Profile" },
    { id: 4, title: "Apply Scheme" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>Village360</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          {/* How to Apply link */}
          <span
            className="how-to-apply"
            onClick={() => setShowSteps(!showSteps)}
          >
            How to Apply
          </span>
        </div>
      </div>

      {/* HOW TO APPLY SECTION */}
      {showSteps && (
  <>
    <div
      className="overlay"
      onClick={() => setShowSteps(false)}
    ></div>

    <div className="apply-container">
          <h2>How to Apply Online</h2>

          {/* Steps Header */}
          <div className="steps">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`step ${
                  activeStep === step.id ? "active" : ""
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <span>{step.id}</span>
                <p>{step.title}</p>
              </div>
            ))}
          </div>

          {/* Step Content */}
<div className="step-content">
  {activeStep === 1 && (
    <>
      <h3>Registration Option</h3>
      <p> Registration</p>
      <ul>
        <li>Using email</li>
        <li>Using password</li>
        <li>enter your address</li>
        
        <li>and then select role!</li>
      </ul>
    </>
  )}

  {activeStep === 2 && (
    <>
      <h3>Login</h3>
      <p>Login using registered User ID and Password</p>
    </>
  )}

  {activeStep === 3 && (
    <>
      <h3>Create Profile</h3>
      <p>Fill personal, address, and bank details</p>
    </>
  )}

  {activeStep === 4 && (
    <>
      <h3>Apply Scheme</h3>
      <p>Select scheme, upload documents and submit</p>
    </>
  )}

  {/* Navigation Buttons */}
  <div className="step-buttons">
    <button
      disabled={activeStep === 1}
      onClick={() => setActiveStep(activeStep - 1)}
    >
      Previous
    </button>

    <button
      disabled={activeStep === steps.length}
      onClick={() => setActiveStep(activeStep + 1)}
    >
      Next
    </button>
  </div>
</div>


            {activeStep === 2 && (
              <>
                <h3>Login</h3>
                <p>Login using registered User ID and Password</p>
              </>
            )}

            {activeStep === 3 && (
              <>
                <h3>Create Profile</h3>
                <p>Fill personal, address, and bank details</p>
              </>
            )}

            {activeStep === 4 && (
              <>
                <h3>Apply Scheme</h3>
                <p>Select scheme, upload documents and submit</p>
              </>
            )}
         
          </div>
</>
)}
    
    </>
  )}
 

export default Navbar;
