import React from "react";

export default function Preview({
  singleInput,
  examDetails,
  instructions,
  questions,
}) {
  return (
    <div className="preview">
      {singleInput?.collegeName && (
        <>
          <label htmlFor="">College Name:</label>
          <p>{singleInput?.collegeName}</p>
        </>
      )}
      {singleInput?.departmentName && (
        <>
          <label htmlFor="">Department Name:</label>
          <p>{singleInput?.departmentName} </p>
        </>
      )}
      {examDetails.length > 0 && (
        <>
          <label htmlFor="">Exam Details:</label>
          <div className="list">
            {examDetails.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </>
      )}
      {instructions.length > 0 && (
        <>
          <label htmlFor="">Instructions:</label>
          <div className="list">
            {instructions.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </>
      )}

      {questions.length > 0 && (
        <>
          <label htmlFor="">QUESTIONS:</label>
          <div className="list">
            {questions.map((item, i) => (
              <div className="qList">
                <span>
                  {i + 1}) {item.heading}
                </span>
                {item.sub.map((el) => (
                  <li>{el}</li>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
