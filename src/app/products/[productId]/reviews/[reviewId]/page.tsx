"use client"
import { notFound } from "next/navigation"
function getRandom(count: number){
    return Math.floor(Math.random()*count)
}

export default function ReviewDetails(
    {params,}:{
        params:{
            reviewId:string,
            productId:string
        }
    }
){
    const random = getRandom(2)
    if(random === 1){
        throw new Error("Error loading review")
    }
    if (parseInt(params.reviewId)>1000){
        notFound();
    }
    return (
        <h1>Review {params.reviewId} Details for {params.productId}</h1>
    )
}