import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import employeeReducer from '../features/Employee/employeeSlice';
import equipmentReducer from '../features/Equipment/equipmentSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    equipment: equipmentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
