import { useState } from "react";
import "../Styles/HowToApply.css";

function HowToApply() {

  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    "Registration",
    "Login",
    "Create Profile",
    "Apply Scheme"
  ];

  return (
    <div className="apply-container">

      <h2>How to Apply Online</h2>

      {/* Stepper */}
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${activeStep === index + 1 ? "active" : ""}`}
            onClick={() => setActiveStep(index + 1)}
          >
            <div className="circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="step-content">

        {activeStep === 1 && (
          <p>Register using email and password.</p>
        )}

        {activeStep === 2 && (
          <p>Login using your registered credentials.</p>
        )}

        {activeStep === 3 && (
          <p>Create your profile with personal and bank details.</p>
        )}

        {activeStep === 4 && (
          <p>Select scheme and upload required documents.</p>
        )}

      </div>

      {/* Buttons */}
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
  );
}

export default HowToApply;