import React, { useState, useEffect } from 'react';


import './Todo.css'
import Button from '../Button';
import Form from '../Form';

const Todo = (props) => {
  const INITIAL_VALUE = ""

  const [inputValue, setInputValue] = useState(INITIAL_VALUE)


  const handleSubmit = () => {
    props.onAdd(inputValue)
    setInputValue(INITIAL_VALUE)
  }

  const handleEdit = (key, newValue) => {
    props.onEdit(key, newValue)
  }

  const handleRemove = (key) => {
    props.onRemove(key)
  }

  return (
    <div className="todo">
      <Form className="todo__add-item-field" onSubmit={handleSubmit}>
        <input className="todo__add-item-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Acheter du pain..." />
        <Button className="todo__add-item-submit">
          VALIDER
        </Button>
      </Form>
      <ul className="todo__list">
        {props.items.map((item, key) =>
          <li key={key} className="todo__item">
            <input className="todo__item-input" placeholder="Acheter du pain..." value={item} onChange={(e) => handleEdit(key, e.target.value)} />
            <button className="todo__item-remove-button" onClick={() => handleRemove(key)}>X</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Todo;