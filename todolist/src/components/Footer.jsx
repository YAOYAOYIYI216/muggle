import React from 'react'

export default function Footer(props) {
  const { filter, setFilter, clearCompleted, todos } = props;

  const count = todos.filter((todo) => todo.status === 'active').length;



  const onFilter = (e) => {
    setFilter(e.currentTarget.textContent);
  };
  return (
    <div className='footer'>
      <button>{count} item{count === 1||count===0 ? '' : 's'} left</button>
      <button className={filter === 'all' ? 'selected' : ''} onClick={onFilter}>
        all
      </button>
      <button className={filter === 'active' ? 'selected' : ''} onClick={onFilter}>
        active
      </button>
      <button className={filter === 'completed' ? 'selected' : ''} onClick={onFilter}>
        completed
      </button>

      <button className='submit' onClick={clearCompleted}>Clear completed</button>
    </div>
  )
}
