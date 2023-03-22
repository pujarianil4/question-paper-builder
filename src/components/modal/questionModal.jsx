import React, { useEffect, useState } from "react";
import { Modal, Input, AutoComplete } from "antd";
import "./questionModal.css";

export default function QuestionModal({ isOpen, setOpen, handleQuestionList }) {
  // const [isOpen, setOpen] = useState(false)
  const list = [{ value: "List data types in php" }, { value: "Explain jumping statement in php" }, { value: "List the levels of testing" }];

  const mainTitle = [
    { value: "Attempt any ONE" },
    { value: "Attempt any TWO" },
    { value: "Attempt any THREE" },
  ];
  const [options, setOptions] = useState(list);
  const [question, setQuestion] = useState([]);
  const [search, setSearch] = useState("");
  const [heading, setHeading] = useState('')

  const handleSerach = (text) => {
    setSearch(text);
  };

  const onClose = () => {
setOpen(false)
setQuestion([])
  }


  const handleADD = () => {
    const que = {
      heading: heading,
      sub: question,
    }
    handleQuestionList(que)
    setOpen(false)
  }

  const options2 = [
    {
      label: <span>Searched</span>,
      options: options.filter((el) => String(el.value).includes(search)),
    },
    {
      label: <span>List</span>,
      options: options,
    },
  ];

  const handleAddQues = () => {
    if(search != ''){
      const newList = [...question, search]
      console.log("newList", newList);
      setQuestion(newList)
      setSearch('')
    }

  }

  useEffect(() => {
    const data = options.filter((el) => String(el.value).includes(search));
    if (data.length && search != "") {
      setOptions(data);
    } else {
      setOptions(list);
    }
  }, [search]);

  const Paper = () => (
    <>
      <div className="Qmodal">
        <label htmlFor="">Title:</label>
        <AutoComplete
          className="auto_input"
          options={mainTitle}
          value={heading}
         onChange={(text) => setHeading(text)}
        />
        <label htmlFor="">Question:</label>
        <div className="withButton">
          <AutoComplete
            className="auto_input"
            options={options}
            value={search}
            onChange={(text) => handleSerach(text)}
            onSearch={(text) => handleSerach(text)}
          />
          <button onClick={handleAddQues}>
            ADD
          </button>
        </div>

        <div className="list">
          <ol>
        {question.map((item) => (
            <li>{item}</li>
          ))}
          </ol>
        </div>
      </div>
    </>
  );

  return (
    // <div className='modalContainer'>
    //   <div className='Qmodal'>

    //   </div>
    // </div>
    <>
      <Modal open={isOpen} onCancel={onClose} footer={<button onClick={handleADD} className="add_question">ADD QUESTION</button>}>
        {Paper()}
      </Modal>
    </>
  );
}
