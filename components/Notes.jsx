'use client'

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import NoteCard from './NoteCard'

const Notes = () => {
    const { data: session } = useSession();
    const [myNotes, setMyNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(`/api/user/${session?.user.id}`);
      const data = await response.json();
      setMyNotes(data);

    };

    if (session?.user.id) fetchNotes();
  }, [session?.user.id]);
  
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
  return (
      <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">
    {myNotes.map((note)=>{
        return <NoteCard key={note._id} note={note} handleDelete={() => handleDelete && handleDelete(note)}/>
    })}
    </div>
  )
}

export default Notes
