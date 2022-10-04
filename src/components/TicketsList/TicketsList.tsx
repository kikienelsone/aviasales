import React from 'react';
import { Alert } from 'antd';

import 'antd/dist/antd.css';
import Ticket from '../Ticket/Ticket';
import { useAppSelector } from '../../hook/hook';
import Segments from '../Segments/Segments';
import { TicketsDataProps } from '../interfaces/TicketsDataProps';
import { ButtonLoader } from '../ButtonLoader/ButtonLoader';
import Buttons from '../Buttons/Buttons';

import ticketLists from './TicketsList.module.scss';

const TicketsList: React.FC = () => {
  const limit = useAppSelector((totalState) => totalState.filterSlice.limitData);

  const tickets = useAppSelector((totalState) => totalState.filterSlice.filterData.slice(0, limit));
  const button = tickets.length ? <ButtonLoader /> : null;
  const filterButton = tickets.length ? <Buttons /> : null;

  return (
    <ul className={ticketLists.wrapper}>
      {filterButton}
      {tickets.length ? (
        tickets.map((item: TicketsDataProps) => {
          return (
            <li key={Math.random() * 500} className={ticketLists['wrapper__tickets-list']}>
              <Ticket item={item} />
              <Segments segments={item.segments} />
            </li>
          );
        })
      ) : (
        <Alert message="OOPS" description="No flights found matching your filters" type="info" />
      )}
      {button}
    </ul>
  );
};
export default TicketsList;
