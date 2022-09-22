import React from 'react'

import { TicketsDataProps } from '../interfaces/TicketsDataProps'
import Ticket from '../Ticket/Ticket'

import ticketLists from './TicketsList.module.scss'

interface TicketsListProps {
  data: TicketsDataProps[]
}

const TicketsList: React.FC<TicketsListProps> = ({ data }) => {
  return (
    <ul className={ticketLists.wrapper}>
      {data.map((item: any) => {
        return (
          <li className={ticketLists['wrapper__tickets-list']}>
            <Ticket item={item} />
          </li>
        )
      })}
    </ul>
  )
}
export default TicketsList
