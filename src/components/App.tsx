import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import TabPane from 'antd/lib/tabs/TabPane'

import { getSearchId, getTickets } from '../services/Requests'

import TicketsList from './TicketsList/TicketsList'
import Buttons from './Buttons/Buttons'

const App: React.FC = () => {
  useEffect(() => {
    getSearchId()
    getTickets(setData)
  }, [])

  const [data, setData] = useState([])
  return (
    <div>
      <Buttons />
      <TicketsList data={data} />
    </div>
  )
}
export default App
