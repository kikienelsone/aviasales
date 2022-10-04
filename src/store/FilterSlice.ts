import { createSlice } from '@reduxjs/toolkit';

import { TicketsDataProps } from '../components/interfaces/TicketsDataProps';

import { getTickets } from './AsyncThunkRequests';
interface FilterData {
  data: [] | TicketsDataProps[];
  filterData: [] | TicketsDataProps[];
  limitData: number;
  checkBoxData: [];
}
const initialState: FilterData = {
  data: [],
  filterData: [],
  checkBoxData: [],
  limitData: 5,
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(getTickets.fulfilled, (state, action) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.data = action.payload;
      console.log(state.data);
    });
  },
});
export default filterSlice.reducer;
export const { setStops, showTickets, getStops, mostOptimalTickets, mostFasterTickets, mostCheapTickets } =
  filterSlice.actions;
