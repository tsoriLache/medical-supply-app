import React from 'react'
import Tr from './Tr'
import { fullEquipmentList } from '../../db/db'
import Li from './Li'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export default function EquipmentForm() {
    const employeeName = useSelector((state: RootState) => state.employee.name)
    return (
        <div id='equipment-form'>
            <h1 className="page-title">Hey {employeeName} Please Fill Out the Equipment List:</h1>

<ul className="conversion-rate-list">
{fullEquipmentList.map(({id,item,required})=><Li key={id} data={{id,item,required}}/>)}  
</ul>

<div className="wrap">
  <table className="conversion-rate-table">
    <thead className="table__head">
      <tr className="table__headers">
        <th className="header" scope="col">#</th>
        <th className="header" scope="col">Item :</th>
        <th className="header" scope="col">Required :</th>
        <th className="header" scope="col">Current :</th>
        <th className="header" scope="col">Missing / Extra :</th>
      </tr>
    </thead>

    <tbody className="table__content">
        {fullEquipmentList.map(({id,item,required})=><Tr key={id} data={{id,item,required}}/>)}
    </tbody>
  </table>
</div>
        </div>
    )
}
