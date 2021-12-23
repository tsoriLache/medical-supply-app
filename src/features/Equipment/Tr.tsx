import React,{useState} from 'react'

export default function Tr({data}:{data:{id:number,item:string,required:number}}) {
    const [current, setCurrent] = useState(0)
    const {id,item,required} = data;
    return (
        <tr className="table__row">
        <td className="row__cell">{id}</td>
        <td className="row__cell">{item}</td>
        <td className="row__cell">{required}</td>
        <td className="row__cell"><input value={current} onChange={({target})=>{setCurrent(Number(target.value))}} type="number"></input></td>
        <td className="row__cell">{current-required}</td>
      </tr>
    )
}
