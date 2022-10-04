import React, { useEffect } from 'react';

import { getSearchId } from '../../services/Requests';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getTickets } from '../../store/AsyncThunkRequests';
import TicketsList from '../TicketsList/TicketsList';
import { Rotation } from '../Rotation/Rotation';

import app from './App.module.scss';
import img from './Logo.png';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getSearchId().then(() => dispatch(getTickets()));
  }, [dispatch]);
  return (
    <div className={app.wrapper}>
      <div className={app.img}>
        <img className={app.img} src={img} alt="logo" />
      </div>
      <div className={app.content}>
        <Rotation />
        <TicketsList />
      </div>
    </div>
  );
};
export default App;
