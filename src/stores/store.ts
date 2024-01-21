import { configureStore, createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  selectedArea: '',
};

// createSlice를 사용하여 리듀서 및 액션 생성
const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
  },
});

export const { setSelectedArea } = areaSlice.actions;

// 스토어 구성
export const store = configureStore({
  reducer: {
    area: areaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
