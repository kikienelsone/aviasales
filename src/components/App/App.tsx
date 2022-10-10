import React, { useEffect } from 'react';
import { Alert, Spin } from 'antd';

import { getSearchId } from '../../services/Requests';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { getTickets } from '../../store/AsyncThunkRequests';
import TicketsList from '../TicketsList/TicketsList';
import { Rotation } from '../Rotation/Rotation';

import app from './App.module.scss';
import img from './Logo.png';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((totalState) => totalState.filterSlice);

  useEffect(() => {
    getSearchId().then(() => dispatch(getTickets()));
  }, [dispatch]);
  return (
    <div className={app.wrapper}>
      <div className={app.img}>
        <img className={app.img} src={img} alt="logo" />
      </div>
      <div className={app.content}>
        {status === true ? (
          <div className="example">
            <Spin className={app.spin} tip="All tickets is coming...">
              <Alert className={app.loader} />
            </Spin>
          </div>
        ) : null}
        <div>
          <Rotation />
        </div>
        <TicketsList />
      </div>
    </div>
  );
};
export default App;
