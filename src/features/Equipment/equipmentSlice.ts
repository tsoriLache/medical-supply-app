import { createSlice } from '@reduxjs/toolkit'
import { fullEquipmentList } from '../../db/db'

interface EquipmentState {
  id:number;
  item:string;
  required:number;
  current?:number;
  diff?:number
}

const initialState = fullEquipmentList as EquipmentState[];

const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
      add:(state,{payload})=>[...state,payload.data],
    update:(state,{payload})=>{console.log(state,payload)}
  },
})

export const {add,update} = equipmentSlice.actions
export default equipmentSlice.reducer
