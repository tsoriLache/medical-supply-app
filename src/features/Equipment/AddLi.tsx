import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { add_equipment } from './equipmentSlice';

export default function AddLi() {
    
    const dispatch = useAppDispatch();
    const id = useSelector((state: RootState) => state.equipment).length+1;
    const [newEquip, setNewEquip] = useState({id,item:'',required:1,current:0,diff:NaN,extra:true})
    const {required,current} = newEquip;//TODO check if it reanders every time - possible bug;

    const preventAdd = ()=>{
        const {id,item} = newEquip;
        return id&&item? false:true;
    }

    const handleChange = ({target}:{target:HTMLInputElement},field:string)=>{
        if(field==='required'||field==='current'){
            setNewEquip((prev)=>({...prev,[field]:Number(target.value),diff:newEquip.current-newEquip.required}))
        }else{
            setNewEquip((prev)=>({...prev,[field]:(target.value)}))
        }
    }
    
    const handleAdd=()=>{
        if(preventAdd())console.log('missing data')//TODO notify
        else{
            dispatch(add_equipment({newEquip}))
            setNewEquip({id,item:'',required:1,current:0,diff:NaN,extra:true})
        }
    }

    return (
        <li className="list-item" >
    <h2 className="platform"><button onClick={()=>{handleAdd()}}>➕</button> - <input value={newEquip.item} onChange={(e)=>handleChange(e,'item')} type="text"/></h2>
    
    <dl className="ad">
      <dt className="name">Required :</dt>
      <dd className="value"><input value={newEquip.required} onChange={(e)=>handleChange(e,'required')} type="text"/></dd>
      
      <dt className="name">Current :</dt>
      <dd className="value"><input value={newEquip.current} onChange={(e)=>handleChange(e,'current')} type="text"/></dd>
      
      <dt className="name">Missing / Extra :</dt>
      <dd className="value">{isNaN(current-required)?'':current-required}</dd>
    </dl>
  </li>
    )
}
