'use client'

import Edit from '@components/Edit'
import Form from '@components/Form'
import Notes from '@components/Notes'
import { useState } from 'react'

const page = () => {
  const [refresh,setRefresh]= new useState(0)
  const [updateNotes, setUpdateNotes] = useState([]);
  const [showEdit, setShowEdit]= new useState(false)
    return (
      <div className="w-full">
      <div className={`${showEdit?"pointer-events-none opacity-20":"pointer-events-auto"}`}>
      <Form refresh={refresh} setRefresh={setRefresh}/>
      <Notes refresh={refresh} setshowEdit={setShowEdit} setUpdateNotes={setUpdateNotes}/>
      </div>
        {showEdit &&
        <Edit showEdit={showEdit} setShowEdit={setShowEdit} updateNotes={updateNotes} setUpdateNotes={setUpdateNotes} refresh={refresh} setRefresh={setRefresh}/>}
      </div>
    )
  }

export default page
  