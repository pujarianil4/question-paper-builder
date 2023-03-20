import React from 'react'
import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import PaperInput from '../PaperInputs';

export default function StepsCompo() {

    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };

    const steps = [
        {
          title: 'First',
          content: <PaperInput />,
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
  return (
    <div>


    </div>
  )
}
