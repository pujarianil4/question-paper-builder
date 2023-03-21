import React, { useState } from "react";
import "./index.css";
import { Button, Input, Select, Space, Steps } from "antd";
import QuestionModal from "../modal/questionModal";
import Preview from "../Preview";



const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

export default function PaperInput() {
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [examDetails, setExamDetails] = useState([ ]);
  const [instructions, setInstructions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [singleInput, setSingleInput] = useState({
    collegeName: "",
    departmentName: "",
  });
  const [examDetailsInput, setExamDetailsInput] = useState("");
  const [instructionsInput, setInstructionsInput] = useState("");

  const handleQuestionList = (que) => {
    setQuestions([...questions, que]);
  };

  const next = () => {
    setCurrent( current == steps.length ? current :  current + 1);
  };
  const prev = () => {
    setCurrent( current == 0 ? 0 : current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
    <div className="steps_div">

     <Steps className="steps" current={current} items={items} />
    </div>
     { current == 0 && <div className="paper_container">
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
                onClick={() =>
                  setExamDetails([...examDetails, examDetailsInput])
                }
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
              <button className="add_question" onClick={() => setOpen(true)}>
                ADD QUESTIONS
              </button>
            </div>
          </div>
        </div>
       <Preview singleInput={singleInput} examDetails={examDetails} instructions={instructions} questions={questions} />
      </div>
}

{
  current == 1 && <div className="templateSelection">
    <h1>SELECT TEMPLATE</h1>
  </div>
}

{
  current == 2 && <div className="templateSelection">
    <h1>View Question Paper</h1>
  </div>
}

     <div className="last_btns">
      <button onClick={prev}>Prev</button>
      <button onClick={next} >Next</button>
     </div>
      <QuestionModal
        isOpen={isOpen}
        setOpen={setOpen}
        handleQuestionList={handleQuestionList}
      />
    </>
  );
}
