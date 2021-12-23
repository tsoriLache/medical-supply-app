import { createSlice } from '@reduxjs/toolkit'

interface EmployeeState {
  name:string;
  location:string;
  phone?:string
  date:Date;
}

const initialState = {} as EmployeeState;

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    update:(_state,{payload})=>({...payload})
  },
})

export const {update} = employeeSlice.actions
export default employeeSlice.reducer
