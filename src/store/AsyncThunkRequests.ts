import axios from 'axios';

import { getAllTickets, setLoading, stopLoading } from './FilterSlice';

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
