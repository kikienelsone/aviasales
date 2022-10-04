import React from 'react';

import { useAppDispatch } from '../../hook/hook';
import { showTickets } from '../../store/FilterSlice';

export const ButtonLoader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <label>
      <button onClick={() => dispatch(showTickets())}>show 5 more tickets</button>
    </label>
  );
};
