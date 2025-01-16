import React from 'react';
import { Modal } from 'react-bootstrap';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

type TodoModalProps = {
  show: boolean;
  todo: Todo | null;
  closeTodoInfo: () => void;
};

const TodoModal: React.FC<TodoModalProps> = ({ show, todo, closeTodoInfo }) => {
  return (
    <div>
      <Modal show={show} onHide={closeTodoInfo} centered>
        <Modal.Header closeButton>
          <Modal.Title>Todo 상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>{todo?.text}</Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoModal;
