import React from 'react'




const ChirpCard = ({username, message,location,created,remove}) => { 
    
    return (
        <>
                 <hr></hr>
            <h3>{username}</h3>
            <p>{message}</p>
            <p>{location}</p>
            <small style={{display:"block"}}>{created}</small> 
            <button onClick={remove} type='button' className="btn btn-secondary" >Delete </button>
            
            
        </>
    )
}

export default ChirpCard;