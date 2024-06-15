'use client'

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import NoteCard from './NoteCard'

const Notes = ({refresh,setshowEdit,setUpdateNotes}) => {
    const { data: session } = useSession();
    const [myNotes, setMyNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(`/api/user/${session?.user.id}`);
      const data = await response.json();
      setMyNotes(data);

    };

    if (session?.user.id) fetchNotes();
  }, [session?.user.id,refresh]);
  
  const handleDelete = async (note) => {
    try {
      await fetch(`/api/user/${note._id.toString()}`, {
        method: "DELETE",
      });

      const filteredNotes = myNotes.filter((item) => item._id !== note._id);

      setMyNotes(filteredNotes);
    } catch (error) {
      console.log(error);
    }
    
  };

  const handleEdit = async (note) => {
    try {
      const response=await fetch(`/api/notes/${note._id.toString()}`, {
        method: "GET",
      });
      const data = await response.json();
      setUpdateNotes(data)
      setshowEdit(true)
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <div className="w-full flex flex-col md:flex-row sm:flex-wrap justify-start gap-4 mt-6">
    {myNotes.map((note)=>{
        return <NoteCard key={note._id} note={note} handleDelete={() => handleDelete && handleDelete(note)} handleEdit={()=> handleEdit && handleEdit(note)}/>
    })}
    </div>
  )
}

export default Notes
