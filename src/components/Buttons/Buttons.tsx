import React from 'react';

import { mostCheapTickets, mostFasterTickets, mostOptimalTickets } from '../../store/FilterSlice';
import { useAppDispatch } from '../../hook/hook';

import buttons from './Buttons.module.scss';

const Buttons: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={buttons.wrapper}>
      <button onClick={() => dispatch(mostCheapTickets())} className={buttons.button}>
        Cheapest
      </button>
      <button onClick={() => dispatch(mostFasterTickets())} className={buttons.button}>
        Fastest
      </button>
      <button onClick={() => dispatch(mostOptimalTickets())} className={buttons.button}>
        Optimal
      </button>
    </div>
  );
};
export default Buttons;
