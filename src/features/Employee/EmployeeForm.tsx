import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import {update} from './employeeSlice'



export default function EmployeeForm() {
  // const employee = useSelector((state: RootState) => state.employee);
  const dispatch = useAppDispatch();
  const [data, setData] = useState({name:'',phone:'',date:'',location:''})

const handleSubmit = (e:React.MouseEvent<HTMLElement>)=>{
  e.preventDefault();
  dispatch(update(data))
  setData({name:'',phone:'',date:'',location:''})
}

    return (
        <div className="container">  
  <form id="contact" action="" method="post">
    <h3>Employee Information Form</h3>
    <h4>HAVEANICEDAY🧊</h4>
    <fieldset>
      <input value={data.name} placeholder="Full name" type="text" onChange={({target})=>setData((prev)=>({...prev,name:target.value}))} required />
    </fieldset>
    <fieldset>
        {/* TODO consider https://www.w3schools.com/html/html5_geolocation.asp */}
      <input value={data.location} placeholder="Location" type="text" onChange={({target})=>setData((prev)=>({...prev,location:target.value}))} required/>
    </fieldset>
    <fieldset>
      <input value={data.phone} placeholder="Your Phone Number (optional)" type="tel" onChange={({target})=>setData((prev)=>({...prev,phone:target.value}))} />
    </fieldset>
    <fieldset>
      <input value={data.date} placeholder="Date" type="date" onChange={({target})=>setData((prev)=>({...prev,date:target.value}))} required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Anything Else...." ></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
    </fieldset>
  </form>
</div>
    )
}
