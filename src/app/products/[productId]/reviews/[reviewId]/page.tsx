import { notFound } from "next/navigation"


export default function ReviewDetails(
    {params,}:{
        params:{
            reviewId:string,
            productId:string
        }
    }
){
    if (parseInt(params.reviewId)>1000){
        notFound();
    }
    return (
        <h1>Review {params.reviewId} Details for {params.productId}</h1>
    )
}