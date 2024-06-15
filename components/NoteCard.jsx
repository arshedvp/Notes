import React from 'react'
import { FaTrash,FaPen } from "react-icons/fa6";


const NoteCard = (props) => {
    const {note,handleDelete,handleEdit}=props

   
  return (
    <div className='notecard flex flex-col   justify-between gap-3 w-2/3 md:w-1/4 min-w-1/4 border mx-auto border-gray-400 rounded-lg px-3 py-2 hover:shadow-lg'>
        <h2 className='text-xl font-semibold'>{note.title}</h2>
        <p>{note.description}</p>
        <div className='flex flex-between'>

        <p className='bg-slate-400 w-auto rounded-xl px-3 items-center text-center'>
          {note.tag}
        </p>
        <div className='icons flex gap-3'>
          <div className='hover:cursor-pointer' onClick={handleDelete}><FaTrash /></div>
          <div className='hover:cursor-pointer' onClick={handleEdit}><FaPen /></div>

        </div>
        </div>
    </div>
  )
}

export default NoteCard
