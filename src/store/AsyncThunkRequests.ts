import axios from 'axios';

import { getAllTickets, filterSlice, setLoading, stopLoading } from './FilterSlice';

// export const getTickets = createAsyncThunk('data/getTickets', async () => {
//   for (let i = 0; i < 27; i++) {
//     const ls = localStorage.getItem('searchId');
//     try {
//       const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${ls}`);
//       const tickets = await res.json();
//       console.log(tickets);
//       // return tickets.tickets;
//     } catch (e) {
//       console.log(e);
//     }
//   }
// });
// export const getTickets = createAsyncThunk('data/getTickets', async (_, { dispatch, getState }) => {
//   const { data } = getState();
//   const arrData: any[] = [];
//   for (let i = 0; i < 25; i++) {
//     const ls = localStorage.getItem('searchId');
//     try {
//       const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${ls}`);
//       const tickets = await res.json();
//       console.log(tickets);
//       tickets.tickets.forEach((t: any) => arrData.push(t));
//       dispatch(addTickets({ data }));
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   return arrData;
// });

export const getTickets = () => {
  const ls = localStorage.getItem('searchId');
  return async (dispatch: any) => {
    for (let i = 0; i < 50; i++) {
      try {
        const res = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${ls}`);
        console.log(res.data);
        if (res.status == 500) {
          throw new Error('Server Error!');
        }
        if (res.data.stop === true) {
          dispatch(stopLoading());
          break;
        }
        dispatch(setLoading());
        dispatch(getAllTickets(res.data));
      } catch (e) {
        console.log(e);
      }
    }
  };
};
