import Note from "@models/note";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const {userId, title ,description ,tag}=await request.json()

  try {
    await connectToDB();
    const newNote= new Note({creator:userId,title,description,tag})
    await newNote.save()
    return new Response(JSON.stringify(newNote), {status: 201} )
    
  } catch (error) {
    return new Response("Failed to create a new note", { status: 500 });
  }
}   
