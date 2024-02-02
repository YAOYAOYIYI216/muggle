import React, { useState, useEffect, useRef } from 'react';

export default function Item(props) {
  const { id, label, status, ifCompleted } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedLabel, setEditedLabel] = useState(label);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleCheck = () => {
    ifCompleted(id);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedLabel.trim() !== '') {
      ifCompleted(id, editedLabel); 
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    setEditedLabel(e.target.value);
  };

  const handleInputBlur = () => {
    handleSave();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li className={`todo${isEditing ? ' editing' : ''}`} onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type='text'
          value={editedLabel}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          ref={inputRef}
        />
      ) : (
        <label onDoubleClick={handleDoubleClick}>
          <input type='radio' checked={status === 'completed'} onChange={handleCheck} />
          {label}
        </label>
      )}
    </li>
  );
}

