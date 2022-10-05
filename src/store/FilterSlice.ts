import { createSlice } from '@reduxjs/toolkit';

import { TicketsDataProps } from '../components/interfaces/TicketsDataProps';

// eslint-disable-next-line import/namespace
import { getTickets } from './AsyncThunkRequests';
interface FilterData {
  data: [] | TicketsDataProps[];
  filterData: [] | TicketsDataProps[];
  limitData: number;
  checkBoxData: [];
  status: boolean;
}
const initialState: FilterData = {
  data: [],
  filterData: [],
  checkBoxData: [],
  limitData: 5,
  status: false,
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = true;
    },

    stopLoading: (state) => {
      state.status = false;
    },

    plus(state) {
      state.limitData += 5;
    },

    addTickets(state, action) {
      const tickets = action.payload.tickets;
      state.data = [...state.data, ...tickets];
    },

    showTickets(state) {
      state.filterData = state.filterData.slice(state.limitData);
    },

    setStops(state, action: { type: string; payload: number }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (state.checkBoxData.includes(action.payload)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.checkBoxData = state.checkBoxData.filter((item) => item !== action.payload);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.checkBoxData.push(action.payload);
      }
    },

    mostCheapTickets(state) {
      state.filterData = state.filterData.sort((a, b) => a.price - b.price);
    },
    mostFasterTickets(state) {
      state.filterData = state.filterData.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    },
    mostOptimalTickets(state) {
      state.filterData = state.filterData.sort((a, b) => {
        const price = Math.floor(a.price / 2) + a.segments[0].duration;
        const duration = Math.floor(b.price / 2) + b.segments[0].duration;
        return price - duration;
      });
    },

    removeAllStops(state) {
      state.filterData = [];
    },

    getStops(state) {
      state.filterData = state.data.filter((item) => {
        const stops: number = item.segments[0].stops.length;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return state.checkBoxData.includes(stops);
      });
    },
  },
  // extraReducers: (builder) => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   builder.addCase(getTickets.fulfilled, (state, action) => {
  //     state.data = action.payload;
  //   });
  // },
  extraReducers: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [getTickets.pending]: (state: any) => {
      state.status = false;
      state.error = null;
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // [getTickets.fulfilled]: (state: any, action: any) => {
    //   state.status = 'resolved';
    //   state.tikets = action.payload;
    // },
  },
});
export default filterSlice.reducer;
export const {
  setStops,
  stopLoading,
  setLoading,
  plus,
  addTickets,
  getStops,
  mostOptimalTickets,
  mostFasterTickets,
  mostCheapTickets,
} = filterSlice.actions;
