const Card = ({children} :{children: React.ReactNode}) =>{
    const cardstryle={
        padding :"100px",
        margin:"10px",
        boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",
        border:"1px solid rgba(255,255,255,0.7)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
    return <div style={cardstryle}>{children}/</div>
}
export default Card