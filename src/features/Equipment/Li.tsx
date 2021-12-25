import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { remove_equipment } from './equipmentSlice';

export default function Li({data,i}:{data:{id:string,item:string,required:number,current:number|undefined,extra:boolean},i:number}) {
  const dispatch = useAppDispatch();  
  const [current, setCurrent] = useState(data.current?data.current:0)
    const {id,item,required,extra} = data;
    
    const handleDelete = (id:string)=>{
      dispatch(remove_equipment({id}))
    }

    return (
        <li className="list-item" >
              {extra?<button onClick={()=>{handleDelete(id)}}>❌</button>:''}
    <h2 className="platform">#{i} - {item}</h2>
    
    <dl className="ad">
      <dt className="name">Required :</dt>
      <dd className="value">{required}</dd>
      
      <dt className="name">Current :</dt>
      <dd className="value"><input value={current} onChange={({target})=>{setCurrent(Number(target.value))}} type="number"></input></dd>
      
      <dt className="name">Missing / Extra :</dt>
      <dd className="value">{current-required}</dd>
    </dl>
  </li>
    )
}
