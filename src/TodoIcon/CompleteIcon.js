import React from 'react';
import { TodoIcon } from '.';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#a6d4b7' : '#b1b6bd'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };