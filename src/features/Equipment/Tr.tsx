import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { remove_equipment, update_current } from './equipmentSlice';

export default function Tr({data,i}:{data:{id:string,item:string,required:number,current:number|undefined,extra:boolean},i:number}) {
  const dispatch = useAppDispatch();
  const {id,item,required,extra} = data;
  const equipment = useSelector((state: RootState) => state.equipment.find((equip) => equip.id === id));
  let current=0;
  if(equipment===undefined){
    console.error(`equipment id:${id} not found`)
  }else{
    current=equipment.current
  }
  

  const handleDelete = (id:string)=>{
    dispatch(remove_equipment({id}))
  }
  
  return (
    <tr className="table__row">
    <td className="row__cell">
    {extra?<button onClick={()=>{handleDelete(id)}}>❌</button>:''}
    {i+1}
    </td>
    <td className="row__cell">{item}</td>
    <td className="row__cell">{required}</td>
    <td className="row__cell"><input value={current} onChange={({target})=>{dispatch(update_current({id,current:Number(target.value)}))}} type="number"></input></td>
    <td className="row__cell">{current-required}</td>
    </tr>
  )
}
