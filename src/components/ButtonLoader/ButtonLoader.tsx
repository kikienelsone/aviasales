import React from 'react';

import { useAppDispatch } from '../../hook/hook';
import { plus } from '../../store/FilterSlice';

import button from './ButtonLoader.module.scss';
export const ButtonLoader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <label>
      <button className={button.wrapper} onClick={() => dispatch(plus())}>
        show 5 more tickets
      </button>
    </label>
  );
};
