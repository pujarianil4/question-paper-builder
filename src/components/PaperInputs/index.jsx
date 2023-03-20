import React, { useState } from "react";
import "./index.css";
import { Button, Input, Select, Space } from "antd";
import QuestionModal from "../modal/questionModal";

export default function PaperInput() {
  const [isOpen, setOpen] = useState(false)
  const [examDetails, setExamDetails] = useState([
    "Subject Name: Computer",
    "Program Code: 20",
    "Date & Time: 4/3/22 & 2:00 PM to 3:00 PM",
    "Semister: 6",
  ]);
  const [instructions, setInstructions] = useState([
    "Subject Name: Computer",
    "Program Code: 20",
    "Date & Time: 4/3/22 & 2:00 PM to 3:00 PM",
    "Semister: 6",
  ]);
  const [questions, setQuestions] = useState([
    {
      heading: "Any three from five",
      sub: ["somethging", "something2"],
    },
  ]);

  const [singleInput, setSingleInput] = useState({
    collegeName: "R C Patel ",
    departmentName: "Computer Engineering",
  });
  const [examDetailsInput, setExamDetailsInput] = useState("");
  const [instructionsInput, setInstructionsInput] = useState("");


  const handleQuestionList = (que) => {
    setQuestions([...questions, que])
  }

  return (
    <>
    <div className="paper_container">
      <div className="form_container">
        <div className="clg_info">
          <label htmlFor="">College Name:</label>
          <Input
            value={singleInput.collegeName}
            className="inout"
            name="collegeName"
            onChange={(e) =>
              setSingleInput({
                ...singleInput,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label htmlFor="">Department Name:</label>
          <Input
            value={singleInput.departmentName}
            className="inout"
            name="departmentName"
            onChange={(e) =>
              setSingleInput({
                ...singleInput,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label htmlFor="">Exam Details:</label>
          <div className="withButton">
            <Input
              className="inout"
              value={examDetailsInput}
              onChange={(e) => setExamDetailsInput(e.target.value)}
              placeholder="Department Name"
            />
            <button
              onClick={() => setExamDetails([...examDetails, examDetailsInput])}
            >
              Add
            </button>
          </div>

          <label htmlFor="">Instructions:</label>

          <div className="withButton">
            <Input
              className="inout"
              value={instructionsInput}
              onChange={(e) => setInstructionsInput(e.target.value)}
              placeholder="Department Name"
            />
            <button
              onClick={() =>
                setInstructions([...instructions, instructionsInput])
              }
            >
              Add
            </button>
          </div>

          <div>
            <button className="add_question" onClick={() => setOpen(true)}>ADD QUESTIONS</button>
          </div>
        </div>
      </div>
      <div className="preview">
        <label htmlFor="">College Name:</label>
        <p>{singleInput?.collegeName}</p>
        <label htmlFor="">Department Name:</label>
        <p>{singleInput?.departmentName} </p>
        <label htmlFor="">Exam Details:</label>
        <div className="list">
          {examDetails.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <label htmlFor="">Instructions:</label>
        <div className="list">
          {instructions.map((item) => (
            <li>{item}</li>
          ))}
        </div>

        <label htmlFor="">QUESTIONS:</label>
        <div className="list">
          {questions.map((item, i) => (
            <div className="qList">
              <span>{i+1} ) {item.heading}</span>
              {
                item.sub.map((el) => <li>{el}</li>)
              }
            </div>
          ))}
        </div>
      </div>
    
    </div>
    <QuestionModal isOpen={isOpen} setOpen={setOpen} handleQuestionList={handleQuestionList} />
    </>
  );
}
