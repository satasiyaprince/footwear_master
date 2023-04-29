import React , { useMemo } from 'react'
import dummyData from './DummyData.json'
import Table from './DataTable'

const Appoinments = () => {

  const column = useMemo( () =>  [
    {
      Header : 'Doctor',
      columns : [
        {
          Header : 'firstname',
          accessor : 'first_name'
        },
        {
          Header : 'lastname',
          accessor : 'last_name'
        }
      ]
    },
    {
      Header : 'Details',
      columns : [
        {
          Header : 'Email',
          accessor : 'email'
        },
        {
          Header : 'Gender',
          accessor : 'gender'
        },
        {
          Header : 'Ip address',
          accessor : 'ip_address'
        }
      ]
    }
  ],[])

  return (
    <div className='container'>
      <Table
       data={dummyData}
       columns={column}
      />

    </div>
  )
}

export default Appoinments
