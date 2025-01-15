import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = '오늘 할 일';
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleChecked = (itemId: number) => {
    setTodos((prev) => prev.map((item) => (item.id === itemId ? { ...item, isChecked: !item.isChecked } : item)));
  };

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, isChecked: false }]);
      setInput('');
    }
  };

  const removeTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const showTodoInfo = (todo: Todo) => {
    setShowInfo(true);
    setSelectedTodo(todo);
  };

  const closeTodoInfo = () => {
    setShowInfo(false);
    setSelectedTodo(null);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일 입력"
            value={input}
            style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="success" onClick={addTodo}>
            추가
          </Button>
        </div>
        <p></p>
        <div className="board">
          <ul>
            {todos.map((todo, idx) => {
              return (
                <li key={todo.id}>
                  <input type="checkbox" onChange={() => handleChecked(todo.id)} />
                  <span onClick={() => showTodoInfo(todo)}>
                    {todo.isChecked ? <del>{todo.text}</del> : <>{todo.text}</>}
                  </span>
                  <button
                    onClick={() => {
                      removeTodo(todo.id);
                    }}
                    className="delbutton"
                  >
                    삭제
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
