'use client'
import React, { useState } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [show, setShow] = useState(true)
  const [note, setNote] = useState({title: "", description: "", tag: ""})
  const [submitting, setIsSubmitting] = useState(false);
  
  const createNote = async (e) => {
    e.preventDefault()
    setShow(true)
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/notes/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          title: note.title,
          description: note.description,
          tag: note.tag,
        }),
      });
      setNote({title: "", description: "", tag: ""})
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  

  const handleClick=()=>{
    if(session?.user){
      console.log(show)
      setShow(false)
    }
  }

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}
const toggleShow = () => {
  setShow(!show);
  setNote({title: "", description: "", tag: ""})
};

  return (
    <>
      <div onClick={handleClick} className=' w-full px-5 py-3 text-sm bg-white border border-gray-300 shadow-lg rounded-md text-black'>
        
        {show ? <p className='text-[1.1rem]'>Take a note...</p> : 
        (
        <section className='w-full max-w-full flex flex-col'>
            <div
                className='px-1.5 font-bold  text-sm bg-white rounded-full text-black flex justify-between '
                
              >
                <p className='font-semibold text-lg text-gray-700'>Add Note</p>
                <form onSubmit={toggleShow}><button className='hover:cursor-pointer w-3'>x</button></form>
                
          </div>
          <form onSubmit={createNote}>
            <input 
              placeholder='Title' 
              className='form_input'
              id="title" 
              name="title" 
              value={note.title} 
              onChange={onChange} 
              minLength={5} required/>

            <textarea
              placeholder='Take a note....'
              required
              className='form_textarea'
              id="description" 
              name="description"
              value={note.description} 
              onChange={onChange}
               minLength={5}
            ></textarea>

            <input 
              placeholder='Tag...' 
              className='form_tag'
              id="tag" 
              name="tag" 
              value={note.tag} 
              onChange={onChange} 
              minLength={3}/>

            <button
              type='submit'
              disabled={note.title.length<5 || note.description.length<5}
              className='px-5 py-1.5 mt-3 text-sm hover:cursor-pointer rounded-xl text-gray-700 font-semibold bg-slate-200'
            >
              Add
            </button>

            
          </form>
        </section>
      )}
      </div>
      
    </>
  )
}

export default Form
