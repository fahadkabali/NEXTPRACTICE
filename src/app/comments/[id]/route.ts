import { redirect } from "next/navigation";
import { comments } from "../data"
import { RedirectType } from "next/navigation";


export async function Get(_req: Request,{params}:{
    params:{id:string}
}){
    if(parseInt(params.id)>comments.length){
        redirect("/comments")
    }
    const comment = comments.find(comment => comment.id === parseInt(params.id));
    return new Response("Success")
}

export async function PATCH(req: Request, {params}:{params:{id:string}}){
    const body = await req.json();
    const {text} = body;
    const index = comments.findIndex(comment => comment.id ===parseInt(params.id));
    comments[index].text = text;
    return Response.json(comments[index])
}

export async function DELETE(req: Request, {params}:{params:{id:string}}){
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment)
}