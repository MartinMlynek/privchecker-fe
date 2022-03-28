import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum PageEnum {
  MAIN_PAGE = 0,
  WAIT_PAGE = 1,
  RESULT_PAGE = 2,
}

const initialState = PageEnum.MAIN_PAGE;

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<PageEnum>) => {
      state = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export const isMainPage = (state: RootState) =>
  state.page === PageEnum.MAIN_PAGE;

export const isWaitPage = (state: RootState) =>
  state.page === PageEnum.WAIT_PAGE;

export const isResultPage = (state: RootState) =>
  state.page === PageEnum.RESULT_PAGE;

export const checkModels = (state: RootState, model: string) =>
  state.request.models.includes(model);
export default pageSlice.reducer;
