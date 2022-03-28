import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type requestState = {
  networks: Array<string>;
  filter: Array<number>;
  models: Array<string>;
};

const initialState: requestState = {
  networks: [],
  filter: [],
  models: ["C_PIDX"],
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addModel: (state, action: PayloadAction<string>) => {
      console.log("ADD");
      console.log(
        state.models.map((model) => {
          return model;
        })
      );
      state.models = [...state.models, action.payload];
      console.log(
        state.models.map((model) => {
          return model;
        })
      );
    },

    removeModel: (state, action: PayloadAction<string>) => {
      console.log("remove");
      state.models = state.models.filter((model) => {
        return model !== action.payload;
      });

      console.log(
        state.models.filter((model) => {
          return model !== action.payload;
        })
      );
    },

    removeNetwork: (state, action: PayloadAction<string>) => {
      state.networks = state.networks.filter((oldNetwork) => {
        return oldNetwork !== action.payload;
      });
    },

    addNetwork: (state, action: PayloadAction<string>) => {
      state.networks = [...state.networks, action.payload];
    },

    addItemToFilter: (state, action: PayloadAction<number>) => {
      state.filter = [...state.filter, action.payload];
    },

    removeItemFromFilter: (state, action: PayloadAction<number>) => {
      state.filter = state.filter.filter((item) => {
        return item !== action.payload;
      });
    },
  },
});

export const {
  addModel,
  removeModel,
  removeNetwork,
  addNetwork,
  addItemToFilter,
  removeItemFromFilter,
} = requestSlice.actions;

export const requestState = (state: RootState) => state.request;
export const checkModels = (state: RootState, model: string) =>
  state.request.models.includes(model);

export const checkSelected = (state: RootState, network: string) => {
  return state.request.networks.includes(network);
};
export default requestSlice.reducer;
