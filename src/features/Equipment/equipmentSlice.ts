import { createSlice } from '@reduxjs/toolkit'
import { fullEquipmentList } from '../../db/db'

interface EquipmentState {
  id:string;
  item:string;
  required:number;
  current?:number;
  diff?:number;
  extra:boolean;//TODO what happen if not assign??
}

const initialState = fullEquipmentList as EquipmentState[];

const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
      add_equipment:(state,{payload})=>[...state,payload.newEquip],
      remove_equipment:(state,{payload})=>state.filter(({id})=>id!==payload.id)
    // update:(state,{payload})=>{console.log(state,payload)}
  },
})

export const {add_equipment,remove_equipment} = equipmentSlice.actions
export default equipmentSlice.reducer
