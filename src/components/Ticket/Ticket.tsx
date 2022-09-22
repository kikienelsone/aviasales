import React from 'react'

import { TicketsDataProps } from '../interfaces/TicketsDataProps'

import ticket from './Ticket.module.scss'

interface TicketProps {
  item: TicketsDataProps
}

const Ticket: React.FC<TicketProps> = ({ item }) => {
  return (
    <div className={ticket.wrapper}>
      <span className={ticket.price}>{item.price} P</span>
      <span className={ticket.carrier}>{item.carrier}</span>
    </div>
  )
}
export default Ticket
