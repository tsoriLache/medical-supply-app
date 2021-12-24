import React from 'react'
import Tr from './Tr'
import Li from './Li'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import AddTr from './AddTr'
import AddLi from './AddLi'

export default function EquipmentForm() {
    const equipmentList = useSelector((state: RootState) => state.equipment)
    const employeeName = useSelector((state: RootState) => state.employee.name)
    return (
        <div id='equipment-form'>
            <h1 className="page-title">Hey {employeeName} Please Fill Out the Equipment List:</h1>
            {/* optional view list/table css by width */}
            <ul className="conversion-rate-list">
            {equipmentList.map(({id,item,required,current,extra},i)=><Li key={id} i={i} data={{id,item,required,current,extra}}/>)}  
            <AddLi/>
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
                    {equipmentList.map(({id,item,required,current,extra},i)=><Tr key={id} i={i} data={{id,item,required,current,extra}}/>)}
                    <AddTr />
                </tbody>
              </table>
            </div>
        </div>
    )
}
