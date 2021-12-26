import { nanoid } from 'nanoid';
import React,{useState} from 'react'
import { useAppDispatch } from '../../app/hooks';
import {add_equipment} from './equipmentSlice';
import ErrorMsg from '../../ErrorMsg';
import { Icon } from 'semantic-ui-react';

export default function AddTr() {
    const dispatch = useAppDispatch();
    const id = nanoid();//TODO check id error
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
        if(preventAdd()) ErrorMsg('missing item name..')
        else{
            dispatch(add_equipment({newEquip}))
            setNewEquip({id,item:'',required:1,current:0,diff:NaN,extra:true})
        }
    }
    
    return (
        <tr className="table__row">
        <td className="row__cell"><button className='add-btn' onClick={()=>{handleAdd()}}><Icon name='add'/></button></td>
        <td className="row__cell"><input value={newEquip.item} onChange={(e)=>handleChange(e,'item')} type="text"/></td>
        <td className="row__cell"><input value={newEquip.required} onChange={(e)=>handleChange(e,'required')} type="number"/></td>
        <td className="row__cell"><input value={newEquip.current} onChange={(e)=>handleChange(e,'current')} type="number"/></td>
        <td className="row__cell">{isNaN(current-required)?'':current-required}</td>
        </tr>
    )
}

