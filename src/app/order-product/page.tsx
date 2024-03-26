"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct (){
    const router = useRouter()
    function handleClick(){
        router.replace("/")
    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}