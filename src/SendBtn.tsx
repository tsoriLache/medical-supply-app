import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import ErrorMsg from './ErrorMsg';
const scrollToElement = require('scroll-to-element');


export default function SendBtn() {
    const employee = useSelector((state: RootState) => state.employee);
    const equipmentList = useSelector((state: RootState) => state.equipment);
    const handleSend = ()=>{
        if( Object.keys(employee).length === 0){
            ErrorMsg('missing employee information');
            window.scrollTo(0, 0);
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
