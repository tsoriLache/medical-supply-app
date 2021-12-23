import React, { useState } from 'react'

export default function Li({data}:{data:{id:number,item:string,required:number}}) {
    const [current, setCurrent] = useState(0)
    const {id,item,required} = data;
    return (
        <li className="list-item">
    <h2 className="platform">#{id} - {item}</h2>
    
    <dl className="ad">
      <dt className="name">Required :</dt>
      <dd className="value">{required}</dd>
      
      <dt className="name">Current :</dt>
      <dd className="value"><input value={current} onChange={({target})=>{setCurrent(Number(target.value))}} type="number"></input></dd>
      
      <dt className="name">Missing / Extra :</dt>
      <dd className="value">{current}</dd>
    </dl>
  </li>
    )
}
