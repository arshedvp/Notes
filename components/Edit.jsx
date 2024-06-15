import React from 'react'
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';

const Edit = ({showEdit,setShowEdit,updateNotes,setUpdateNotes,refresh,setRefresh}) => {
  const router = useRouter();
  const { data: session } = useSession();
    const onChange = (e) => {
      setUpdateNotes({ ...updateNotes, [e.target.name]: e.target.value })
    }
    const toggleShow = () => {
      setShowEdit(!showEdit);
      setRefresh(!refresh)
    };

    const updateNote = async (e) => {
      e.preventDefault();
      
      setShowEdit(!showEdit)
      if (!updateNotes._id) return alert("Missing NoteID!");
  
      try {
        const response = await fetch(`/api/notes/${updateNotes._id.toString()}`, {
          method: "PATCH",
          body: JSON.stringify({
            userId: session?.user.id,
            title: updateNotes.title,
            description:updateNotes.description,
            tag: updateNotes.tag,
          }),
        });
  
        if (response.ok) {
          setRefresh(!refresh)
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (

    <div className="absolute z-10 left-20 sm:left-32 md:left-52 lg:left-60 xl:left-72 top-40  md:top-1/2  bg-white w-2/3 md:w-3/6 h-52 md:h-3/6 rounded-xl p-auto shadow-xl">
        <div >
          <form onSubmit={updateNote}>
            <div className="flex">

                <input
                  placeholder='Title'
                  className='form_input'
                  id="title"
                  name="title"
                  value={updateNotes.title}
                  onChange={onChange}
                  minLength={5} required />
                  <button onClick={toggleShow} className='hover:cursor-pointer w-3 px-6 font-bold'>x</button>
            </div>

                <textarea
                  placeholder='Note'
                  required
                  className='form_textarea'
                  id="description"
                  name="description"
                  value={updateNotes.description}
                  onChange={onChange}
                  minLength={5}
                ></textarea>

                <input
                  placeholder='Tag...'
                  className='form_tag'
                  id="tag"
                  name="tag"
                  value={updateNotes.tag}
                  onChange={onChange}
                  minLength={3} />

                <button
                  type='submit'
                  disabled={updateNotes.title.length < 5 || updateNotes.description.length < 5}
                  className='px-5 py-1.5 mt-3 mx-2 text-sm hover:cursor-pointer rounded-xl text-gray-700 font-semibold bg-slate-200'
                >
                  Save
                </button>


              </form>
        </div>
    </div>
  )
}

export default Edit
