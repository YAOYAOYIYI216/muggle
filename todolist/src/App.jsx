import React, { useState } from 'react';
import Header from './components/Header.jsx';
import List from './components/List.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const defaultTodos = [
  {
    id: '01',
    label: 'Todo 1',
    status: 'completed'
  },
  {
    id: '02',
    label: 'Todo 2',
    status: 'completed'
  },
  {
    id: '03',
    label: 'Todo 3',
    status: 'active'
  },
  {
    id: '04',
    label: 'Todo 4',
    status: 'active'
  },
];

export default function App() {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState(defaultTodos);

  const addTodo = (label) => {
    const getId = () => Date.now().toString();
    const newTodo = {
      id: getId(),
      label: label,
      status: 'active'
    };
    setTodos([...todos, newTodo]);
  };

  
  const ifCompleted = (id, newLabel) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updatedTodo = {
          ...todo,
          status: todo.status === 'completed' ? 'active' : 'completed',
          label: newLabel || todo.label,
        };
        return updatedTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };



  const clearCompleted = () => {
    const updateTodos = todos.map((todo) => {
      if (todo.status === 'completed') {
        return { ...todo, status: 'cleared' };
      } else {
        return todo;
      }
    });

    setTodos(updateTodos);
  };

  return (
    <div className='wrapper'>
      <Header  addTodo={addTodo} />
      <List todos={todos} filter={filter} ifCompleted={ifCompleted} />
      <Footer todos={todos} filter={filter} setFilter={setFilter} clearCompleted={clearCompleted} />
    </div>
  );
}
