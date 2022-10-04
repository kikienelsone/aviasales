import React from 'react';

import { TicketsDataProps } from '../interfaces/TicketsDataProps';

import ticket from './Ticket.module.scss';

interface TicketProps {
  item: TicketsDataProps;
}

const Ticket: React.FC<TicketProps> = ({ item }) => {
  return (
    <div className={ticket.wrapper}>
      <span className={ticket.price}>{item.price} P</span>
      <img src={`https://pics.avs.io/99/36/${item.carrier}.png`} className={ticket.carrier} alt="pic"></img>
    </div>
  );
};
export default Ticket;
