import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTickets = createAsyncThunk('data/getTickets', async () => {
  for (let i = 0; i < 20; i++) {
    const ls = localStorage.getItem('searchId');
    try {
      const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${ls}`);
      const tickets = await res.json();
      console.log(tickets);
      return tickets.tickets;
    } catch (e) {
      console.log(e);
    }
  }
});
