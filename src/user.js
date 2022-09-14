import React from 'react'
import Form from './trial'
// import App from './App'
const data=[
    {
        "id":1,
        "username":"Hilda",
        "country":"Tanzania",

    },
    {
        "id":2,
        "username":"Leila",
        "country":"Tanzania",
    },
    {
        id:"2",
        "username":"Leila",
        "country":"Tanzania",
    }

]
 const User=()=>{
    return(
       <div>
        {data.map(iteam=> <div style={{display:"flex",flexDirection:"column", border:"1px black solid",margin:"2%"}}>
            <h3>{iteam.country}</h3>
            <p>{iteam.username}</p>

            </div>
            )}
            {/* <p>My email Adress :{email?email:"loading"}</p> */}
        </div>
        
    )
}
export default User;