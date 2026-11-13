import React from 'react';
import { TodoIcon } from '.';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="#b1b6bd"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };