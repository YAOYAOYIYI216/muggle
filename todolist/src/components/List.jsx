import React from 'react';
import Item from './Item.jsx';

export default function List(props) {
  const { todos, filter, ifCompleted } = props;

  const filterTodos = todos.filter((todo) => {
    if (todo.status === 'cleared') {
      return false;
    }
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.status === 'completed';
    } else if (filter === 'active') {
      return todo.status === 'active';
    }
    return false;
  });

  return (
    <ul className='todos'>
      {filterTodos.map((todo) => (
        <Item key={todo.id} {...todo} ifCompleted={ifCompleted} 
          
        />
      ))}
    </ul>
  );
}
