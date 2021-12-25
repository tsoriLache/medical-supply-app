import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

export default function SendBtn() {
    const employee = useSelector((state: RootState) => state.employee);
    const equipmentList = useSelector((state: RootState) => state.equipment);
    const handleSend = ()=>{
        console.log(employee,equipmentList);
    }
    return (
        <button className='send-btn' onClick={()=>handleSend()}>
            send
        </button>
    )
}
