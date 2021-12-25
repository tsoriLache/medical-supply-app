import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

export default function SendBtn() {
    const employee = useSelector((state: RootState) => state.employee);
    const equipmentList = useSelector((state: RootState) => state.equipment);
    const handleSend = ()=>{
        if( Object.keys(employee).length === 0){
            console.log('missing employee data');
            return;
        }
        console.log(employee,equipmentList);
    }
    return (
        <button className='send-btn' onClick={()=>handleSend()}>
            send
        </button>
    )
}
