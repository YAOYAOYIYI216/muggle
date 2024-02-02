import React, { useState } from 'react';

export default function Header(props) {
  const [inputText, setInputText] = useState('');
  const { addTodo } = props;

  const onInput = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = () => {
    if (inputText.length > 0) {
      addTodo(inputText);
    }
    setInputText('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  };

  return (
    <div>
      <h1>todos</h1>
      <div className='addTodo'>
        <input
          className='textfield'
          placeholder='What needs to be done?'
          value={inputText}
          onChange={onInput}
          onKeyDown={onKeyDown}
        />
        
      </div>
    </div>
  );
}
