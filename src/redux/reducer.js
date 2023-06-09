import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'ru',
  isBurgerOpen: false
};

const reducer = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state) => {
      state.lang = state.lang ==='ru'?'en':'ru' ;
    },
    setBurgerOpen:(state)=>{
      state.isBurgerOpen = !state.isBurgerOpen
    }
     },
});
export const { changeLang, setBurgerOpen} = reducer.actions;

export default reducer.reducer;


