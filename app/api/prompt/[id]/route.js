import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

//GET
export const GET = async (req, {params}) => {
    try{
        await connectToDatabase();

        const prompt = await Prompt.findById(params.id).populate('creator');

        if(!prompt){
            return new Response(JSON.stringify({msg: 'Prompt not found'}), {status: 404});
        }

        return new Response(JSON.stringify(prompt), {status: 200});

    }catch (error) {
        return new Response(JSON.stringify({msg: 'Error fetching prompts'}), {status: 500});
    }
}

//Patch
export const PATCH = async (req, {params}) => {
    const {prompt, tag} = await req.json();
    try{
        await connectToDatabase();

        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt){
            return new Response(JSON.stringify({msg: 'Prompt not found'}), {status: 404});
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify({msg: 'Error updating prompt'}), {status: 500});
    }
}

//Delete
export const DELETE = async (req, {params}) => {
    try{
        await connectToDatabase();

        const existingPrompt = await Prompt.findByIdAndDelete(params.id);

        return new Response(JSON.stringify({msg: 'Prompt deleted'}), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify({msg: 'Error deleting prompt'}), {status: 500});
    }
}