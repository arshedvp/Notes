import Note from "@models/note";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const note = await Note.findById(params.id).populate("creator")
        if (!note) return new Response("Note Not Found", { status: 404 });

        return new Response(JSON.stringify(note), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    
  const {userId, title ,description ,tag}=await request.json()
    try {
        await connectToDB();

        const existingNote = await Note.findById(params.id);

        if (!existingNote) {
            return new Response("Note not found", { status: 404 });
        }

        existingNote.title = title;
        existingNote.description =description;
        existingNote.tag = tag;

        await existingNote.save();

        return new Response("Successfully updated the Note", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Note", { status: 500 });
    }
};
