import React,{useState} from 'react'
import { useAppDispatch } from '../../app/hooks';
import { remove_equipment } from './equipmentSlice';

export default function Tr({data,i}:{data:{id:string,item:string,required:number,current:number|undefined,extra:boolean},i:number}) {
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState(data.current?data.current:0)
  const {id,item,required,extra} = data;

  const handleDelete = (id:string)=>{
    console.log(id);
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
    <td className="row__cell"><input value={current} onChange={({target})=>{setCurrent(Number(target.value))}} type="number"></input></td>
    <td className="row__cell">{current-required}</td>
    </tr>
  )
}
